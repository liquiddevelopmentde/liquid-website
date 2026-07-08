import {Navbar} from './components/Navbar.tsx';
import {Footer} from './components/Footer.tsx';

import Snowfall from 'react-snowfall';
import {Hero} from './sections/Hero.tsx';
import {Projects} from './sections/Projects.tsx';
import {Team} from './sections/Team.tsx';

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

export default function LiquidDevelopment() {
    return (
        <div className="min-h-screen overflow-x-hidden bg-[#0e0e0e] font-sans text-white selection:bg-[#00A3FF] selection:text-white">
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
            <Hero />
            <Projects />
            <Team />
            <Footer />
        </div>
    );
}
