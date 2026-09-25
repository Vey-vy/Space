import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
    title: { default: 'Vy Space', template: 'Veyvy Projects' },
    description: 'A Reference for all Veyvy Projects and Services.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}