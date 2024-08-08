// "use client";

// import { Button } from "@/components/ui/button";
// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"; //hook to get data from the api

// //query key is an array as you can pass in multiple queries
// function Page() {
//   const queryClient = useQueryClient();
//   const { data, error, isLoading } = useQuery({
//     queryKey: ["posts"],
//     queryFn: () =>
//       fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
//         res.json()
//       ),
//     //staleTime: 6000, //waits for 6 * 1000 milliseconds to refetch the data in the query based on conditions.
//     //refetchInterval: 6000 //refetches after 6 seconds unconditionally
//   });
//   console.log(error);

//   const { mutate, isPending, isError, isSuccess } = useMutation({
//     mutationFn: (newPost) =>
//       fetch("https://jsonplaceholder.typicode.com/posts", {
//         method: "POST",
//         body: JSON.stringify(newPost),
//         headers: { "Content-type": "application/json; charset=UTF-8" },
//       }).then((res) => res.json()),
//     onSuccess: (newPost) => {
//       queryClient.invalidateQueries({ queryKey: ["posts"] }); //tells the query we validated above to refetch its data
//       //   queryClient.setQueryData(["posts"], (oldPosts: any) => [
//       //     ...oldPosts,
//       //     newPost,
//       //   ]); //this will cache data but if page refreshes, the data disappears as it hasn't gone to memory
//     },
//   });

//   if (error || isError) return <div>There was an error!</div>;

//   if (isLoading) return <div>...Loading</div>;

//   return (
//     <div>
//       {isPending && <p>Data is being added</p>}
//       <Button
//         onClick={() =>
//           mutate({
//             userId: 5000,
//             id: 4000,
//             title: "Hey, My name is Kelly",
//             body: "This is the body of the post",
//           })
//         }
//       >
//         Add a post
//       </Button>
//       {data?.map((todo: any) => (
//         <div key={todo.id}>
//           <h4 className="text-3xl">ID: {todo.id}</h4>
//           <h4>Title: {todo.title}</h4>
//           <p>{todo.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default Page;

// {
//   /* <section className="w-full py-12 md:py-24 lg:py-32">
//           <div className="container px-4 md:px-6">
//             <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
//               <div className="flex flex-col justify-center space-y-4">
//                 <div className="space-y-2">
//                   <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
//                     Streamline Your Accounting with Acme
//                   </h1>
//                   <p className="max-w-[600px] text-muted-foreground md:text-xl">
//                     Acme Accounting is the all-in-one platform to manage your
//                     finances with ease. From invoicing to tax reporting,
//                     we&aposve got you covered.
//                   </p>
//                 </div>
//                 <Link
//                   href="#"
//                   className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
//                   prefetch={false}
//                 >
//                   Get Started
//                 </Link>
//               </div>
//               <Image
//                 src="/placeholder.jpg"
//                 width="550"
//                 height="550"
//                 alt="Hero"
//                 className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
//               />
//             </div>
//           </div>
//         </section> */
// }
