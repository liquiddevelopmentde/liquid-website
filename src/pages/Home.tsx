import {Team} from '../sections/Team.tsx';
import {Hero} from '../sections/Hero.tsx';
import {Projects} from '../sections/Projects.tsx';

function Home() {
    return (
        <>
            <Hero />
            <Projects />
            <Team />
        </>
    );
}

export default Home;
