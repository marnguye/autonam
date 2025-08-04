'use client'

import Link from 'next/link'

export function NavigationMenuBar() {
    return (
        <nav className="flex w-full items-center">
            {/* Center aligned */}
            <div className="flex-1 flex justify-center space-x-8">
                <Link href="/buy" className="text-white hover:text-gray-300 transition-colors font-semibold text-lg">
                    Koupit
                </Link>
                <Link href="/services" className="text-white hover:text-gray-300 transition-colors font-semibold text-lg">
                    Služby
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-semibold text-lg">
                    O Nás
                </Link>
            </div>
            {/* Right aligned */}
            <div className="flex-none">
                <Link href="/contact" className="ml-8 inline-block px-8 py-4 text-white font-bold bg-primary hover:bg-primary/80 text-lg rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                    Kontakt
                </Link>
            </div>
        </nav>
    )
}