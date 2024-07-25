"use server";
//defines server calls functions


export const getItem = async () => {
    //make a db call
    const db = await fetch('http://127.0.0.1:8000/inventory/items/')
}

async function getItems() {
    const db = await ('http://127.0.0.1:8000/inventory/items/')
}