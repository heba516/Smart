"use client";

import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Cell,
} from "recharts";

const data = [
  {
    name: "Q1",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#F94144",
  },
  {
    name: "Q2",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#FF999A",
  },
  {
    name: "Q3",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#8FBCFF",
  },
  {
    name: "Q4",
    total: Math.floor(Math.random() * 5000) + 1000,
    color: "#F99141",
  },
];

export function TopProducts() {
  return (
    <ResponsiveContainer width="100%" height={200} className="-ml-5">
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value}K`}
          //   tickFormatter={(value) => `${value / 1000}K`}
          //   domain={[0, 2500000]}
        />
        <Bar dataKey="total" radius={[4, 4, 0, 0]} barSize={30}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={entry.color} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  );
}
