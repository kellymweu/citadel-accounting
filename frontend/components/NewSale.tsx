/**
 * v0 by Vercel.
 * @see https://v0.dev/t/Rfiw1IC9Sag
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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

export default function NewSale() {
  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle>New Sale</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="customer-name">Customer Name</Label>
            <Input id="customer-name" placeholder="Enter customer name" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="sale-date">Sale Date</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start font-normal"
                >
                  <div className="mr-2 h-4 w-4 opacity-50" />
                  <span>Pick a date</span>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar mode="single" />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="item-description">Item Description</Label>
          <Input id="item-description" placeholder="Enter item description" />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="quantity">Quantity</Label>
            <Input id="quantity" type="number" placeholder="0" />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price-per-unit">Price per Unit</Label>
            <Input id="price-per-unit" type="number" placeholder="0.00" />
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="total-amount">Total Amount</Label>
          <Input id="total-amount" type="number" placeholder="0.00" readOnly />
        </div>
        <div className="space-y-2">
          <Label htmlFor="notes">Notes</Label>
          <Textarea
            id="notes"
            placeholder="Enter any additional notes"
            rows={2}
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button type="submit">Save</Button>
      </CardFooter>
    </Card>
  );
}
