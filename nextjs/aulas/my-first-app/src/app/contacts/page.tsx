import { Metadata } from "next";

export const metadata: Metadata = {
  title: "My First Next JS App | Contact",
};

export default function ContactsPage() {
  return (
    <h1 className="flex items-center justify-center mt-10 font-bold text-2xl">
      Contacts
    </h1>
  );
}
