import { editUserAction } from "@/actions/auth.actions";

function EditUserForm({
  user,
  onChangeUser,
}: {
  user: User;
  onChangeUser: (user: User) => void;
}) {
  return (
    <form
      action={async (formData) => {
        const updatedUser = await editUserAction(user.id!, formData);

        localStorage.clear();
        localStorage.setItem("user", JSON.stringify(updatedUser));
        onChangeUser(updatedUser!);
      }}
      className="w-[50%] border-2 p-5 rounded-lg flex flex-col gap-3 my-5"
    >
      <input type="text" name="username" defaultValue={user.username} />
      <input type="email" name="email" defaultValue={user.email} />
      <button type="submit" className="btn-primary self-start">
        Update
      </button>
    </form>
  );
}

export default EditUserForm;
