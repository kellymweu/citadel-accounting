import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

export default function NewInvoice() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Create New Invoice</h1>
        <p className="text-muted-foreground">
          Fill out the form to create a new invoice.
        </p>
      </div>
      <Card>
        <CardContent className="grid gap-6">
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="customer">Customer</Label>
              <Select id="customer">
                <SelectTrigger>
                  <SelectValue placeholder="Select customer" />
                </SelectTrigger>
                <SelectContent className="bg-slate-900">
                  <SelectItem value="1">John Doe</SelectItem>
                  <SelectItem value="2">Jane Smith</SelectItem>
                  <SelectItem value="3">Bob Johnson</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="invoice-number">Invoice Number</Label>
              <Input
                id="invoice-number"
                type="text"
                disabled
                defaultValue="#1234"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="text" defaultValue="01-01-1970" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-updated">Date Updated</Label>
              <Input
                id="date-updated"
                type="text"
                disabled
                defaultValue="2024-08-07"
              />
            </div>
          </div>
          <div className="border rounded-lg overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Tax</TableHead>
                  <TableHead>Total</TableHead>
                  <TableHead className="w-[50px]">
                    <Button variant="ghost" size="icon">
                      <PlusIcon className="h-4 w-4" />
                      <span className="sr-only">Add Item</span>
                    </Button>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Product A</SelectItem>
                        <SelectItem value="2">Product B</SelectItem>
                        <SelectItem value="3">Product C</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="1" />
                  </TableCell>
                  <TableCell>$100.00</TableCell>
                  <TableCell>$10.00</TableCell>
                  <TableCell>$110.00</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <XIcon className="h-4 w-4" />
                      <span className="sr-only">Remove Item</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Product A</SelectItem>
                        <SelectItem value="2">Product B</SelectItem>
                        <SelectItem value="3">Product C</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="2" />
                  </TableCell>
                  <TableCell>$50.00</TableCell>
                  <TableCell>$5.00</TableCell>
                  <TableCell>$110.00</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <XIcon className="h-4 w-4" />
                      <span className="sr-only">Remove Item</span>
                    </Button>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select item" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">Product A</SelectItem>
                        <SelectItem value="2">Product B</SelectItem>
                        <SelectItem value="3">Product C</SelectItem>
                      </SelectContent>
                    </Select>
                  </TableCell>
                  <TableCell>
                    <Input type="number" defaultValue="3" />
                  </TableCell>
                  <TableCell>$75.00</TableCell>
                  <TableCell>$7.50</TableCell>
                  <TableCell>$247.50</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon">
                      <XIcon className="h-4 w-4" />
                      <span className="sr-only">Remove Item</span>
                    </Button>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="flex justify-end gap-2">
            <div className="text-right">
              <div className="font-medium">Subtotal</div>
              <div className="text-muted-foreground">$425.00</div>
            </div>
            <div className="text-right">
              <div className="font-medium">Tax (14%)</div>
              <div className="text-muted-foreground">$42.50</div>
            </div>
            <div className="text-right">
              <div className="font-medium">Total</div>
              <div className="text-muted-foreground">$467.50</div>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-2">
          <Button variant="outline">Cancel</Button>
          <Button variant="outline" type="submit">
            Save Invoice
          </Button>
          <Button variant="outline" type="submit">
            Save and New
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

function PlusIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
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
