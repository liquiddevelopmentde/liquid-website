import {Team} from '../sections/Team.tsx';
import {Hero} from '../sections/Hero.tsx';
import {Projects} from '../sections/Projects.tsx';

function Home() {
    return (
        <div className="w-full">
            <Hero />
            <Projects />
            <Team />
        </div>
    );
}

export default Home;
