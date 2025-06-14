import { CoffeeType } from "@/shared/types";
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useRef, useState } from "react";

interface CoffeeDisplayProps {
  selectedCoffee: CoffeeType;
}

const CoffeeDisplay = ({ selectedCoffee }: CoffeeDisplayProps) => {
  const isFirstRender = useRef(true);
  const [duration, setDuration] = useState(0.6);

  useEffect(() => {
    // CHANGE DURATION DA TRANSITION
    if (isFirstRender.current) {
      setDuration(0.6); // slow animation
      isFirstRender.current = false;
    } else {
      setDuration(0.3); // fast animation
    }
  }, [selectedCoffee]);

  return (
    <div className="relative top-50">
      <AnimatePresence mode="sync">
        <motion.span
          key={selectedCoffee.name}
          className={selectedCoffee.name_styles}
          initial={{ opacity: "0%", x: -50 }}
          animate={{ opacity: "50%", x: 0 }}
          exit={{ opacity: "0%", x: -50 }}
          transition={{ duration }}
        >
          {selectedCoffee.name}
        </motion.span>
      </AnimatePresence>

      <motion.div
        className={selectedCoffee.image_styles}
        key={selectedCoffee.name}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
      >
        <img
          src={selectedCoffee.image}
          alt={`frappuccino-${selectedCoffee.name}`}
        />
      </motion.div>
    </div>
  );
};

export default CoffeeDisplay;
