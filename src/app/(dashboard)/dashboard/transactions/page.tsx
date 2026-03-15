import { TransactionsTable } from "@/components/tables/TransactionsTable";

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Transactions</h1>
      <TransactionsTable />
    </div>
  );
}
