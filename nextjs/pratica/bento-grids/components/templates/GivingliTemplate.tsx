import CustomizationImage from "@/assets/images/givingli/customization-img.webp";
import Image from "next/image";
import SchedulingImage from "@/assets/images/givingli/scheduling-img.webp";
import WalletImage from "@/assets/images/givingli/wallet-img.webp";
import InboxImage from "@/assets/images/givingli/inbox-img.webp";
import GiftsImage from "@/assets/images/givingli/gifts-img.webp";
import RemindersImage from "@/assets/images/givingli/reminders-img.webp";

function GivingliTemplate() {
  return (
    <div className="font-sans max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-5 text-center md:text-left">
      <div className="bg-[#C0B0E2] rounded-3xl p-5 text-[#562663] font-medium md:row-span-2 flex flex-col justify-around items-center md:items-baseline">
        <h2 className="font-bold text-2xl mb-5">Customization</h2>
        <Image
          src={CustomizationImage}
          alt="Customization image"
          width={300}
          height={300}
          className="object-cover w-auto h-auto"
          priority
        />
        <p className="w-full md:w-[70%]">
          Use a pre-designed template or personalize with video, stickers, fonts
          and more
        </p>
      </div>
      <div className="bg-[#F482A2] md:h-70 rounded-3xl p-5 text-[#562663] font-medium md:col-span-2 flex flex-col md:flex-row items-center gap-5 overflow-visible relative">
        <div className="self-end md:w-[55%] z-10">
          <h2 className="font-bold text-2xl mb-5">Scheduling</h2>
          <p>
            Schedule all your cards and gifts now and we&apos;ll send them later
          </p>
        </div>
        <Image
          src={SchedulingImage}
          alt="Scheduling image"
          width={300}
          height={300}
          className="object-contain w-auto md:absolute -bottom-5 -right-10"
          priority
        />
      </div>
      <div className="bg-[#C6D88E] md:h-90 rounded-3xl p-5 text-[#1F4922] font-medium flex flex-col items-center md:items-baseline gap-5">
        <Image
          src={WalletImage}
          alt="Wallet image"
          width={300}
          height={200}
          className="w-auto object-contain"
          priority
        />
        <div className="w-[60%]">
          <h2 className="font-bold text-2xl mb-5">Wallet</h2>
          <p>Access all your gifts and save up your Givingli Cash</p>
        </div>
      </div>
      <div className="bg-[#FBDE6E] h-90 rounded-3xl p-5 text-[#49451B] font-medium overflow-hidden flex flex-col items-center md:items-baseline gap-5">
        <div className="w-[50%]">
          <h2 className="font-bold text-2xl mb-5">Inbox</h2>
          <p>Track your gifts, group chats, and sent cards</p>
        </div>
        <Image
          src={InboxImage}
          alt="Inbox image"
          width={300}
          height={300}
          className="object-cover"
          priority
        />
      </div>
      <div className="bg-[#F9A473] md:h-70 rounded-3xl p-5 text-[#632F19] font-medium md:col-span-2 flex flex-col md:flex-row items-center overflow-hidden gap-5">
        <div className="md:self-end md:w-[50%]">
          <h2 className="font-bold text-2xl mb-5">Send Gifts</h2>
          <p>Send as a group with friends or individually</p>
        </div>
        <Image
          src={GiftsImage}
          alt="Gifts image"
          width={500}
          height={300}
          className="object-contain md:mt-30"
          priority
        />
      </div>
      <div className="bg-[#B6CCDA] h-70 rounded-3xl p-5 text-[#164767] font-medium flex flex-col gap-5 overflow-hidden items-center md:items-baseline">
        <div className="w-[50%]">
          <h2 className="font-bold text-2xl mb-5">Reminders</h2>
          <p>Never miss a birthday again</p>
        </div>
        <Image
          src={RemindersImage}
          alt="Reminders image"
          width={300}
          height={300}
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}

export default GivingliTemplate;
