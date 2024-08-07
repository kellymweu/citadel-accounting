"use client";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { InvoiceType } from "@/lib/types";

async function getInvoices(): Promise<InvoiceType[]> {
  const response = await fetch(
    "http://127.0.0.1:8000/api/invoicing/invoices/",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch invoices");
  }

  return response.json();
}

export default function Invoicing() {
  const {
    data: invoices = [],
    error,
    isLoading,
  } = useQuery({
    queryKey: ["invoices"],
    queryFn: getInvoices,
  });

  if (isLoading) {
    return <p>Loading invoices...</p>;
  }

  if (error) {
    return (
      <div>
        Error loading invoices:{" "}
        {error instanceof Error ? error.message : "Unknown error"}
      </div>
    );
  }

  return (
    <div>
      {invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <div className="container mx-auto py-8 px-4 md:px-6">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">Invoices</h1>
            <Button size="sm" className="border">
              New Invoice
            </Button>
          </div>
          <div className="border rounded-lg overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Invoice #</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Due Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {invoices.map((invoice: InvoiceType) => (
                  <TableRow key={invoice.id}>
                    <TableCell className="font-medium">
                      {invoice.invoice_number}
                    </TableCell>
                    <TableCell>{invoice.customer.first_name}</TableCell>{" "}
                    <TableCell>
                      {new Date(invoice.date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      {new Date(invoice.due_date).toLocaleDateString()}
                    </TableCell>
                    <TableCell>
                      ${parseFloat(invoice.total_amount).toFixed(2)}
                    </TableCell>
                    <TableCell>
                      <Badge
                        variant="outline"
                        className={
                          invoice.paid
                            ? "bg-green-700 text-green-200" // Paid
                            : "bg-red-700 text-red-200" // Not Paid
                        }
                      >
                        {invoice.paid ? "Paid" : "Unpaid"}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          View
                        </Button>
                        <Button variant="outline" size="sm">
                          Download
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
}
