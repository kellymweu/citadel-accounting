"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
//import { getSales } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";
import { SaleType } from "@/lib/types";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";

async function getSales(): Promise<SaleType[]> {
  const response = await fetch("http://127.0.0.1:8000/api/sales/sales", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default function Expenses() {
  const [filters, setFilters] = useState({
    startDate: "",
    endDate: "",
    minAmount: "",
    maxAmount: "",
    category: "",
  });

  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);

  const {
    data: sales = [],
    error,
    isLoading,
  } = useQuery<SaleType[]>({
    queryKey: ["expenses"],
    queryFn: getSales,
  });

  const handleFilterChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const filteredSales = useMemo(() => {
    return sales.filter((sale) => {
      const periodMatch =
        !selectedPeriod || sale.sale_date.startsWith(selectedPeriod);
      return (
        periodMatch &&
        (!filters.startDate || sale.sale_date >= filters.startDate) &&
        (!filters.endDate || sale.sale_date <= filters.endDate) &&
        (!filters.minAmount ||
          parseFloat(sale.sub_total) >= parseFloat(filters.minAmount)) &&
        (!filters.maxAmount ||
          parseFloat(sale.sub_total) <= parseFloat(filters.maxAmount))
      );
    });
  }, [selectedPeriod, filters, sales]);

  const handleBarClick = (period: string) => {
    setSelectedPeriod(period);
  };

  const salesBySale_Date = useMemo(() => {
    return filteredSales.reduce((acc, sale) => {
      if (!acc[sale.sale_date]) {
        acc[sale.sale_date] = { total: 0, count: 0 };
      }
      acc[sale.sale_date].total += parseFloat(sale.sale_date);
      acc[sale.sale_date].count += 1;
      return acc;
    }, {} as { [key: string]: { total: number; count: number } });
  }, [filteredSales]);

  if (isLoading) {
    return <p>Loading resource...</p>;
  }

  if (error) {
    return (
      <div className="flex flex-col min-h-[100dvh]">
        <main className="flex-1">
          <section className="w-full py-4 bg-muted">
            <div className="container grid gap-4 px-4 md:px-6 lg:grid-cols-3 lg:gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">
                    Total Revenue
                  </CardTitle>
                  <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$45,231.89</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Sales</CardTitle>
                  <CreditCardIcon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">+12,234</div>
                  <p className="text-xs text-muted-foreground">
                    +19% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium">Income</CardTitle>
                  <DollarSignIcon className="w-4 h-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$23,456.78</div>
                  <p className="text-xs text-muted-foreground">
                    +15.2% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="w-full md:py-8">
            <div className="container px-4 md:px-6">
              <Card>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-[100px]">Invoice</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Client</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredSales.map((sale: SaleType) => (
                      <TableRow key={sale.id}>
                        <TableCell className="font-medium">{sale.id}</TableCell>
                        <TableCell>{sale.sale_date}</TableCell>
                        <TableCell>Customer here</TableCell>
                        <TableCell className="text-right">
                          {sale.sub_total}
                        </TableCell>
                        {/* <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          sale.open
                            ? "bg-green-700 text-green-200" // Paid
                            : "bg-red-700 text-red-200" // Not Paid
                        }
                      >
                        {sale.paid ? "Paid" : "Unpaid"}
                      </Badge>
                    </TableCell> */}
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

function CreditCardIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="14" x="2" y="5" rx="2" />
      <line x1="2" x2="22" y1="10" y2="10" />
    </svg>
  );
}

function DollarSignIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="12" x2="12" y1="2" y2="22" />
      <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
    </svg>
  );
}
