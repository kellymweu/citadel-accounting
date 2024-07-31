"use client";

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
import { getItems } from "@/server/actions";
import { useQuery } from "@tanstack/react-query";

export default function Inventory() {
  const { items, error, isLoading } = useQuery({
    queryKey: ["items"],
    queryFn: getItems,
  });
  if (error) <h2>{error.message}</h2>;
  if (isLoading) <h2>...Loadingggg</h2>;

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Inventory Management</h1>
        <Button size="sm">Add Item</Button>
      </div>
      <div className="relative">
        {/* search icon */}
        <Input
          type="search"
          placeholder="Search items..."
          // value={searchTerm}
          // onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg bg-background pl-8"
        />
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead
                className="cursor-pointer"
                // onClick={() => handleSort("name")}
              >
                Item Name
                {/* {sortColumn === "name" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )} */}
              </TableHead>
              <TableHead>Description</TableHead>
              <TableHead
                className="cursor-pointer"
                // onClick={() => handleSort("quantity")}
              >
                Quantity
                {/* {sortColumn === "quantity" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )} */}
              </TableHead>
              <TableHead
                className="cursor-pointer"
                // onClick={() => handleSort("price")}
              >
                Price
                {/* {sortColumn === "price" && (
                  <span className="ml-2">
                    {sortDirection === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )} */}
              </TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items?.map((id) => (
              <TableRow key={items.id}>
                <TableCell className="font-medium">{items.name}</TableCell>
                <TableCell>{items.description}</TableCell>
                <TableCell>{items.quantity}</TableCell>
                <TableCell>${items.price.toFixed(2)}</TableCell>
                <TableCell>
                  <Button size="icon" variant="ghost">
                    {/* <FilePenIcon className="h-4 w-4" /> */}
                    <span className="sr-only">Edit {items.name}</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
