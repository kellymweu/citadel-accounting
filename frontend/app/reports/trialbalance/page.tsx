/**
 * v0 by Vercel.
 * @see https://v0.dev/t/mBlERzMDpBU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function trialbalance() {
  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Trial Balance</h1>
        <p className="text-muted-foreground">
          A trial balance is a financial statement that lists the balances of
          all the general ledger accounts in a company accounting system at a
          specific point in time. It is used to ensure that the total debits
          equal the total credits, which is a fundamental accounting principle.
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-muted">
              <th className="py-3 px-4 text-left font-medium">Account</th>
              <th className="py-3 px-4 text-right font-medium">Debit</th>
              <th className="py-3 px-4 text-right font-medium">Credit</th>
              <th className="py-3 px-4 text-right font-medium">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Cash</td>
              <td className="py-3 px-4 text-right">$10,000.00</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$10,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Accounts Receivable</td>
              <td className="py-3 px-4 text-right">$15,000.00</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$15,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Inventory</td>
              <td className="py-3 px-4 text-right">$20,000.00</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$20,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Accounts Payable</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$12,000.00</td>
              <td className="py-3 px-4 text-right">$12,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Loans Payable</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$8,000.00</td>
              <td className="py-3 px-4 text-right">$8,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Revenue</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$50,000.00</td>
              <td className="py-3 px-4 text-right">$50,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Expenses</td>
              <td className="py-3 px-4 text-right">$25,000.00</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$25,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Retained Earnings</td>
              <td className="py-3 px-4 text-right">$0.00</td>
              <td className="py-3 px-4 text-right">$10,000.00</td>
              <td className="py-3 px-4 text-right">$10,000.00</td>
            </tr>
            <tr className="border-b">
              <td className="py-3 px-4 font-medium">Totals</td>
              <td className="py-3 px-4 text-right font-medium">$70,000.00</td>
              <td className="py-3 px-4 text-right font-medium">$80,000.00</td>
              <td className="py-3 px-4 text-right font-medium">$150,000.00</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
