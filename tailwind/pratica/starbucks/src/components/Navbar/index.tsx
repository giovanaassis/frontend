import Logo from "@/assets/logo.png";
import { MapPinIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const navItemStyles = `cursor-pointer relative py-1 rounded-full w-30 flex items-center justify-center overflow-hidden transition duration-[.5s] hover:text-black hover:font-normal z-1`;

  return (
    <nav className="flex items-center gap-x-10 p-5">
      <img src={Logo} alt="logo" className="w-10" />
      <ul className="flex gap-10 font-light uppercase">
        <li className={`${navItemStyles} afterStyles showButton`}>coffee</li>
        <li className={`${navItemStyles} afterStyles showButton`}>tea</li>
        <li className={`${navItemStyles} afterStyles showButton`}>gift cards</li>
        <div className={`${navItemStyles} w-40 gap-2 afterStyles showButton`}>
          <MapPinIcon className="size-5" />
          <li>find a store</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
