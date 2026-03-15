import { AccountsTable } from "@/components/tables/AccountsTable";

export default function AdminAccountsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Accounts</h1>
      <AccountsTable />
    </div>
  );
}
