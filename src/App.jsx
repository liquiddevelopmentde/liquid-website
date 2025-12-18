import React from 'react';
import {Navbar} from './components/Navbar';
import {Footer} from './components/Footer';
import {Hero} from './sections/Hero';
import {Projects} from './sections/Projects';
import {Team} from './sections/Team';

export default function LiquidDevelopment() {
    return (
        <div
            className="min-h-screen bg-[#0e0e0e] text-white font-sans selection:bg-[#00A3FF] selection:text-white overflow-x-hidden">
            <Navbar/>
            <Hero/>
            <Projects/>
            <Team/>
            <Footer/>
        </div>
    );
}
