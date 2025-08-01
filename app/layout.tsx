import './global.css'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen bg-white text-black overflow-x-hidden overflow-y-auto">
                <Navbar />
                <main className="w-full">
                    {children}
                </main>
            </body>
        </html>
    )
}
