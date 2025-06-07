import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="flex items-center justify-center mt-10 bg-gray-100 text-center px-4">
      <div>
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-2xl mt-4 text-gray-800">Page Not Found</p>
        <p className="mt-2 text-gray-600">
          Sorry, this page doesn't exist.
        </p>
        <Link
          href="/"
          className="mt-6 inline-block bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700 transition"
        >
          Go back to home
        </Link>
      </div>
    </div>
  );
}
