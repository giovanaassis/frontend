import { CoffeeType } from "./types";
import FrapStrawberry from "@/assets/frap_strawberry.png";
import FrapCookies from "@/assets/frap_cookies_cream.png";
import FrapMatcha from "@/assets/frap_matcha.png";
import FrapCaramel from "@/assets/frap_caramel.png";

export const coffees: Array<CoffeeType> = [
  {
    id: 1,
    name: "strawberry",
    image: FrapStrawberry,
    sm_styles: `absolute bottom-10 left-6 w-[75px] cursor-pointer bg-black transition-all duration-150 hover:bottom-13`,
    description:
      "A refreshing blend of ice, milk, and strawberry purée, creating a fruity and vibrant drink. Finished with whipped cream, it's the perfect balance of sweet and creamy.",
  },
  {
    id: 2,
    name: "cookies&cream",
    image: FrapCookies,
    sm_styles: `absolute bottom-0 -left-6 w-[175px] cursor-pointer bg-black transition-all duration-150 hover:bottom-3`,
    description:
      "A dessert-inspired favorite made by blending milk, ice, and chocolate cookie crumbles into a creamy base. Topped with whipped cream and extra cookie bits for a crunchy finish.",
  },
  {
    id: 3,
    name: "matcha",
    image: FrapMatcha,
    sm_styles: `absolute bottom-0 -left-6 w-[175px] cursor-pointer bg-black transition-all duration-150 hover:bottom-3`,
    description:
      "A delicious mix of sweetened matcha green tea, milk, and ice, blended into a smooth and energizing drink. Topped with whipped cream for a lightly earthy and indulgent treat.",
  },
  {
    id: 4,
    name: "caramel",
    image: FrapCaramel,
    sm_styles: `absolute bottom-8 -left-2 w-[137px] cursor-pointer bg-black transition-all duration-150 hover:bottom-11`,
    description:
      "A rich and creamy blended beverage featuring buttery caramel syrup, milk, ice, and topped with whipped cream and a generous drizzle of caramel. A smooth, sweet treat for caramel lovers.",
  },
];
