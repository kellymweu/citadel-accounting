"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { ItemType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import PaginationComponent from "@/components/PaginationComponent";

async function getItems(): Promise<ItemType[]> {
  const response = await fetch("http://127.0.0.1:8000/api/inventory/items/", {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  return response.json();
}

export default function Inventory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");

  const {
    data: items = [],
    error,
    isLoading,
  } = useQuery<ItemType[]>({
    queryKey: ["items"],
    queryFn: getItems,
  });

  if (isLoading) {
    return <p>Loading resource...</p>;
  }

  if (error) {
    return <div>Error loading resource: {error.message}</div>;
  }

  const handleSort = (column: string) => {
    const newDirection =
      sortColumn === column
        ? sortDirection === "asc"
          ? "desc"
          : "asc"
        : "asc";
    setSortColumn(column);
    setSortDirection(newDirection);
  };

  const filteredItems = items.filter((item) => {
    const lowercasedTerm = searchTerm.toLowerCase();
    return (
      item.item_name.toLowerCase().includes(lowercasedTerm) ||
      item.SKU.toLowerCase().includes(lowercasedTerm) ||
      item.marked_price.toLowerCase().includes(lowercasedTerm)
    );
  });

  const sortedItems = [...filteredItems].sort((a, b) => {
    if (!sortColumn) return 0;

    const aValue =
      sortColumn === "marked_price"
        ? parseFloat(a[sortColumn as keyof ItemType] as unknown as string)
        : (a[sortColumn as keyof ItemType] as unknown as string);
    const bValue =
      sortColumn === "marked_price"
        ? parseFloat(b[sortColumn as keyof ItemType] as unknown as string)
        : (b[sortColumn as keyof ItemType] as unknown as string);

    if (aValue < bValue) return sortDirection === "asc" ? -1 : 1;
    if (aValue > bValue) return sortDirection === "asc" ? 1 : -1;
    return 0;
  });

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button size="sm">Add Item</Button>
      </div>

      <div className="relative">
        <Input
          type="search"
          placeholder="Search items by name, SKU, or price..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg bg-background pl-8"
        />
      </div>

      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("item_name")}
              >
                Item Name
                {sortColumn === "item_name" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead>SKU</TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("quantity")}
              >
                Quantity
                {sortColumn === "quantity" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                onClick={() => handleSort("marked_price")}
              >
                Price
                {sortColumn === "marked_price" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <PaginationComponent
              items={sortedItems}
              itemsPerPageOptions={[10, 20, 50]}
              initialItemsPerPage={10}
              renderItems={(paginatedItems) => (
                <>
                  {paginatedItems.map((item: ItemType) => (
                    <TableRow key={item.id} className="text-white">
                      <TableCell className="font-medium">
                        {item.item_name}
                      </TableCell>
                      <TableCell>{item.SKU}</TableCell>
                      <TableCell>{item.quantity}</TableCell>
                      <TableCell>
                        ${parseFloat(item.marked_price).toFixed(2)}
                      </TableCell>
                      <TableCell>
                        <Button size="icon" variant="ghost">
                          <span className="sr-only">Edit {item.item_name}</span>
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </>
              )}
            />
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
