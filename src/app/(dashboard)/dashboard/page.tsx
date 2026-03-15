import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PortfolioChart } from "@/components/charts/PortfolioChart";
import { TransactionChart } from "@/components/charts/TransactionChart";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Overview</CardTitle>
          </CardHeader>
          <CardContent>
            <PortfolioChart />
          </CardContent>
        </Card>
        <Card className="md:col-span-2">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <TransactionChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
