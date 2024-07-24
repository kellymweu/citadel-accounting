/**
 * v0 by Vercel.
 * @see https://v0.dev/t/I3wm8evYQOO
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

export default function Component() {
  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chart of Accounts</h1>
        <Popover>
          <PopoverTrigger asChild>
            <Button>Create Account</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Account Name</Label>
              <Input id="name" placeholder="Enter account name" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">Account Number</Label>
              <Input id="number" placeholder="Enter account number" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Account Type</Label>
              <Select id="type">
                <option value="asset">Asset</option>
                <option value="liability">Liability</option>
                <option value="equity">Equity</option>
                <option value="income">Income</option>
                <option value="expense">Expense</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="balance">Account Balance</Label>
              <Input
                id="balance"
                placeholder="Enter account balance"
                type="number"
              />
            </div>
            <div className="flex justify-end">
              <Button>Create Account</Button>
            </div>
          </PopoverContent>
        </Popover>
      </header>
      <div className="flex-1 overflow-auto p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Account Name</TableHead>
              <TableHead>Account Number</TableHead>
              <TableHead>Account Type</TableHead>
              <TableHead>Account Balance</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>Cash</TableCell>
              <TableCell>1000</TableCell>
              <TableCell>Asset</TableCell>
              <TableCell>$10,000.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accounts Receivable</TableCell>
              <TableCell>1001</TableCell>
              <TableCell>Asset</TableCell>
              <TableCell>$50,000.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Accounts Payable</TableCell>
              <TableCell>2000</TableCell>
              <TableCell>Liability</TableCell>
              <TableCell>$25,000.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Retained Earnings</TableCell>
              <TableCell>3000</TableCell>
              <TableCell>Equity</TableCell>
              <TableCell>$100,000.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Sales Revenue</TableCell>
              <TableCell>4000</TableCell>
              <TableCell>Income</TableCell>
              <TableCell>$500,000.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Rent Expense</TableCell>
              <TableCell>5000</TableCell>
              <TableCell>Expense</TableCell>
              <TableCell>$50,000.00</TableCell>
              <TableCell className="text-right">
                <Button variant="ghost" size="icon">
                  <FilePenIcon className="h-4 w-4" />
                  <span className="sr-only">Edit</span>
                </Button>
                <Button variant="ghost" size="icon">
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function FilePenIcon(props: any) {
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

function TrashIcon(props: any) {
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
