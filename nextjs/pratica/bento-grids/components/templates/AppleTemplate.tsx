import { RiUserVoiceFill } from "react-icons/ri";
import { BsFillLightningChargeFill } from "react-icons/bs";
import { FaDotCircle } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa6";
import { HiVolumeUp } from "react-icons/hi";
import Image from "next/image";
import Case from "@/assets/images/apple/airpods-case.png";

function AppleTemplate() {
  return (
    <div className="font-sans grid grid-cols-1 md:grid-cols-2 gap-3 bg-[#030403] p-8 rounded-2xl">
      <div className="apple-card md:h-120 h-fit">
        <RiUserVoiceFill className="text-white text-5xl mb-5"/>
        <h3 className="text-white font-bold text-xl">Conversation Awareness</h3>
        <p className="md:w-[70%]">
          Automatically lowers the volume of what{"'"}s playing, boosts voices
          in front of you, and reduces background noise.
        </p>
      </div>

      <div className='apple-card bg-[url("/apple-bg.png")] bg-center bg-cover text-left items-start h-180 row-span-2 justify-end'>
        <h3 className="text-white font-bold text-xl">Spatial Audio</h3>
        <p className="w-[80%]">
          Immerse yourself deeper in the music and movies you love - with
          three-dimensional that feels like it{"'"}s coming from all around you.</p>
      </div>

      <div className="apple-card row-span-2">
        <BsFillLightningChargeFill className="text-[#08FE45] border-5 border-[#08FE45] rounded-full text-7xl p-1 mb-10"/>
        <h3 className="text-white font-bold text-xl">Enjoy up to</h3>
        <h2 className="text-white md:text-8xl text-6xl"><span className="text-[#08FE45]">6</span> hours</h2>
        <p>of listening time on one charge.</p>
        <h3 className="text-white font-bold text-xl mt-10">and up to</h3>
        <h2 className="text-white md:text-8xl text-6xl"><span className="text-[#08FE45]">30</span> hours</h2>
        <p>of total listening time with the charging case.</p>
      </div>

      <div className="apple-card row-span-2 h-full bg-[#01C056] text-white">
        <FaDotCircle />
        <FaArrowUp className="text-8xl my-5" />
        <h2 className="font-bold text-xl">Find My with Precision Finding</h2>
        <p className="md:w-[70%]">Quickly pinpoint the location of your case or use Find My with proximity view if you lose track of your AirPods Pro.</p>
      </div>

      <div className="apple-card row-span-2">
        <h2 className="text-white font-bold text-xl mt-5">Wireless Charging</h2>
        <p className="md:w-[75%]">The MagSafe Charging Case lets you charge your AirPods Pro without plugging in. Recharge the case with an <span className="text-[#08FE45] font-medium">Apple Watch charger, MagSafe charger, Qi-certified charger, or the USB-C connector.</span></p>
        <Image src={Case} alt="airpods case" />
      </div>

      <div className="apple-card h-120">
        <HiVolumeUp className="text-8xl text-white mb-5"/>
        <h2 className="text-white font-bold text-xl mt-5">Personalized Volume</h2>
        <p className="md:w-[80%]">Uses machine learning to understand your listening preferences in different environments and adapts sound based on your patterns over time.</p>
      </div>
    </div>
  );
}

export default AppleTemplate;
