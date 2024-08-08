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
    <div className="container mx-auto py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">Liabilities</h1>
        <p className="text-muted-foreground">
          View and manage your outstanding liabilities.
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table className="w-full table-auto border-collapse">
          <TableHeader>
            <TableRow className="bg-muted">
              <TableHead className="px-4 py-3 text-left font-medium">
                Liability Type
              </TableHead>
              <TableHead className="px-4 py-3 text-left font-medium">
                Description
              </TableHead>
              <TableHead className="px-4 py-3 text-right font-medium">
                Amount
              </TableHead>
            </TableRow>
          </TableHeader>
          <tbody>
            <tr>
              <td className="border-b px-4 py-3">Loan</td>
              <td className="border-b px-4 py-3">
                Business loan from ABC Bank
              </td>
              <td className="border-b px-4 py-3 text-right">$50,000.00</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-3">Credit Card</td>
              <td className="border-b px-4 py-3">Company credit card</td>
              <td className="border-b px-4 py-3 text-right">$12,500.00</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-3">Mortgage</td>
              <td className="border-b px-4 py-3">Office building mortgage</td>
              <td className="border-b px-4 py-3 text-right">$250,000.00</td>
            </tr>
            <tr>
              <td className="border-b px-4 py-3">Lease</td>
              <td className="border-b px-4 py-3">Equipment lease</td>
              <td className="border-b px-4 py-3 text-right">$5,000.00</td>
            </tr>
          </tbody>
          <tfoot>
            <tr className="bg-muted font-medium">
              <td className="px-4 py-3 text-left">Total</td>
              <td className="px-4 py-3" />
              <td className="px-4 py-3 text-right">$317,500.00</td>
            </tr>
          </tfoot>
        </Table>
      </div>
    </div>
  );
}
