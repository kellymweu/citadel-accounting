"use client";

import { Button } from "@/components/ui/button";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"; //hook to get data from the api

//query key is an array as you can pass in multiple queries
function Page() {
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery({
    queryKey: ["posts"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
      //staleTime: 6000, //waits for 6 * 1000 milliseconds to refetch the data in the query based on conditions. 
      //refetchInterval: 6000 //refetches after 6 seconds unconditionally
  });
  console.log(error)

  const { mutate, isPending, isError, isSuccess } = useMutation({
    mutationFn: (newPost) =>
      fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        body: JSON.stringify(newPost),
        headers: { "Content-type": "application/json; charset=UTF-8" },
      }).then((res) => res.json()),
    onSuccess: (newPost) => {
      queryClient.invalidateQueries({ queryKey : ["posts"]}) //tells the query we validated above to refetch its data
    //   queryClient.setQueryData(["posts"], (oldPosts: any) => [
    //     ...oldPosts,
    //     newPost,
    //   ]); //this will cache data but if page refreshes, the data disappears as it hasn't gone to memory
    },
  });

  if (error || isError) return <div>There was an error!</div>;

  if (isLoading) return <div>...Loading</div>;

  return (
    <div>
      {isPending && <p>Data is being added</p>}
      <Button
        onClick={() =>
          mutate({
            userId: 5000,
            id: 4000,
            title: "Hey, My name is Kelly",
            body: "This is the body of the post",
          })
        }
      >
        Add a post
      </Button>
      {data?.map((todo: any) => (
        <div key={todo.id}>
          <h4 className="text-3xl">ID: {todo.id}</h4>
          <h4>Title: {todo.title}</h4>
          <p>{todo.body}</p>
        </div>
      ))}
    </div>
  );
}

export default Page;
