import { Suspense } from "react";
import { PostsProps } from "../page";
import PostInfo from "./components/PostInfo";

export default async function DetailsPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await fetch(`https://dummyjson.com/posts/${id}`);
  const data: PostsProps = await response.json();

  return (
    <div>
      <h1>Post: {id}</h1>
      <Suspense fallback={<p>Loading...</p>}>
        <PostInfo title={data.title} body={data.body} />
      </Suspense>
    </div>
  );
}
