/**
 * v0 by Vercel.
 * @see https://v0.dev/t/yKZ8G0RPTgf
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export default function bankRecs() {
  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-8">
      <div className="space-y-8">
        <div>
          <h1 className="text-2xl font-bold">Bank Reconciliation</h1>
          <p className="text-muted-foreground">Reconcile your bank account.</p>
        </div>
        <div className="grid gap-6">
          <div>
            <h2 className="text-lg font-semibold">Bank Statement</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Check #</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Debit</TableHead>
                  <TableHead className="text-right">Credit</TableHead>
                  <TableHead className="text-right">Balance</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-01</TableCell>
                  <TableCell>1234</TableCell>
                  <TableCell>Rent Payment</TableCell>
                  <TableCell className="text-right">$1,500.00</TableCell>
                  <TableCell className="text-right">-</TableCell>
                  <TableCell className="text-right">$3,500.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-06-05</TableCell>
                  <TableCell>1235</TableCell>
                  <TableCell>Utilities</TableCell>
                  <TableCell className="text-right">$250.00</TableCell>
                  <TableCell className="text-right">-</TableCell>
                  <TableCell className="text-right">$3,250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-06-10</TableCell>
                  <TableCell>-</TableCell>
                  <TableCell>Payroll</TableCell>
                  <TableCell className="text-right">-</TableCell>
                  <TableCell className="text-right">$5,000.00</TableCell>
                  <TableCell className="text-right">$8,250.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-06-15</TableCell>
                  <TableCell>1236</TableCell>
                  <TableCell>Supplies</TableCell>
                  <TableCell className="text-right">$75.00</TableCell>
                  <TableCell className="text-right">-</TableCell>
                  <TableCell className="text-right">$8,175.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Outstanding Checks</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Check #</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-20</TableCell>
                  <TableCell>1237</TableCell>
                  <TableCell>Office Supplies</TableCell>
                  <TableCell className="text-right">$50.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2023-06-22</TableCell>
                  <TableCell>1238</TableCell>
                  <TableCell>Internet Bill</TableCell>
                  <TableCell className="text-right">$75.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div>
            <h2 className="text-lg font-semibold">Outstanding Deposits</h2>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead className="text-right">Amount</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>2023-06-25</TableCell>
                  <TableCell>Client Payment</TableCell>
                  <TableCell className="text-right">$1,000.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Ending Bank Balance</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>Bank Statement Balance</div>
                  <div className="font-semibold">$8,175.00</div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div>Outstanding Checks</div>
                  <div className="font-semibold">-$125.00</div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div>Outstanding Deposits</div>
                  <div className="font-semibold">+$1,000.00</div>
                </div>
                <Separator className="my-4" />
                <div className="flex items-center justify-between">
                  <div className="font-semibold">Ending Balance</div>
                  <div className="font-semibold">$9,050.00</div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Reconciliation Notes</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p>
                    The outstanding checks are checks that have been written but
                    have not yet cleared the bank.
                  </p>
                  <p>
                    The outstanding deposits are deposits that have been made
                    but have not yet been recorded in the bank statement.
                  </p>
                  <p>
                    The ending balance is the amount that should match the
                    balance in your accounting records.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
