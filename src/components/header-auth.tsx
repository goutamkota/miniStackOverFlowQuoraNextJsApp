'use client';

import {Avatar, Button, NavbarItem, Popover, PopoverContent, PopoverTrigger} from '@nextui-org/react';
import {ReactNode} from "react";
import {signIn, signOut} from "@/actions";
import {useSession} from "next-auth/react";

export default function HeaderAuth() {
    const session = useSession();

    let authContent: ReactNode;
    if (session.status === "loading") return authContent = null;
    if (session.data?.user) {
        authContent = <Popover placement="left">
            <PopoverTrigger>
                <Avatar src={session.data?.user.image || ''}/>
            </PopoverTrigger>
            <PopoverContent>
                <div className="p-4">
                    <form action={signOut}>
                        <Button type="submit">Sign Out</Button>
                    </form>
                </div>
            </PopoverContent>
        </Popover>
    } else {
        authContent = <>
            <NavbarItem>
                <form action={signIn}>
                    <Button type='submit' color='secondary' variant='bordered'>Sign In</Button>
                </form>
            </NavbarItem>
            <NavbarItem>
                <form action={signOut}>
                    <Button type='submit' color='default' variant='flat'>Sign Out</Button>
                </form>
            </NavbarItem>
        </>
    }

    return authContent
}