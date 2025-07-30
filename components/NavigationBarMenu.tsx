'use client'

export function NavigationMenuBar() {
    return (
        <nav className="flex space-x-8">
            <a href="#prodej" className="text-white hover:text-gray-300 transition-colors font-medium">
                Prodej
            </a>
            <a href="#sluzby" className="text-white hover:text-gray-300 transition-colors font-medium">
                Služby
            </a>
            <a href="#kontakt" className="text-white hover:text-gray-300 transition-colors font-medium">
                Kontakt
            </a>
        </nav>
    )
}