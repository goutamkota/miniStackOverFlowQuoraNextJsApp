import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Providers from "@/app/providers";
import Header from "@/components/header";
import {ReactNode} from "react";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default function RootLayout({children}: { children: ReactNode }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <div className="mx-auto">
            <Providers>
                <Header></Header>
                {children}
            </Providers>
        </div>
        </body>
        </html>
    )
}
