'use client';

import Link from 'next/link';
import { TopBar } from '@/components/TopBar';

export default function NotFound() {
    return (
        <main className="page-shell not-found-page">
            <TopBar />

            <section className="not-found" aria-live="polite">
                <div className="not-found__content">
                    <p className="not-found__eyebrow">404</p>
                    <h1 className="not-found__title">Page Not Found</h1>
                    <p className="not-found__text">The page you are looking for does not exist or has been moved.</p>
                    <Link href="/" className="not-found__link">
                        Return to Home
                    </Link>
                </div>
            </section>
        </main>
    );
}
