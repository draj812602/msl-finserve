import { RevenueChart } from "@/components/charts/RevenueChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function AdminReportsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold tracking-tight">Reports</h1>
      <Card>
        <CardHeader>
          <CardTitle>Revenue</CardTitle>
        </CardHeader>
        <CardContent>
          <RevenueChart />
        </CardContent>
      </Card>
    </div>
  );
}
