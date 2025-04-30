import { coffees } from "@/shared/coffees";
import { CoffeeType, ContainerStyles } from "@/shared/types";

interface CoffeeMenuProps {
  setSelectedCoffee: (value: CoffeeType) => void;
}

const CoffeeMenu = ({ setSelectedCoffee }: CoffeeMenuProps) => {

  return (
    <section className="fixed bottom-0 left-0 flex h-[33%] w-[50%] items-end justify-center gap-x-10 rounded-tr-4xl bg-white">
      {coffees.map((coffee) => (
        <div
          className="bg-primary-green relative h-[80px] w-30 rounded-t-xl"
          key={coffee.id}
        >
          <div
            className={
              ContainerStyles[coffee.name as keyof typeof ContainerStyles]
            }
          >
            <img
              src={`${coffee.image}`}
              alt="frappuccinos"
              className="absolute bottom-0"
              onClick={() => setSelectedCoffee(coffee)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CoffeeMenu;
