import React from 'react';
import {FadeInWhenVisible} from '../utils/animations';
import {TeamMember} from '../components/TeamMember';
import {TEAM_MEMBERS} from '../data/content';

export const Team = () => (
    <section id="team" className="py-24 relative z-10 bg-gradient-to-b from-[#050505] to-black">
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    The Team
                </h2>
                <p
                    className="text-gray-400">Meet the creators.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 justify-center max-w-5xl mx-auto">
                {TEAM_MEMBERS.map((member, index) => (
                    <FadeInWhenVisible key={member.name} delay={0.1 * (index + 1)}>
                        <TeamMember {...member} />
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    </section>
);
