export type CoffeeType = {
  id: number;
  name: string;
  image: string;
  sm_styles: string;
  description: string;
};

export enum ContainerStyles {
  strawberry = `absolute bottom-10 left-6 w-[75px] cursor-pointer transition-all duration-150 hover:bottom-13`,
  "cookies&cream" = `absolute bottom-0 -left-6 w-[175px] cursor-pointer bg-black transition-all duration-150 hover:bottom-3`,
  matcha = `absolute bottom-0 -left-6 w-[175px] cursor-pointer transition-all duration-150 hover:bottom-3`,
  caramel = `absolute bottom-8 -left-2 w-[137px] cursor-pointer transition-all duration-150 hover:bottom-11`,
}
