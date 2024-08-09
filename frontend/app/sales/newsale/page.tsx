"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { format } from "date-fns";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

// API function to save the sale
const saveSale = async (saleData) => {
  const response = await fetch("/api/sales", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(saleData),
  });
  if (!response.ok) {
    throw new Error("Failed to save sale");
  }
  return response.json();
};

export default function NewSale() {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const router = useRouter();
  const queryClient = useQueryClient();

  const [saleData, setSaleData] = useState({
    customerName: "",
    saleDate: new Date(),
    itemDescription: "",
    quantity: 0,
    pricePerUnit: 0,
    totalAmount: 0,
    notes: "",
  });

  const saveMutation = useMutation({
    mutationFn: saveSale,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["sales"] });
      router.push("/sales");
    },
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setSaleData((prev) => ({ ...prev, [id]: value }));

    // Recalculate total amount when quantity or price changes
    if (id === "quantity" || id === "pricePerUnit") {
      const quantity =
        id === "quantity" ? parseFloat(value) : saleData.quantity;
      const pricePerUnit =
        id === "pricePerUnit" ? parseFloat(value) : saleData.pricePerUnit;
      const totalAmount = quantity * pricePerUnit;
      setSaleData((prev) => ({ ...prev, totalAmount }));
    }
  };

  const handleDateChange = (date) => {
    setSaleData((prev) => ({ ...prev, saleDate: date }));
  };

  const handleCancel = () => {
    setDialogOpen(true);
  };

  const confirmCancel = () => {
    setDialogOpen(false);
    router.back();
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const handleSave = (event) => {
    event.preventDefault();
    saveMutation.mutate(saleData);
  };

  return (
    <>
      <Card className="w-full max-w-2xl">
        <CardHeader className="relative">
          <CardTitle>New Sale</CardTitle>
          <Button
            variant="outline"
            className="absolute top-2 right-2"
            onClick={() => router.back()}
          >
            <X className="w-4 h-4" />
          </Button>
        </CardHeader>
        <CardContent className="grid gap-2">
          <form onSubmit={handleSave} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="customerName">Customer Name</Label>
                <Input
                  id="customerName"
                  value={saleData.customerName}
                  onChange={handleInputChange}
                  placeholder="Enter customer name"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="saleDate">Sale Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className="w-full justify-start font-normal"
                    >
                      {format(saleData.saleDate, "PPP")}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={saleData.saleDate}
                      onSelect={handleDateChange}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="itemDescription">Item Description</Label>
              <Input
                id="itemDescription"
                value={saleData.itemDescription}
                onChange={handleInputChange}
                placeholder="Enter item description"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="quantity">Quantity</Label>
                <Input
                  id="quantity"
                  type="number"
                  value={saleData.quantity}
                  onChange={handleInputChange}
                  placeholder="0"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="pricePerUnit">Price per Unit</Label>
                <Input
                  id="pricePerUnit"
                  type="number"
                  value={saleData.pricePerUnit}
                  onChange={handleInputChange}
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="totalAmount">Total Amount</Label>
              <Input
                id="totalAmount"
                type="number"
                value={saleData.totalAmount.toFixed(2)}
                readOnly
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                value={saleData.notes}
                onChange={handleInputChange}
                placeholder="Enter any additional notes"
                rows={2}
              />
            </div>
            <CardFooter className="flex justify-end gap-4">
              <Button type="button" variant="outline" onClick={handleCancel}>
                Cancel
              </Button>
              <Button type="submit" disabled={saveMutation.isPending}>
                {saveMutation.isPending ? "Saving..." : "Save"}
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>

      <AlertDialog open={isDialogOpen} onOpenChange={setDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Cancellation</AlertDialogTitle>
          </AlertDialogHeader>
          <AlertDialogDescription>
            Are you sure you want to cancel this sale? Any unsaved changes will
            be lost.
          </AlertDialogDescription>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={closeDialog}>
              No, Go Back
            </AlertDialogCancel>
            <AlertDialogAction onClick={confirmCancel}>
              Yes, Cancel
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
