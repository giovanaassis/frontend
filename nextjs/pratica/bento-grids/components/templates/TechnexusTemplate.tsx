import Image from "next/image";
import DiscountCode from "@/assets/images/technexus/discount-code.svg";
import Urbanist from "@/assets/images/technexus/urbanist.svg";
import TechnexusSign from "@/assets/images/technexus/technexus-sign.svg";
import TechnexusIphone from "@/assets/images/technexus/technexus-iphone.svg";
import TechnexusApp from "@/assets/images/technexus/technexus-app.svg";
import TechnexusLogo from "@/assets/images/technexus/technexus-logo.svg";
import TechnexusBottle from "@/assets/images/technexus/technexus-bottle.svg";
import Outdoor from "@/assets/images/technexus/outdoor.svg";
import Slogan from "@/assets/images/technexus/slogan.svg";

function TechnexusTemplate() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6 bg-slate-200 rounded-3xl">
      {/* Discount */}
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={DiscountCode}
          alt="Discount"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Urbanist */}
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={Urbanist}
          alt="Urbanist"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Sign */}
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={TechnexusSign}
          alt="sign"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Bottle */}
      <div className="md:row-span-2 rounded-3xl overflow-hidden">
        <Image
          src={TechnexusBottle}
          alt="bottle"
          className="w-full h-full object-cover"
        />
      </div>

      {/* App */}
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={TechnexusApp}
          alt="app"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Logo */}
      <div className="md:col-span-2 rounded-3xl overflow-hidden">
        <Image
          src={TechnexusLogo}
          alt="Logo"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Outdoor */}
      <div className="md:col-span-2 rounded-3xl overflow-hidden">
        <Image
          src={Outdoor}
          alt="outdoor"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slogan */}
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={Slogan}
          alt="Slogan"
          className="w-full h-full object-cover"
        />
      </div>

      {/* iPhone */}
      <div className="rounded-3xl overflow-hidden">
        <Image
          src={TechnexusIphone}
          alt="iphone"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}

export default TechnexusTemplate;
