import { auth } from "@/auth";
import Image from "next/image";

async function AdminPage() {
  const session = await auth();

  if (!session?.user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-12">
      <h1>Admin Page</h1>
      <h2>Welcome, {session.user.name}</h2>
      <div>
        <Image
          src={session.user.image!}
          alt="your-profile-image"
          width={100}
          height={100}
          className="bg-gray-800 rounded-full"
        />
      </div>
      {/* <EditUserForm user={user} onChangeUser={setUser} /> */}
    </div>
  );
}

export default AdminPage;
