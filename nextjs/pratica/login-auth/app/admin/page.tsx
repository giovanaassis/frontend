"use client";

import { deleteSession } from "@/actions/session.actions";
import EditUserForm from "@/components/forms/EditUserForm";
import { useEffect, useState } from "react";

function AdminPage() {
  const [user, setUser] = useState<User>();

  useEffect(() => {
    const user: User = JSON.parse(localStorage.getItem("user") || "{}");
    setUser(user);
  }, []);

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="p-12">
      <h1>Admin Page</h1>
      <h2>Welcome, {user?.username}</h2>
      <EditUserForm user={user} onChangeUser={setUser} />
      <button className="btn-primary mt-5" onClick={deleteSession}>
        LOG OUT
      </button>
    </div>
  );
}

export default AdminPage;
