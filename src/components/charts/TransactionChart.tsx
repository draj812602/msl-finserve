"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const placeholderData = [
  { name: "Mon", count: 12 },
  { name: "Tue", count: 19 },
  { name: "Wed", count: 15 },
  { name: "Thu", count: 22 },
  { name: "Fri", count: 18 },
  { name: "Sat", count: 8 },
  { name: "Sun", count: 5 },
];

export function TransactionChart() {
  return (
    <div className="h-[200px] min-h-[200px] w-full sm:h-[250px] sm:min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%" minHeight={200}>
        <BarChart data={placeholderData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip />
          <Bar
            dataKey="count"
            fill="hsl(var(--chart-1))"
            radius={[4, 4, 0, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
