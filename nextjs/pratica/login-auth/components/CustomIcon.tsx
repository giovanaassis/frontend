import Image from "next/image";

type CustomIconProps = {
  src: string;
  alt: string;
};

function CustomIcon({ src, alt }: CustomIconProps) {
  return (
    <div className="p-2 border border-gray-400 rounded-full hover:scale-125 duration-200">
      <Image src={src} alt={alt} width={18} height={18} />
    </div>
  );
}

export default CustomIcon;
