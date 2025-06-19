"use client";

import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";

const chartData = [
  { month: "January", sales: 12.5 },
  { month: "February", sales: 10 },
  { month: "March", sales: 8 },
  { month: "April", sales: 6 },
  { month: "May", sales: 4 },
  { month: "June", sales: 2 },
];

export function SpreadOfSales() {
  return (
    <Card className="border-none w-full -ml-5">
      <CardContent>
        <LineChart
          width={370}
          height={200}
          data={chartData}
          margin={{ top: 10, right: 20, bottom: 0, left: 0 }}
        >
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <YAxis
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => `${value}`}
          />
          <Tooltip
            contentStyle={{ backgroundColor: "#fff", borderRadius: "0.5rem" }}
            labelFormatter={(value) => `Month: ${value}`}
            formatter={(value) => [`${value}`, "Sales"]}
          />
          <Line
            dataKey="sales"
            type="monotone"
            stroke="#F94144"
            strokeWidth={2}
            dot={{ fill: "#F94144" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </CardContent>
    </Card>
  );
}
