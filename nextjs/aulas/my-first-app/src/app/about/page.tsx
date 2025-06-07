import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My First Next JS App | About",
};

export default function AboutPage() {
  return (
    <h1 className="flex items-center justify-center mt-10 font-bold text-2xl">
      About
    </h1>
  );
}
