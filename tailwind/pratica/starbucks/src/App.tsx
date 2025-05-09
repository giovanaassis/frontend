import { useState } from "react";
import CoffeeMenu from "./components/CoffeeMenu";
import Navbar from "./components/Navbar";
import { coffees } from "./shared/coffees";
import { CoffeeType } from "./shared/types";
import CoffeeDisplay from "./components/CoffeeDisplay";
import { motion } from "motion/react";

function App() {
  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeType>(coffees[3]);

  return (
    <>
      <main className="app flex h-full w-full">
        {/* CONTENT SECTION */}
        <section className="bg-primary-green flex w-[70%] flex-col">
          <Navbar />
          {/* TITLE AND DESCRIPTION*/}
          <motion.div
            className="flex w-xl flex-col gap-20 py-10 pl-10"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div>
              <h1 className="ml-16 text-4xl capitalize">grab your</h1>
              <span className="font-display text-7xl capitalize">
                frappuccino!
              </span>
            </div>

            <p>{selectedCoffee.description}</p>
          </motion.div>

          <CoffeeMenu setSelectedCoffee={setSelectedCoffee} />

          {/* COFFEE IMAGE */}
          <CoffeeDisplay selectedCoffee={selectedCoffee} />
        </section>

        {/* DYNAMIC COLOR SECTION */}
        <section className={`${selectedCoffee.color} w-[30%]`}></section>
      </main>
    </>
  );
}

export default App;
