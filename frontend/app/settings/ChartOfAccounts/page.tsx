"use client";

import React, { useState } from "react";
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
import { ChartOfAccountType, COAType } from "@/lib/types";

export default function ChartOfAccounts() {
  const [accounts, setAccounts] = useState<ChartOfAccountType[]>([
    // Initial account data
  ]);
  const [editingAccount, setEditingAccount] =
    useState<ChartOfAccountType | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);

  const handleCreateAccount = () => {
    setEditingAccount(null);
    setIsPopoverOpen(true);
  };

  const handleEditAccount = (account: ChartOfAccountType) => {
    setEditingAccount(account);
    setIsPopoverOpen(true);
  };

  const handleSaveAccount = (account: ChartOfAccountType) => {
    if (editingAccount) {
      setAccounts((prev) =>
        prev.map((acc) => (acc.id === editingAccount.id ? account : acc))
      );
    } else {
      setAccounts((prev) => [...prev, { ...account, id: Date.now() }]);
    }
    setIsPopoverOpen(false);
  };

  const handleDeleteAccount = (id: number) => {
    setAccounts((prev) => prev.filter((acc) => acc.id !== id));
  };

  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chart of Accounts</h1>
        <Button onClick={handleCreateAccount}>Create Account</Button>
      </header>

      <div className="flex-1 overflow-auto p-6">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Main Account Code</TableHead>
              <TableHead>Sub Account Code</TableHead>
              <TableHead>Account Name</TableHead>
              <TableHead>Account Type</TableHead>
              <TableHead>Account Balance</TableHead>
              <TableHead />
            </TableRow>
          </TableHeader>
          <TableBody>
            {accounts.map((account) => (
              <TableRow key={account.id}>
                <TableCell>{account.mainAccountCode}</TableCell>
                <TableCell>{account.subAccountCode}</TableCell>
                <TableCell>{account.name}</TableCell>
                <TableCell>{account.type}</TableCell>
                <TableCell>${account.balance.toFixed(2)}</TableCell>
                <TableCell className="text-right">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleEditAccount(account)}
                  >
                    {/* edit icon */}
                    <span className="sr-only">Edit</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => handleDeleteAccount(account.id)}
                  >
                    {/* delete icon */}
                    <span className="sr-only">Delete</span>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {isPopoverOpen && (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Create Account</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-6 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="mainAccountCode">Main Account Code</Label>
              <Input
                id="mainAccountCode"
                placeholder="Enter main account code"
                defaultValue={editingAccount?.mainAccountCode || ""}
                onChange={(e) =>
                  setEditingAccount((prev) => ({
                    ...prev!,
                    mainAccountCode: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="subAccountCode">Sub Account Code</Label>
              <Input
                id="subAccountCode"
                placeholder="Enter sub account code"
                defaultValue={editingAccount?.subAccountCode || ""}
                onChange={(e) =>
                  setEditingAccount((prev) => ({
                    ...prev!,
                    subAccountCode: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="name">Account Name</Label>
              <Input
                id="name"
                placeholder="Enter account name"
                defaultValue={editingAccount?.name || ""}
                onChange={(e) =>
                  setEditingAccount((prev) => ({
                    ...prev!,
                    name: e.target.value,
                  }))
                }
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="type">Account Type</Label>
              <Select
                id="type"
                defaultValue={editingAccount?.type || ""}
                onChange={(e) =>
                  setEditingAccount((prev) => ({
                    ...prev!,
                    type: e.target.value as COAType,
                  }))
                }
              >
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
                defaultValue={editingAccount?.balance || ""}
                onChange={(e) =>
                  setEditingAccount((prev) => ({
                    ...prev!,
                    balance: parseFloat(e.target.value),
                  }))
                }
              />
            </div>
            <div className="flex justify-end">
              <Button onClick={() => handleSaveAccount(editingAccount!)}>
                {editingAccount ? "Update Account" : "Create Account"}
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}
    </div>
  );
}

// Designing a Chart of Accounts (COA) with a logical structure and clear hierarchy is crucial for effective financial management. Here's a suggested structure for a Chart of Accounts using a 4-digit account numbering system:

// ### Suggested Chart of Accounts Structure

// 1. **Assets (1000-1999)**
//    - **Current Assets (1000-1099)**
//      - 1010: Cash
//      - 1020: Accounts Receivable
//      - 1030: Inventory
//      - 1040: Prepaid Expenses
//    - **Fixed Assets (1100-1199)**
//      - 1110: Equipment
//      - 1120: Furniture
//      - 1130: Vehicles
//      - 1140: Accumulated Depreciation
//    - **Other Assets (1200-1299)**
//      - 1210: Long-Term Investments
//      - 1220: Intangible Assets

// 2. **Liabilities (2000-2999)**
//    - **Current Liabilities (2000-2099)**
//      - 2010: Accounts Payable
//      - 2020: Short-Term Loans
//      - 2030: Accrued Expenses
//      - 2040: Deferred Revenue
//    - **Long-Term Liabilities (2100-2199)**
//      - 2110: Long-Term Loans
//      - 2120: Bonds Payable

// 3. **Equity (3000-3999)**
//    - **Owner’s Equity (3000-3099)**
//      - 3010: Common Stock
//      - 3020: Retained Earnings
//      - 3030: Additional Paid-In Capital
//    - **Dividends (3100-3199)**
//      - 3110: Dividends Declared

// 4. **Income (4000-4999)**
//    - **Revenue (4000-4099)**
//      - 4010: Sales Revenue
//      - 4020: Service Revenue
//      - 4030: Interest Income
//    - **Other Income (4100-4199)**
//      - 4110: Rental Income
//      - 4120: Gain on Sale of Assets

// 5. **Expenses (5000-5999)**
//    - **Operating Expenses (5000-5099)**
//      - 5010: Rent Expense
//      - 5020: Utilities Expense
//      - 5030: Salaries and Wages
//      - 5040: Office Supplies
//    - **Cost of Goods Sold (5100-5199)**
//      - 5110: Direct Materials
//      - 5120: Direct Labor
//    - **Other Expenses (5200-5299)**
//      - 5210: Depreciation Expense
//      - 5220: Insurance Expense

// ### Example Chart of Accounts

// | Account Code | Account Name            | Account Type |
// |--------------|--------------------------|--------------|
// | 1000         | Cash                     | Asset        |
// | 1010         | Checking Account         | Asset        |
// | 1020         | Accounts Receivable      | Asset        |
// | 1100         | Equipment                | Asset        |
// | 2010         | Accounts Payable         | Liability    |
// | 2020         | Short-Term Loans         | Liability    |
// | 3010         | Common Stock             | Equity       |
// | 4010         | Sales Revenue            | Income       |
// | 5010         | Rent Expense             | Expense      |
// | 5100         | Direct Materials         | Expense      |

// ### Key Considerations

// 1. **Consistency**: Ensure that account codes are used consistently across financial statements and reports.
// 2. **Clarity**: Each account should be clearly defined to avoid confusion.
// 3. **Flexibility**: The structure should be flexible enough to accommodate future changes or additions.
// 4. **Hierarchy**: The account numbering system should reflect the hierarchy of accounts, making it easy to understand relationships and summarize balances.
