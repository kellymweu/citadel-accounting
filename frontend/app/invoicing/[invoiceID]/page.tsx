import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";


export default function Invoice() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-background/80 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl rounded-lg bg-background shadow-2xl">
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 rounded-full"
        >
          <XIcon className="h-5 w-5" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="grid gap-8 p-8 md:p-12">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Image
                src="/placeholder.svg"
                alt="Company Logo"
                width={48}
                height={48}
                className="rounded-md"
              />
              <div className="grid gap-1">
                <h2 className="text-2xl font-bold">Acme Inc.</h2>
                <p className="text-sm text-muted-foreground">
                  123 Main St, Anytown USA 12345
                  <br />
                  Phone: (123) 456-7890
                  <br />
                  Email: info@acme.com
                </p>
              </div>
            </div>
            <div className="grid gap-1 text-right">
              <p className="text-sm font-medium">Invoice #12345</p>
              <p className="text-sm text-muted-foreground">
                Issued: June 1, 2023
              </p>
              <p className="text-sm text-muted-foreground">
                Due: June 15, 2023
              </p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="grid gap-1">
              <p className="text-sm font-medium">Bill To:</p>
              <p className="text-sm text-muted-foreground">
                Liam Johnson
                <br />
                123 Main St
                <br />
                Anytown, CA 12345
              </p>
            </div>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Qty</TableHead>
                  <TableHead>Unit Price</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Glimmer Lamps</TableCell>
                  <TableCell>2</TableCell>
                  <TableCell>$50.00</TableCell>
                  <TableCell>$100.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Aqua Filters</TableCell>
                  <TableCell>3</TableCell>
                  <TableCell>$16.50</TableCell>
                  <TableCell>$49.50</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="grid gap-4 border-t pt-4">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Subtotal</p>
              <p className="text-sm">$149.50</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Tax (8%)</p>
              <p className="text-sm">$11.96</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Total</p>
              <p className="text-sm font-bold">$161.46</p>
            </div>
            <p className="text-sm text-muted-foreground">
              Payment is due within 15 days. Please make payment to Acme Inc. at
              the address above.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function XIcon(props: any) {
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
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
