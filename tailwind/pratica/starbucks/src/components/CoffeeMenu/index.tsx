import FrapStrawberry from "@/assets/frap_strawberry.png";
import FrapCookies from "@/assets/frap_cookies_cream.png";
import FrapMatcha from "@/assets/frap_matcha.png";
import FrapCaramel from "@/assets/frap_caramel.png";

const coffees = [
  {
    name: "strawberry",
    image: FrapStrawberry,
    styles: `absolute bottom-10 left-6 w-[75px] cursor-pointer bg-black transition-all duration-150 hover:bottom-13`,
  },
  {
    name: "cookies & cream",
    image: FrapCookies,
    styles: `absolute bottom-0 -left-6 w-[175px] cursor-pointer bg-black transition-all duration-150 hover:bottom-3`,
  },
  {
    name: "matcha",
    image: FrapMatcha,
    styles: `absolute bottom-0 -left-6 w-[175px] cursor-pointer bg-black transition-all duration-150 hover:bottom-3`,
  },
  {
    name: "caramel",
    image: FrapCaramel,
    styles: `absolute bottom-8 -left-2 w-[137px] cursor-pointer bg-black transition-all duration-150 hover:bottom-11`,
  },
];

const CoffeeMenu = () => {
  return (
    <section className="fixed bottom-0 left-0 flex h-[33%] w-[50%] items-end justify-center gap-x-10 rounded-tr-4xl bg-white">
      {coffees.map((coffee) => (
        <div className="bg-primary-green relative h-[80px] w-30 rounded-t-xl">
          <div className={`${coffee.styles}`}>
            <img
              src={coffee.image}
              alt="frappuccinos"
              className="absolute bottom-0"
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default CoffeeMenu;
