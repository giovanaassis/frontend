import CoffeeMenu from "./components/CoffeeMenu";
import Navbar from "./components/Navbar";
import FrapCaramel from "@/assets/frap_caramel.png";

function App() {

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
              Combinação de café, chocolate intenso, leite e gelo triturado.
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facilis
              quod aliquam dicta consectetur mollitia nihil quasi.
            </p>
          </div>

          <CoffeeMenu />

          {/* COFFEE IMAGE */}
          <div className="relative top-50">
            <span className="font-display absolute right-10 bottom-50 block w-fit -rotate-90 text-7xl capitalize opacity-50">
              caramel
            </span>
            <div className="absolute -right-50 bottom-15 w-[400px]">
              <img src={FrapCaramel} alt="" />
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
