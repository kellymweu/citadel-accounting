import Link from "next/link";

// export default function NotFound() {
//   return (
//     <div>
//       <h2>Not Found</h2>
//       <p>Could not find requested resource</p>
//       <Link href="/">Return Home</Link>
//     </div>
//   );
// }


import { getItems } from "@/server/actions";

export default async function Test() {
  const items = await getItems()
  console.log(items)
  return (
    <div className="main"></div>
  )
}