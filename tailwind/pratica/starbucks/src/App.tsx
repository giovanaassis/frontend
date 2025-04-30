import { useState } from "react";
import CoffeeMenu from "./components/CoffeeMenu";
import Navbar from "./components/Navbar";
import { coffees } from "./shared/coffees";
import { CoffeeType } from "./shared/types";

// name, image, styles, color, description

function App() {

  const [selectedCoffee, setSelectedCoffee] = useState<CoffeeType>(coffees[3]);

  return (
    <>
      <main className="app flex h-full w-full">
        {/* CONTENT SECTION */}
        <section className="bg-primary-green flex w-[70%] flex-col">
          <Navbar />
          {/* TITLE AND DESCRIPTION*/}
          <div className="flex w-xl flex-col gap-20 py-10 pl-10">
            <div>
              <h1 className="ml-16 text-4xl capitalize">grab your</h1>
              <span className="font-display text-7xl capitalize">
                frappuccino!
              </span>
            </div>

            <p>
              {selectedCoffee.description}
            </p>
          </div>

          <CoffeeMenu setSelectedCoffee={setSelectedCoffee}/>

          {/* COFFEE IMAGE */}
          <div className="relative top-50">
            <span className="font-display absolute right-10 bottom-50 block w-fit -rotate-90 text-7xl capitalize opacity-50">
              {selectedCoffee.name}
            </span>
            <div className="absolute -right-50 bottom-15 w-[400px]">
              <img src={selectedCoffee.image} alt={`frappuccino-${selectedCoffee.name}`} />
            </div>
          </div>
        </section>

        {/* DYNAMIC COLOR SECTION */}
        <section className="bg-caramel w-[30%]"></section>
      </main>
    </>
  );
}

export default App;
