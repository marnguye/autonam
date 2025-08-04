'use client'

import Link from 'next/link'
import { NavigationMenuBar } from "@/components/NavigationBarMenu";

export function Navbar() {
    return (
        <header className="w-full px-6 py-4 absolute top-2 left-0 z-50">
            <div className="w-4/5 m-auto flex justify-between items-center">
                <h1 className="text-4xl font-bold text-white z-20">
                    <Link href="/" className="hover:text-gray-300 transition-colors flex flex-row">
                        Auto <span className="text-primary">Nam.</span>
                    </Link>
                </h1>
                <NavigationMenuBar />
            </div>
        </header>
    )
}