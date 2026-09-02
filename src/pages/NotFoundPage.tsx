import {Link} from 'react-router-dom';

const NotFoundPage = () => {
    return (
        <section className="relative z-10 flex h-full w-full flex-1 items-center justify-center overflow-hidden bg-gradient-to-b from-[#0e0e0e] to-[#050505] px-6 pb-8 pt-20">
            <div className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00A3FF]/15 blur-[120px]"></div>

            <div className="relative text-center">
                <h2 className="mb-3 text-9xl font-bold uppercase text-[#00A3FF]">404</h2>
                <h1 className="mb-4 text-3xl font-bold tracking-tight text-white md:text-5xl">Page not found</h1>
                <p className="mx-auto mb-10 max-w-xl text-lg text-gray-400">This page does not exist.</p>

                <Link
                    to="/"
                    className="inline-flex items-center justify-center rounded-full border border-[#00A3FF] px-8 py-3 font-bold text-white transition-all hover:bg-[#00A3FF]/10"
                >
                    Back to home
                </Link>
            </div>
        </section>
    );
};

export default NotFoundPage;
