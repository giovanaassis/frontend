import Logo from "@/assets/logo.png"
import { MapPinIcon } from "@heroicons/react/24/solid"

const Navbar = () => {
  return (
    <nav className="flex items-center gap-x-10 p-5">
        <img src={Logo} alt="logo" className="w-10"/>
        <ul className="flex gap-10 uppercase font-light">
            <li>coffee</li>
            <li>tea</li>
            <li>gift cards</li>
            <div className="flex gap-1">
                <MapPinIcon className="size-5"/>
                <li>find a store</li>
            </div>
        </ul>
    </nav>
  )
}

export default Navbar