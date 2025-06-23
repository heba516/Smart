"use client";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import { Card, CardContent } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
} from "@/components/ui/chart";

const chartData = [
  { month: "January", sales: 12.5 },
  { month: "February", sales: 10 },
  { month: "March", sales: 8 },
  { month: "April", sales: 6 },
  { month: "May", sales: 4 },
  { month: "June", sales: 2 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function SpreadOfSales() {
  return (
    <Card className="border-none w-full">
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              // content={<ChartTooltipContent hideLabel />}
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
              isAnimationActive={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
