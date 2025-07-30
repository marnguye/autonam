'use client'

import { NavigationMenuBar } from "@/components/NavigationBarMenu";

export function Navbar() {
    return (
        <header className="w-full p-4 absolute top-5 left-0 z-50">
            <div className="max-w-screen-xl mx-auto flex justify-between items-center">
                <h1 className="text-xl font-bold text-white z-20 ">AutoNam</h1>
                <NavigationMenuBar />
            </div>
        </header>
    )
}