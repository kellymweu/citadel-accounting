export default async function Home() {
  const response = await fetch("http://127.0.0.1:8000/api/inventory/items/");
  const items = await response.json();
  console.log(items);
  return <div>home</div>;
}
