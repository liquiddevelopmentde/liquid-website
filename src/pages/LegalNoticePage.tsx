const LegalNoticePage = () => {
    return (
        <section className="relative z-10 w-full bg-gradient-to-b from-[#0e0e0e] to-[#050505] px-6 pb-16 pt-28">
            <div className="mx-auto max-w-3xl rounded-3xl border border-white/10 bg-[#121212] p-8 shadow-2xl md:p-12">
                <h1 className="mb-8 text-3xl font-bold text-white md:text-4xl">Legal Notice</h1>

                <div className="space-y-8 text-gray-300">
                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-white">Information according to § 5 TMG</h2>
                        <p>Liquid Development</p>
                        <p>Felix Kirchner</p>
                        <p>Mechlerstraße 4</p>
                        <p>04105 Leipzig</p>
                        <p>Germany</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-white">Represented by</h2>
                        <p>Felix Kirchner, Mathis Kirchner, Yannick Weigert</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-white">Contact</h2>
                        <p>Email: hello@liquid-dev.de</p>
                    </section>

                    <section>
                        <h2 className="mb-3 text-xl font-semibold text-white">Disclaimer</h2>
                        <p>
                            Despite careful control, we assume no liability for the content of external links. The
                            operators of linked pages are solely responsible for their content.
                        </p>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default LegalNoticePage;
