import {FadeInWhenVisible} from '../utils/animations.tsx';
import {TeamMemberCard} from '../components/TeamMember.tsx';
import {TEAM_MEMBERS} from '../data/content.ts';

export const Team = () => (
    <section id="team" className="relative z-10 bg-gradient-to-b from-[#050505] to-black py-24">
        <div className="mx-auto max-w-7xl px-6">
            <div className="mb-16 text-center">
                <h2 className="mb-4 text-3xl font-bold md:text-4xl">The Team</h2>
                <p className="text-gray-400">Meet the creators.</p>
            </div>
            <div className="mx-auto grid max-w-5xl justify-center gap-8 md:grid-cols-3">
                {TEAM_MEMBERS.map((member, index) => (
                    <FadeInWhenVisible key={member.name} delay={0.1 * (index + 1)}>
                        <TeamMemberCard {...member} />
                    </FadeInWhenVisible>
                ))}
            </div>
        </div>
    </section>
);
