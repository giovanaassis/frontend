import React from "react";

async function PostInfo({ title, body }: { title: string; body: string }) {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <div>
      <h2 className="font-bold text-blue-900 mt-5">{title}</h2>
      <p className="font-bold">{body}</p>
    </div>
  );
}

export default PostInfo;
