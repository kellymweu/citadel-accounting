"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getExpenses } from "@/app/expenses/page";

export default function LedgerView() {
  const [view, setView] = useState<"trialBalance" | "generalLedger">(
    "trialBalance"
  );

  const {
    data: expenses,
    isLoading: isLoadingExpenses,
    error: errorExpenses,
  } = useQuery(["expenses"], getExpenses);
  const {
    data: sales,
    isLoading: isLoadingSales,
    error: errorSales,
  } = useQuery(["sales"], getSales);
  const {
    data: purchases,
    isLoading: isLoadingPurchases,
    error: errorPurchases,
  } = useQuery(["purchases"], getPurchases);

  if (isLoadingExpenses || isLoadingSales || isLoadingPurchases)
    return <div>Loading...</div>;
  if (errorExpenses || errorSales || errorPurchases)
    return <div>Error loading data</div>;

  // Combine transactions for GL
  const allTransactions = [
    ...(expenses || []),
    ...(sales || []),
    ...(purchases || []),
  ];

  // Trial Balance data (replace with actual data source or calculation)
  const trialBalanceData = [
    { account: "Cash", debit: 10000.0, credit: 0.0, total: 10000.0 },
    {
      account: "Accounts Receivable",
      debit: 15000.0,
      credit: 0.0,
      total: 15000.0,
    },
    // Add other trial balance accounts here
  ];

  return (
    <div className="container mx-auto py-8 px-4 md:px-6">
      <div className="mb-6">
        <h1 className="text-3xl font-bold">Ledger View</h1>
        <div className="mb-4">
          <button
            onClick={() => setView("trialBalance")}
            className={`py-2 px-4 mr-2 ${
              view === "trialBalance" ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
          >
            Trial Balance
          </button>
          <button
            onClick={() => setView("generalLedger")}
            className={`py-2 px-4 ${
              view === "generalLedger"
                ? "bg-blue-500 text-white"
                : "bg-gray-200"
            }`}
          >
            General Ledger
          </button>
        </div>
      </div>

      {view === "trialBalance" ? (
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">Trial Balance</h2>
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
              {trialBalanceData.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="py-3 px-4 font-medium">{item.account}</td>
                  <td className="py-3 px-4 text-right">
                    {item.debit.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {item.credit.toFixed(2)}
                  </td>
                  <td className="py-3 px-4 text-right">
                    {item.total.toFixed(2)}
                  </td>
                </tr>
              ))}
              <tr className="border-b">
                <td className="py-3 px-4 font-medium">Totals</td>
                <td className="py-3 px-4 text-right font-medium">
                  {trialBalanceData
                    .reduce((acc, item) => acc + item.debit, 0)
                    .toFixed(2)}
                </td>
                <td className="py-3 px-4 text-right font-medium">
                  {trialBalanceData
                    .reduce((acc, item) => acc + item.credit, 0)
                    .toFixed(2)}
                </td>
                <td className="py-3 px-4 text-right font-medium">
                  {trialBalanceData
                    .reduce((acc, item) => acc + item.total, 0)
                    .toFixed(2)}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <h2 className="text-2xl font-semibold mb-4">General Ledger</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="py-3 px-4 text-left font-medium">Date</th>
                <th className="py-3 px-4 text-left font-medium">Description</th>
                <th className="py-3 px-4 text-right font-medium">Amount</th>
                <th className="py-3 px-4 text-left font-medium">Type</th>
              </tr>
            </thead>
            <tbody>
              {allTransactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="py-3 px-4">{transaction.date}</td>
                  <td className="py-3 px-4">{transaction.description}</td>
                  <td className="py-3 px-4 text-right">
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td className="py-3 px-4">{transaction.type}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
