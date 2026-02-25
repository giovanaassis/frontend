"use clieent";

import { deleteSession } from "@/actions/session.actions";

async function AdminPage() {
  return (
    <div className="p-12">
      <h1>Admin Page</h1>
      <button className="btn-primary" onClick={deleteSession}>
        LOG OUT
      </button>
    </div>
  );
}

export default AdminPage;
