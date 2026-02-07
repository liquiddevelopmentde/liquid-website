import React from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Hero} from './sections/Hero';
import {Projects} from './sections/Projects';
import {Team} from './sections/Team';
import Snowfall from 'react-snowfall'
import { DateTime } from 'luxon';

// Determines if the current date is within the snowfall season (November 15th to January 31st)
function isSnowfallSeason(date = DateTime.now()) {
    const year = date.year;
    const start = DateTime.local(year, 11, 15);
    const end = DateTime.local(year + 1, 1, 31);
    // If we're on or after November 15th, check if we're before January 31st of the next year
    if (date >= start) {
        return date <= end;
    }
    // If we're before November 15th, check if we're after January 1st of the current year
    const prevEnd = DateTime.local(year, 1, 31);
    return date <= prevEnd;
}

export default function LiquidDevelopment() {
    return (
        <div
            className="min-h-screen bg-[#0e0e0e] text-white font-sans selection:bg-[#00A3FF] selection:text-white overflow-x-hidden">
            <div style={{
                position: 'fixed',
                width: '100vw',
                height: '100vh',
                top: 0,
                left: 0,
                pointerEvents: 'none',
                zIndex: 9999,
            }}>
                {isSnowfallSeason() && <Snowfall snowflakeCount={80} />}
            </div>

            <Navbar/>

            <Hero/>

            <Projects/>
            <Team/>
            <Footer/>
        </div>
    );
}
