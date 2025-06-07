import UserName from "@/components/UserName";

interface PostsProps {
  id: string;
  title: string;
  body: string;
}

interface ResponseProps {
  posts: PostsProps[];
}

export default async function page() {
  const response = await fetch("https://dummyjson.com/posts");
  const data: ResponseProps = await response.json();

  return (
    <div>
      <h1 className="flex items-center justify-center mt-10 font-bold text-2xl">
        Posts
      </h1>

      <UserName />

      <div className="mt-10">
        {data.posts.map(post => (
          <div key={post.id} className="border p-4 rounded shadow">
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-gray-700">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
