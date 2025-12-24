import React from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Hero} from './sections/Hero';
import {Projects} from './sections/Projects';
import {Team} from './sections/Team';
import Snowfall from 'react-snowfall'

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
                <Snowfall
                    snowflakeCount={80}
                />
            </div>

            <Navbar/>

            <Hero/>

            <Projects/>
            <Team/>
            <Footer/>
        </div>
    );
}
