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
import BarchartComponent from "@/components/BarchartComponent";
import { getExpenses } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

// Type definitions
type Expense = {
  id: number;
  date: string;
  amount: number;
  category: string;
};

type CategorySummary = {
  total: number;
  count: number;
};

type ExpenseAccumulator = {
  [category: string]: CategorySummary;
};

export default function Expenses() {
  // const expenses: Expense[] = [
  //   {
  //     id: 1,
  //     date: "2023-06-01",
  //     amount: 250.99,
  //     category: "Travel",
  //   },
  //   {
  //     id: 2,
  //     date: "2023-06-02",
  //     amount: 45.75,
  //     category: "Groceries",
  //   },
  //   {
  //     id: 3,
  //     date: "2023-06-05",
  //     amount: 79.99,
  //     category: "Utilities",
  //   },
  //   {
  //     id: 4,
  //     date: "2023-06-10",
  //     amount: 120.5,
  //     category: "Entertainment",
  //   },
  //   {
  //     id: 5,
  //     date: "2023-06-15",
  //     amount: 35.0,
  //     category: "Groceries",
  //   },
  //   {
  //     id: 6,
  //     date: "2023-06-20",
  //     amount: 180.25,
  //     category: "Travel",
  //   },
  //   {
  //     id: 7,
  //     date: "2023-06-25",
  //     amount: 65.0,
  //     category: "Utilities",
  //   },
  //   {
  //     id: 8,
  //     date: "2023-06-30",
  //     amount: 95.75,
  //     category: "Entertainment",
  //   },
  // ];

  //get expenses
  const {
    data: expenses = [],
    error,
    isLoading,
  } = useQuery<Expense[]>({
    queryKey: ["expenses"],
    queryFn: getExpenses,
  });
  if (error) <h2>{error.message}</h2>;
  if (isLoading) <h2>...Loadingggg</h2>;

  //State for the selected period
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  // Filtered expenses based on the selected period
  const filteredExpenses = useMemo(() => {
    if (!selectedPeriod) return expenses;
    return expenses.filter((expense) =>
      expense.date.startsWith(selectedPeriod)
    );
  }, [selectedPeriod, expenses]);

  // Handler for clicking on the bar chart
  const handleBarClick = (period: string) => {
    setSelectedPeriod(period);
  };

  // // Filtered expenses based on the selected period
  // const [filteredExpenses, setFilteredExpenses] = useState<Expense[]>(expenses);
  // const handleBarClick = (period: string) => {
  //   setSelectedPeriod(period);
  //   setFilteredExpenses(
  //     expenses.filter((expense) => expense.date.startsWith(period))
  //   );
  // };

  // Memoized calculation of expenses by category
  const expensesByCategory = useMemo<ExpenseAccumulator>(() => {
    return filteredExpenses.reduce<ExpenseAccumulator>((acc, expense) => {
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
          <BarchartComponent
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
            {filteredExpenses?.map((id) => (
              <TableRow key={expenses.id}>
                <TableCell>{expenses.date}</TableCell>
                <TableCell>${expenses.amount.toFixed(2)}</TableCell>
                <TableCell>{expenses.category}</TableCell>
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
