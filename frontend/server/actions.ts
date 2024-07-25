"use server";

//GET ALL ITEMS
export async function getItems() {
  const response = await fetch("http://127.0.0.1:8000/api/inventory/items/");
  const items = await response.json();
  console.log(items);
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
  
