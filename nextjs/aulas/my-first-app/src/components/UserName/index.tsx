"use client";

import { useState } from "react";

function UserName() {
  const [name, setName] = useState("Giovana");

  const handleName = () => {
    setName("Hidden");
  };

  return (
    <div className="p-4">
      <button
        onClick={handleName}
        className="bg-gray-800 text-white p-2 rounded-sm cursor-pointer"
      >
        Hide Name
      </button>
      <p>User: {name}</p>
    </div>
  );
}

export default UserName;
