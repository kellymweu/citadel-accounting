"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

// Function to fetch purchase details by ID
async function getPurchaseById(id: string) {
  const response = await fetch(
    `http://127.0.0.1:8000/api/purchases/purchases/${id}`
  );
  if (!response.ok) {
    console.error("Failed to fetch purchase:", response.statusText);
    throw new Error("Failed to fetch purchase");
  }
  return response.json();
}

export default function PurchaseID() {
  const router = useRouter();
  const { id } = useParams(); // Get the ID from URL

  // Log the id for debugging
  console.log("Fetching purchase with ID:", id);

  // Use TanStack Query to fetch purchase details
  const {
    data: purchase,
    error,
    isLoading,
  } = useQuery({
    queryKey: ["purchase", id],
    queryFn: () => getPurchaseById(id as string),
    enabled: !!id, // Only fetch if ID is available
  });

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading purchase data</p>;

  // Handle case where purchase data is undefined
  if (!purchase) {
    return <p>No purchase data found</p>;
  }

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold">Goods Received Note</h1>
              <p className="text-gray-500 dark:text-gray-400">
                Order #{purchase.id}
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <FilePenIcon className="h-4 w-4 mr-2" />
                Edit
              </Button>
              <Button variant="destructive" size="sm">
                <TrashIcon className="h-4 w-4 mr-2" />
                Delete
              </Button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div>
            <h2 className="text-lg font-bold mb-2">Customer Information</h2>
            <div className="text-gray-600 dark:text-gray-400">
              <p>{purchase.customerName}</p>
              <p>{purchase.customerAddress}</p>
              <p>{purchase.customerEmail}</p>
              <p>{purchase.customerPhone}</p>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-bold mb-2">Order Details</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchase.items.map((item: any) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.description}</TableCell>
                    <TableCell>{item.quantity}</TableCell>
                    <TableCell>${item.pricePerUnit.toFixed(2)}</TableCell>
                    <TableCell>
                      ${(item.quantity * item.pricePerUnit).toFixed(2)}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
            <div className="mt-4 text-right">
              <div className="text-gray-600 dark:text-gray-400">
                <p>Subtotal: ${purchase.subtotal.toFixed(2)}</p>
                <p>Tax: ${purchase.tax.toFixed(2)}</p>
                <p>Shipping: ${purchase.shipping.toFixed(2)}</p>
              </div>
              <div className="text-2xl font-bold">
                Total: ${purchase.total.toFixed(2)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function TrashIcon(props) {
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
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  );
}
