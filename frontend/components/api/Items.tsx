"use client"

import { getItems } from "@/server/actions"
import { useQuery } from "@tanstack/react-query"

//elsewhere
import { HydrationBoundary, dehydrate, QueryClient } from "@tanstack/react-query"

export default function Item(){
    const { data, error} = useQuery({
        queryKey: ["items"],
        queryFn: "getItems",

    })
    if (error) <div className="h2">{error.message}</div>
    if (data)
    return(
        <div className="div">Item</div>
        
    )
}