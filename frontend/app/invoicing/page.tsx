// "use client";
// import { getInvoices } from "@/server/actions";
// import { useQuery } from "@tanstack/react-query";
// import { InvoiceType, InvoicesResponseType } from "@/lib/types";

// export default function Invoicing() {
//   const { data, isLoading, error } = useQuery<{ dataString: string }, Error>({
//     queryKey: ["invoices"],
//     queryFn: getInvoices,
//   });

//   if (isLoading) return <div>Loading invoices...</div>;
//   if (error) return <div>Error loading invoices: {error.message}</div>;
//   if (!data || !data.dataString) return <div>No data received</div>;

//   // Parse the stringified data
//   const parsedData: InvoicesResponseType | { error: string } = JSON.parse(
//     data.dataString
//   );

//   if ("error" in parsedData) return <div>Error: {error}</div>;
//   if (!parsedData.invoices) return <div>No invoices found</div>;

//   return (
//     <div>
//       <h1>Invoices</h1>
//       <ul>
//         {parsedData.invoices.map((invoice: InvoiceType) => (
//           <li key={invoice.id}>
//             Invoice #{invoice.id} - Amount: ${invoice.amount}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }



import { InvoiceType } from "@/lib/types";

async function getInvoices(): Promise<InvoiceType[]> {
  const response = await fetch("http://127.0.0.1:8000/api/invoicing/invoices/", {
    cache: 'no-store'
  });
  
  if (!response.ok) {
    throw new Error('Failed to fetch invoices');
  }

  return response.json();
}

export default async function InvoicesPage() {
  let invoices: InvoiceType[];
  try {
    invoices = await getInvoices();
  } catch (error) {
    return <div>Error loading invoices: {error instanceof Error ? error.message : 'Unknown error'}</div>;
  }

  return (
    <div>
      <h1>Invoices</h1>
      {invoices.length === 0 ? (
        <p>No invoices found.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Invoice Number</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Due Date</th>
              <th>Total Amount</th>
              <th>Paid</th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice: InvoiceType) => (
              <tr key={invoice.id}>
                <td>{invoice.invoice_number}</td>
                <td>{invoice.customer.name}</td>
                <td>{new Date(invoice.date).toLocaleDateString()}</td>
                <td>{new Date(invoice.due_date).toLocaleDateString()}</td>
                <td>${parseFloat(invoice.total_amount).toFixed(2)}</td>
                <td>{invoice.paid ? 'Yes' : 'No'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}