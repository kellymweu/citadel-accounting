// "use client";

// import React, { useState } from "react";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import {
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
// } from "@/components/ui/popover";
// import { Button } from "@/components/ui/button";
// import { Label } from "@/components/ui/label";
// import { Input } from "@/components/ui/input";
// import { Select } from "@/components/ui/select";
// import {
//   Table,
//   TableHeader,
//   TableRow,
//   TableHead,
//   TableBody,
//   TableCell,
// } from "@/components/ui/table";
// import { ChartOfAccountType, COAType } from "@/lib/types";
// import { AlertDialog, AlertDialogContent, AlertDialogAction, AlertDialogCancel } from "@/components/ui/alert-dialog";

// // API functions
// const fetchAccounts = async () => {
//   const response = await fetch('/api/accounts');
//   if (!response.ok) {
//     throw new Error('Network response was not ok');
//   }
//   return response.json();
// };

// const createAccount = async (account) => {
//   const response = await fetch('/api/accounts', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(account),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to create account');
//   }
//   return response.json();
// };

// const updateAccount = async (account) => {
//   const response = await fetch(`/api/accounts/${account.id}`, {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(account),
//   });
//   if (!response.ok) {
//     throw new Error('Failed to update account');
//   }
//   return response.json();
// };

// const deleteAccount = async (id) => {
//   const response = await fetch(`/api/accounts/${id}`, { method: 'DELETE' });
//   if (!response.ok) {
//     throw new Error('Failed to delete account');
//   }
//   return response.json();
// };

// export default function ChartOfAccounts() {
//   const [editingAccount, setEditingAccount] = useState<ChartOfAccountType | null>(null);
//   const [isPopoverOpen, setIsPopoverOpen] = useState(false);
//   const [deleteConfirmation, setDeleteConfirmation] = useState<number | null>(null);
//   const [searchTerm, setSearchTerm] = useState("");

//   const queryClient = useQueryClient();

//   const { data: accounts = [], isLoading, error } = useQuery({
//     queryKey: ['accounts'],
//     queryFn: fetchAccounts,
//   });

//   const createMutation = useMutation({
//     mutationFn: createAccount,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['accounts'] });
//       setIsPopoverOpen(false);
//     },
//   });

//   const updateMutation = useMutation({
//     mutationFn: updateAccount,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['accounts'] });
//       setIsPopoverOpen(false);
//     },
//   });

//   const deleteMutation = useMutation({
//     mutationFn: deleteAccount,
//     onSuccess: () => {
//       queryClient.invalidateQueries({ queryKey: ['accounts'] });
//       setDeleteConfirmation(null);
//     },
//   });

//   const handleCreateAccount = () => {
//     setEditingAccount(null);
//     setIsPopoverOpen(true);
//   };

//   const handleEditAccount = (account: ChartOfAccountType) => {
//     setEditingAccount(account);
//     setIsPopoverOpen(true);
//   };

//   const handleSaveAccount = (account: ChartOfAccountType) => {
//     if (editingAccount) {
//       updateMutation.mutate(account);
//     } else {
//       createMutation.mutate(account);
//     }
//   };

//   const handleDeleteAccount = (id: number) => {
//     deleteMutation.mutate(id);
//   };

//   const filteredAccounts = accounts.filter(account =>
//     account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     account.mainAccountCode.includes(searchTerm) ||
//     account.subAccountCode.includes(searchTerm)
//   );

//   return (
//     <div className="flex flex-col h-full">
//       <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
//         <h1 className="text-2xl font-bold">Chart of Accounts</h1>
//         <Button onClick={handleCreateAccount}>Create Account</Button>
//       </header>

//       <div className="p-4">
//         <Input
//           placeholder="Search accounts..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>

//       <div className="flex-1 overflow-auto p-6">
//         {isLoading ? (
//           <p>Loading...</p>
//         ) : error ? (
//           <p className="text-red-500">{error.message}</p>
//         ) : (
//           <Table>
//             <TableHeader>
//               <TableRow>
//                 <TableHead>Main Account Code</TableHead>
//                 <TableHead>Sub Account Code</TableHead>
//                 <TableHead>Account Name</TableHead>
//                 <TableHead>Account Type</TableHead>
//                 <TableHead>Account Balance</TableHead>
//                 <TableHead />
//               </TableRow>
//             </TableHeader>
//             <TableBody>
//               {filteredAccounts.map((account) => (
//                 <TableRow key={account.id}>
//                   <TableCell>{account.mainAccountCode}</TableCell>
//                   <TableCell>{account.subAccountCode}</TableCell>
//                   <TableCell>{account.name}</TableCell>
//                   <TableCell>{account.type}</TableCell>
//                   <TableCell>${account.balance.toFixed(2)}</TableCell>
//                   <TableCell className="text-right">
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => handleEditAccount(account)}
//                     >
//                       {/* edit icon */}
//                       <span className="sr-only">Edit</span>
//                     </Button>
//                     <Button
//                       variant="ghost"
//                       size="icon"
//                       onClick={() => setDeleteConfirmation(account.id)}
//                     >
//                       {/* delete icon */}
//                       <span className="sr-only">Delete</span>
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//             </TableBody>
//           </Table>
//         )}
//       </div>

//       {isPopoverOpen && (
//         <Popover>
//           <PopoverTrigger asChild>
//             <Button>Create Account</Button>
//           </PopoverTrigger>
//           <PopoverContent className="w-[400px] p-6 space-y-4">
//             {/* Form fields remain the same */}
//             <div className="flex justify-end">
//               <Button
//                 onClick={() => handleSaveAccount(editingAccount!)}
//                 disabled={createMutation.isPending || updateMutation.isPending}
//               >
//                 {editingAccount ? "Update Account" : "Create Account"}
//               </Button>
//             </div>
//           </PopoverContent>
//         </Popover>
//       )}

//       <AlertDialog open={deleteConfirmation !== null}>
//         <AlertDialogContent>
//           <AlertDialogAction onClick={() => handleDeleteAccount(deleteConfirmation!)}>
//             Confirm Delete
//           </AlertDialogAction>
//           <AlertDialogCancel onClick={() => setDeleteConfirmation(null)}>
//             Cancel
//           </AlertDialogCancel>
//         </AlertDialogContent>
//       </AlertDialog>
//     </div>
//   );
// }

"use client";

import React, { useState, useEffect } from "react";
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
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogAction,
  AlertDialogCancel,
} from "@/components/ui/alert-dialog";

export default function ChartOfAccounts() {
  const [accounts, setAccounts] = useState<ChartOfAccountType[]>([]);
  const [editingAccount, setEditingAccount] =
    useState<ChartOfAccountType | null>(null);
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [deleteConfirmation, setDeleteConfirmation] = useState<number | null>(
    null
  );
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchAccounts();
  }, []);

  const fetchAccounts = async () => {
    setIsLoading(true);
    try {
      // Replace with actual API call
      const response = await fetch("/api/accounts");
      const data = await response.json();
      setAccounts(data);
    } catch (error) {
      setError("Failed to fetch accounts");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateAccount = () => {
    setEditingAccount(null);
    setIsPopoverOpen(true);
  };

  const handleEditAccount = (account: ChartOfAccountType) => {
    setEditingAccount(account);
    setIsPopoverOpen(true);
  };

  const handleSaveAccount = async (account: ChartOfAccountType) => {
    setIsLoading(true);
    try {
      // Replace with actual API call
      if (editingAccount) {
        await fetch(`/api/accounts/${account.id}`, {
          method: "PUT",
          body: JSON.stringify(account),
        });
      } else {
        await fetch("/api/accounts", {
          method: "POST",
          body: JSON.stringify(account),
        });
      }
      await fetchAccounts();
      setIsPopoverOpen(false);
    } catch (error) {
      setError("Failed to save account");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteAccount = async (id: number) => {
    setIsLoading(true);
    try {
      // Replace with actual API call
      await fetch(`/api/accounts/${id}`, { method: "DELETE" });
      await fetchAccounts();
    } catch (error) {
      setError("Failed to delete account");
    } finally {
      setIsLoading(false);
      setDeleteConfirmation(null);
    }
  };

  const filteredAccounts = accounts.filter(
    (account) =>
      account.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      account.mainAccountCode.includes(searchTerm) ||
      account.subAccountCode.includes(searchTerm)
  );

  return (
    <div className="flex flex-col h-full">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Chart of Accounts</h1>
        <Button onClick={handleCreateAccount}>Create Account</Button>
      </header>

      <div className="p-4">
        <Input
          placeholder="Search accounts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="flex-1 overflow-auto p-6">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
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
              {filteredAccounts.map((account) => (
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
                      onClick={() => setDeleteConfirmation(account.id)}
                    >
                      {/* delete icon */}
                      <span className="sr-only">Delete</span>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      {isPopoverOpen && (
        <Popover>
          <PopoverTrigger asChild>
            <Button>Create Account</Button>
          </PopoverTrigger>
          <PopoverContent className="w-[400px] p-6 space-y-4">
            {/* Form fields remain the same */}
            <div className="flex justify-end">
              <Button
                onClick={() => handleSaveAccount(editingAccount!)}
                disabled={isLoading}
              >
                {editingAccount ? "Update Account" : "Create Account"}
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      )}

      <AlertDialog open={deleteConfirmation !== null}>
        <AlertDialogContent>
          <AlertDialogAction
            onClick={() => handleDeleteAccount(deleteConfirmation!)}
          >
            Confirm Delete
          </AlertDialogAction>
          <AlertDialogCancel onClick={() => setDeleteConfirmation(null)}>
            Cancel
          </AlertDialogCancel>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
