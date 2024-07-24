/**
 * v0 by Vercel.
 * @see https://v0.dev/t/FCdXZpfbXdz
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
  TableFooter,
} from "@/components/ui/table";

export default function Component() {
  const data = [
    {
      vendor: "Acme Inc.",
      invoice: "INV-001",
      invoiceDate: "2023-05-01",
      dueDate: "2023-06-01",
      current: 500.0,
      days1_30: 0.0,
      days31_60: 0.0,
      days61_90: 0.0,
      days91_plus: 0.0,
    },
    {
      vendor: "Globex Corp.",
      invoice: "INV-002",
      invoiceDate: "2023-04-15",
      dueDate: "2023-05-15",
      current: 0.0,
      days1_30: 750.0,
      days31_60: 0.0,
      days61_90: 0.0,
      days91_plus: 0.0,
    },
    {
      vendor: "Stark Industries",
      invoice: "INV-003",
      invoiceDate: "2023-03-01",
      dueDate: "2023-04-01",
      current: 0.0,
      days1_30: 0.0,
      days31_60: 1000.0,
      days61_90: 0.0,
      days91_plus: 0.0,
    },
    {
      vendor: "Wayne Enterprises",
      invoice: "INV-004",
      invoiceDate: "2023-01-01",
      dueDate: "2023-02-01",
      current: 0.0,
      days1_30: 0.0,
      days31_60: 0.0,
      days61_90: 1500.0,
      days91_plus: 0.0,
    },
    {
      vendor: "Stark Industries",
      invoice: "INV-005",
      invoiceDate: "2022-11-01",
      dueDate: "2022-12-01",
      current: 0.0,
      days1_30: 0.0,
      days31_60: 0.0,
      days61_90: 0.0,
      days91_plus: 2000.0,
    },
  ];
  const totals = data.reduce(
    (acc, invoice) => {
      acc.current += invoice.current;
      acc.days1_30 += invoice.days1_30;
      acc.days31_60 += invoice.days31_60;
      acc.days61_90 += invoice.days61_90;
      acc.days91_plus += invoice.days91_plus;
      return acc;
    },
    {
      current: 0,
      days1_30: 0,
      days31_60: 0,
      days61_90: 0,
      days91_plus: 0,
    }
  );
  return (
    <Card>
      <CardHeader className="px-7">
        <CardTitle>Accounts Payable Ageing Report</CardTitle>
        <CardDescription>As of 24/07/2024</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Vendor</TableHead>
              <TableHead>Invoice #</TableHead>
              <TableHead>Invoice Date</TableHead>
              <TableHead>Due Date</TableHead>
              <TableHead>Current</TableHead>
              <TableHead>1-30 Days</TableHead>
              <TableHead>31-60 Days</TableHead>
              <TableHead>61-90 Days</TableHead>
              <TableHead>91+ Days</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((invoice, index) => (
              <TableRow key={index}>
                <TableCell>{invoice.vendor}</TableCell>
                <TableCell>{invoice.invoice}</TableCell>
                <TableCell>{invoice.invoiceDate}</TableCell>
                <TableCell>{invoice.dueDate}</TableCell>
                <TableCell className="text-right">
                  ${invoice.current.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  ${invoice.days1_30.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  ${invoice.days31_60.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  ${invoice.days61_90.toFixed(2)}
                </TableCell>
                <TableCell className="text-right">
                  ${invoice.days91_plus.toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TableCell colSpan={4}>Totals:</TableCell>
              <TableCell className="text-right">
                ${totals.current.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                ${totals.days1_30.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                ${totals.days31_60.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                ${totals.days61_90.toFixed(2)}
              </TableCell>
              <TableCell className="text-right">
                ${totals.days91_plus.toFixed(2)}
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </CardContent>
    </Card>
  );
}
