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

// export async function getItems() {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/api/inventory/items/");
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     console.log("API response:", data);
//     return data;
//   } catch (error) {
//     console.error("API error:", error);
//     throw error;
//   }
// }

// //GET ALL ITEMS
// export async function getItems() {
//   try {
//     const items = await fetch("http://127.0.0.1:8000/api/inventory/items/");
//     return { items };
//   } catch (error) {
//     return { error: error };
//   }
// }

//GET ONE ITEM BY ID
export async function getItem() {
  const response = await fetch(
    "http://127.0.0.1:8000/api/inventory/items/${Item.id}"
  );
  const item = await response.json();
  console.log(item);
}
//GET ALL INVOICES
// export async function getInvoices() {
//   const response = await fetch("http://127.0.0.1:8000/api/invoicing/invoices/");
//   const invoices = await response.json();
//   console.log(invoices);
// }

// export async function getInvoices() {
//   try {
//     const response = await fetch("http://127.0.0.1:8000/api/invoicing/invoices/");
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const data = await response.json();
//     // Ensure we're returning a plain object
//     return { invoices: data };
//   } catch (error) {
//     console.error("Error fetching invoices:", error);
//     // Return a plain object in case of error as well
//     return { error: error };
//   }
// }

import { InvoiceType, InvoicesResponseType } from "@/lib/types";

// export async function getInvoices(): Promise<InvoicesResponseType> {
//   try {
//     const response = await fetch(
//       "http://127.0.0.1:8000/api/invoicing/invoices/"
//     );
//     if (!response.ok) {
//       throw new Error("Network response was not ok");
//     }
//     const data = await response.json();
//     // Ensure we're returning the correct type
//     return { invoices: data as InvoiceType[] };
//   } catch (error) {
//     console.error("Error fetching invoices:", error);
//     // Throw the error instead of returning it
//     throw error;
//   }
// }


export async function getInvoices(): Promise<{ dataString: string }> {
  try {
    const response = await fetch("http://127.0.0.1:8000/api/invoicing/invoices/");
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    
    // Convert the data to a plain object and stringify it
    const invoicesData: InvoicesResponseType = { invoices: data };
    return { dataString: JSON.stringify(invoicesData) };
  } catch (error) {
    console.error("Error fetching invoices:", error);
    // Return a stringified error object
    return { dataString: JSON.stringify({ error: error instanceof Error ? error.message : 'An unknown error occurred' }) };
  }
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
