"use server";

//GET ALL ITEMS
export async function getItems() {
  try {
    const items = await fetch("http://127.0.0.1:8000/api/inventory/items/");
    return { items };
  } catch (error) {
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
//GET ALL INVOICES
export async function getInvoices() {
  const response = await fetch("http://127.0.0.1:8000/api/invoicing/invoices/");
  const invoices = await response.json();
  console.log(invoices);
}
//GET ALL EXPENSES
export async function getExpenses() {
  const response = await fetch("http://127.0.0.1:8000/api/expenses/expenses/");
  const expenses = await response.json();
  console.log(expenses);
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
