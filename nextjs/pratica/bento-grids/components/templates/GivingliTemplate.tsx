import CustomizationImage from "@/assets/images/givingli/customization-img.avif";
import Image from "next/image";

// --color-lilac: #C0B0E2;
// --color-pink: #F482A2;
// --color-green: #C6D88E;
// --color-yellow: #FBDE6E;
// --color-orange: #F9A473;
// --color-blue: #B6CCDA;

function GivingliTemplate() {
  return (
    <div>
      <Image src={CustomizationImage} alt="" width={200}/>
    </div>
  );
}

export default GivingliTemplate;
