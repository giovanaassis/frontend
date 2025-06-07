import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-950 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">NEXT APP</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/posts" className="hover:underline">Posts</Link>
          <Link href="/contacts" className="hover:underline">Contact</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
