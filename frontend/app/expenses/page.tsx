/**
 * v0 by Vercel.
 * @see https://v0.dev/t/V3M7yP3F8lY
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
"use client";

import { useState, useMemo } from "react";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { CartesianGrid, XAxis, Bar, BarChart, Line, LineChart } from "recharts";
import {
  ChartTooltipContent,
  ChartTooltip,
  ChartContainer,
} from "@/components/ui/chart";

export default function expenses() {
  const expenses = [
    {
      id: 1,
      date: "2023-06-01",
      amount: 250.99,
      category: "Travel",
    },
    {
      id: 2,
      date: "2023-06-02",
      amount: 45.75,
      category: "Groceries",
    },
    {
      id: 3,
      date: "2023-06-05",
      amount: 79.99,
      category: "Utilities",
    },
    {
      id: 4,
      date: "2023-06-10",
      amount: 120.5,
      category: "Entertainment",
    },
    {
      id: 5,
      date: "2023-06-15",
      amount: 35.0,
      category: "Groceries",
    },
    {
      id: 6,
      date: "2023-06-20",
      amount: 180.25,
      category: "Travel",
    },
    {
      id: 7,
      date: "2023-06-25",
      amount: 65.0,
      category: "Utilities",
    },
    {
      id: 8,
      date: "2023-06-30",
      amount: 95.75,
      category: "Entertainment",
    },
  ];
  const [selectedPeriod, setSelectedPeriod] = useState(null);
  const [filteredExpenses, setFilteredExpenses] = useState(expenses);
  const handleBarClick = (period) => {
    setSelectedPeriod(period);
    setFilteredExpenses(
      expenses.filter((expense) => expense.date.startsWith(period))
    );
  };
  const expensesByCategory = useMemo(() => {
    return filteredExpenses.reduce((acc, expense) => {
      if (!acc[expense.category]) {
        acc[expense.category] = { total: 0, count: 0 };
      }
      acc[expense.category].total += expense.amount;
      acc[expense.category].count += 1;
      return acc;
    }, {});
  }, [filteredExpenses]);
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 p-8">
      <div>
        <div className="mb-8">
          <BarchartChart
            className="aspect-[16/9]"
            onBarClick={handleBarClick}
          />
        </div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Category</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredExpenses.map((expense) => (
              <TableRow key={expense.id}>
                <TableCell>{expense.date}</TableCell>
                <TableCell>${expense.amount.toFixed(2)}</TableCell>
                <TableCell>{expense.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <div className="bg-muted rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Expenses by Category</h2>
        <div className="grid gap-4">
          {Object.entries(expensesByCategory).map(
            ([category, { total, count }]) => (
              <div key={category} className="flex justify-between">
                <div className="font-medium">{category}</div>
                <div className="text-right">
                  <div className="font-semibold">${total.toFixed(2)}</div>
                  <div className="text-muted-foreground text-sm">
                    {count} items
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function BarchartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
        className="min-h-[300px]"
      >
        <BarChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
        >
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent hideLabel />}
          />
          <Bar dataKey="desktop" fill="var(--color-desktop)" radius={8} />
        </BarChart>
      </ChartContainer>
    </div>
  );
}

function LinechartChart(props: any) {
  return (
    <div {...props}>
      <ChartContainer
        config={{
          desktop: {
            label: "Desktop",
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <LineChart
          accessibilityLayer
          data={[
            { month: "January", desktop: 186 },
            { month: "February", desktop: 305 },
            { month: "March", desktop: 237 },
            { month: "April", desktop: 73 },
            { month: "May", desktop: 209 },
            { month: "June", desktop: 214 },
          ]}
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
            content={<ChartTooltipContent hideLabel />}
          />
          <Line
            dataKey="desktop"
            type="natural"
            stroke="var(--color-desktop)"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ChartContainer>
    </div>
  );
}
