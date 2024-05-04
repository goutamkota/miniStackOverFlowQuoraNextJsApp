import {Navbar, NavbarBrand, NavbarContent} from '@nextui-org/react';
import Link from "next/link";
import HeaderAuth from "@/components/header-auth";
import SearchInputField from "@/components/search-input";
import {Suspense} from "react";

export default function Header() {

    return (
        <Navbar className="shadow mb-6">
            <NavbarBrand>
                <Link href="/" className="font-bold">Mini Quora</Link>
            </NavbarBrand>
            <NavbarContent justify='center'>
                <Suspense fallback={<div className="w-40">Loading Search Field</div>}>
                    <SearchInputField/>
                </Suspense>
            </NavbarContent>
            <NavbarContent justify='end'>
                <HeaderAuth></HeaderAuth>
            </NavbarContent>
        </Navbar>
    )
}
