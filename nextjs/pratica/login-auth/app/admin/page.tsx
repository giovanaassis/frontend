import { cookies } from "next/headers";
import { redirect } from "next/navigation";

async function AdminPage() {
  const session = (await cookies()).get("sessionId")?.value;
  if (!session) redirect("/");

  return <div>AdminPage</div>;
}

export default AdminPage;
