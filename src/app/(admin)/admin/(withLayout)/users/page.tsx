import { UsersTable } from "@/components/tables/UsersTable";

export default function AdminUsersPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Users</h1>
      <UsersTable />
    </div>
  );
}
