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
  const { data, error, isLoading } = useQuery({
    queryKey: ["items"],
    //queryFn: getItems,
    queryFn: async () => {
      const response = await fetch("http://127.0.0.1:8000/api/inventory/items/",)
      return await response.json()
    }
  });
  if (error) <h2>{error.message}</h2>;
  if (isLoading) <h2>...Loadingggg</h2>;
  if (data)
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
              {data?.map((item) => (
                <TableRow key={item.id} className="text-white">
                  <TableCell className="font-medium">{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell>{item.quantity}</TableCell>
                  <TableCell>${item.price?.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button size="icon" variant="ghost">
                      {/* <FilePenIcon className="h-4 w-4" /> */}
                      <span className="sr-only">Edit {item.name}</span>
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
