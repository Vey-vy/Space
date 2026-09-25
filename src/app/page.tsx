import { TopBar } from '@/components/TopBar';
import { Services } from '@/components/Services';

export const dynamic = 'force-dynamic';

export default async function Home() {
    return (
        <main className="page-shell">
            <TopBar />

            <section className="intro">
                <h1 className="intro-title">
                    Hello i'm Veyvy
                </h1>
            </section>

            <section
                id="catalog"
                className="catalog"
                aria-labelledby="catalog-title"
            >
                <Services />
            </section>
        </main>
    );
}
