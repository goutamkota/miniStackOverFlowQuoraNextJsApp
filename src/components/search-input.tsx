"use client";

import {Input} from "@nextui-org/react";
import {useSearchParams} from "next/navigation";
import {search} from "@/actions";

export default function SearchInputField(){
    const searchParams = useSearchParams();
    return (
        <form action={search}>
        <Input className="w-96" name="term" placeholder="Search for your topic/post ..." defaultValue={searchParams.get('term') || ""} />
        </form>
    )
}