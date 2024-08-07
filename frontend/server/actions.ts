"use server";

export async function getItems() {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/inventory/items/");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    // Ensure we're returning a plain object
    return { items: data };
  } catch (error) {
    console.error("Error fetching items:", error);
    // Return a plain object in case of error as well
    return { error: error };
  }
}

//GET ONE ITEM BY ID
export async function getItem() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/inventory/items/${Item.id}"
  );
  const item = await response.json();
  console.log(item);
}

import { InvoiceType, InvoicesResponseType } from "@/lib/types";

export async function getInvoices(): Promise<InvoiceType[]> {
  const response = await fetch(
    "http://127.0.0.1:8000/api/invoicing/invoices/",
    {
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch invoices");
  }

  return response.json();
}
// //GET ALL EXPENSES
// export async function getExpenses() {
//   try {
//     const expenses = await fetch(
//       "http://127.0.0.1:8000/api/expenses/expenses/"
//     );
//     return { expenses };
//   } catch (error) {
//     return { error: error };
//   }
// }

// GET ALL EXPENSES
export async function getExpenses() {
  try {
    const response = await fetch(
      "http://127.0.0.1:8000/api/expenses/expenses/"
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const expenses = await response.json();
    return expenses; // Return the actual expenses array
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message); // Ensure error is an instance of Error
    } else {
      throw new Error("An unknown error occurred");
    }
  }
}

//GET ALL PURCHASES
export async function getPurchases() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/purchases/purchases/"
  );
  const purchases = await response.json();
  console.log(purchases);
}

//GET ALL SALES
export async function getSales() {
  try {
    const sales = await fetch("http://127.0.0.1:8000/api/sales/sales/");
    return { sales };
  } catch (error) {
    return { error: error };
  }
}
