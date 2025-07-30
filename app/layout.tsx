import './global.css'
import { ReactNode } from 'react'
import { Navbar } from '@/components/Navbar'

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body className="min-h-screen flex flex-col bg-white text-black">
                <Navbar />
                <main className="flex-1 w-full max-w-screen-xl mx-auto px-4">
                    {children}
                </main>
            </body>
        </html>
    )
}
