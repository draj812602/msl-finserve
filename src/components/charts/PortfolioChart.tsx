"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const placeholderData = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 450 },
  { name: "May", value: 600 },
  { name: "Jun", value: 550 },
];

export function PortfolioChart() {
  return (
    <div className="h-[200px] min-h-[200px] w-full sm:h-[250px] sm:min-h-[250px]">
      <ResponsiveContainer width="100%" height="100%" minHeight={200}>
        <AreaChart data={placeholderData}>
          <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
          <XAxis dataKey="name" className="text-xs" />
          <YAxis className="text-xs" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="value"
            stroke="hsl(var(--primary))"
            fill="hsl(var(--primary) / 0.2)"
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
