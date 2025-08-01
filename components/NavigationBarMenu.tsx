'use client'

export function NavigationMenuBar() {
    return (
        <nav className="flex w-full items-center">
            {/* Center aligned */}
            <div className="flex-1 flex justify-center space-x-8">
                <a href="/buy" className="text-white hover:text-gray-300 transition-colors font-medium">
                    Koupit
                </a>
                <a href="/services" className="text-white hover:text-gray-300 transition-colors font-medium">
                    Služby
                </a>
                <a href="/about" className="text-white hover:text-gray-300 transition-colors font-medium">
                    O Nás
                </a>
            </div>
            {/* Right aligned */}
            <div className="flex-none">
                <a href="/contact" className="text-white hover:text-gray-300 transition-colors font-medium ml-8">
                    Kontakt
                </a>
            </div>
        </nav>
    )
}