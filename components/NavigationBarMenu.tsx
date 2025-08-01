'use client'

import Link from 'next/link'

export function NavigationMenuBar() {
    return (
        <nav className="flex w-full items-center">
            {/* Center aligned */}
            <div className="flex-1 flex justify-center space-x-8">
                <Link href="/buy" className="text-white hover:text-gray-300 transition-colors font-medium">
                    Koupit
                </Link>
                <Link href="/services" className="text-white hover:text-gray-300 transition-colors font-medium">
                    Služby
                </Link>
                <Link href="/about" className="text-white hover:text-gray-300 transition-colors font-medium">
                    O Nás
                </Link>
            </div>
            {/* Right aligned */}
            <div className="flex-none">
                <Link href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium ml-8">
                    Kontakt
                </Link>
            </div>
        </nav>
    )
}