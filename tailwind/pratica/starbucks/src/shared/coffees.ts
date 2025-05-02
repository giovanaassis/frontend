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
    name_styles: `font-display absolute -right-2 bottom-60 block w-fit -rotate-90 text-7xl capitalize opacity-50`,
    image_styles: `absolute -right-27 -top-134 w-[215px]`,
    description:
      "A refreshing blend of ice, milk, and strawberry purée, creating a fruity and vibrant drink. Finished with whipped cream, it's the perfect balance of sweet and creamy.",
    color: `bg-[#C17C74]`,
  },
  {
    id: 2,
    name: "cookies&cream",
    image: FrapCookies,
    name_styles: `font-display absolute -right-17 bottom-60 block w-fit -rotate-90 text-7xl capitalize opacity-50`,
    image_styles: `absolute -right-63 -top-150 w-[500px]`,
    description:
      "A dessert-inspired favorite made by blending milk, ice, and chocolate cookie crumbles into a creamy base. Topped with whipped cream and extra cookie bits for a crunchy finish.",
    color: `bg-[#362C28]`,
  },
  {
    id: 3,
    name: "matcha",
    image: FrapMatcha,
    name_styles: `font-display absolute right-10 bottom-50 block w-fit -rotate-90 text-7xl capitalize opacity-50`,
    image_styles: `absolute -right-63 -top-150 w-[500px]`,
    description:
      "A delicious mix of sweetened matcha green tea, milk, and ice, blended into a smooth and energizing drink. Topped with whipped cream for a lightly earthy and indulgent treat.",
    color: `bg-[#8B9801]`,
  },
  {
    id: 4,
    name: "caramel",
    image: FrapCaramel,
    name_styles: `font-display absolute right-10 bottom-50 block w-fit -rotate-90 text-7xl capitalize opacity-50`,
    image_styles: `absolute -right-50 bottom-15 w-[400px]`,
    description:
      "A rich and creamy blended beverage featuring buttery caramel syrup, milk, ice, and topped with whipped cream and a generous drizzle of caramel. A smooth, sweet treat for caramel lovers.",
    color: `bg-[#E6BB83]`,
  },
];
