import {Navbar} from './components/Navbar.tsx';
import {Footer} from './components/Footer.tsx';
import {useEffect} from 'react';

import Snowfall from 'react-snowfall';
import Home from './pages/Home.tsx';
import {BrowserRouter, Route, Routes, useLocation} from 'react-router-dom';
import LegalNoticePage from './pages/LegalNoticePage.tsx';
import NotFoundPage from './pages/NotFoundPage.tsx';

// Determines if the current date is within the snowfall season (November 15th to January 31st)
function isSnowfallSeason(date = new Date()) {
    const year = date.getFullYear();
    const start = new Date(year, 10, 15); // November 15th
    const end = new Date(year + 1, 0, 31); // January 31st of the next year
    // If we're on or after November 15th, check if we're before January 31st of the next year
    if (date >= start) {
        return date <= end;
    }
    // If we're before November 15th, check if we're after January 1st of the current year
    const prevEnd = new Date(year, 0, 31);
    return date <= prevEnd;
}

const ScrollToHash = () => {
    const {hash, pathname} = useLocation();

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.slice(1));
            if (element) {
                element.scrollIntoView({behavior: 'smooth', block: 'start'});
                return;
            }
        }

        window.scrollTo({top: 0, behavior: 'smooth'});
    }, [hash, pathname]);

    return null;
};

const App = () => {
    return (
        <BrowserRouter>
            <ScrollToHash />
            <div className="flex h-screen min-h-screen flex-col overflow-x-hidden bg-[#0e0e0e] font-sans text-white selection:bg-[#00A3FF] selection:text-white">
                {/* Snow */}
                <div
                    style={{
                        position: 'fixed',
                        width: '100vw',
                        height: '100vh',
                        top: 0,
                        left: 0,
                        pointerEvents: 'none',
                        zIndex: 9999,
                    }}
                >
                    {isSnowfallSeason() && <Snowfall snowflakeCount={80} />}
                </div>

                <Navbar />
                <main className="flex-1">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/legal" element={<LegalNoticePage />} />
                        <Route path="*" element={<NotFoundPage />} />
                    </Routes>
                </main>
                <Footer />
            </div>
        </BrowserRouter>
    );
};

export default App;
