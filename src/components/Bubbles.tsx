import {motion} from 'framer-motion';

const sizes: number[] = [20, 40, 60, 80];
const bubbles = Array.from({length: 15}, (_, i) => {
    const size = sizes[i % sizes.length]!;

    return {
        id: i,
        size,
        x: `${Math.random() * 100}vw`,
        duration: Math.random() * 10 + 15,
        delay: Math.random() * 10,
    };
});

export const Bubbles = () => {
    return (
        <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
            {bubbles.map((bubble) => (
                    <motion.div
                        key={bubble.id}
                        className="absolute rounded-full"
                        initial={{
                            y: '120vh',
                            x: bubble.x,
                            opacity: 0,
                        }}
                        animate={{y: '-20vh', opacity: [0, 0.7, 0]}}
                        transition={{
                            duration: bubble.duration,
                            repeat: Infinity,
                            ease: 'linear',
                            delay: bubble.delay,
                        }}
                        style={{
                            width: `${bubble.size}px`,
                            height: `${bubble.size}px`,
                            aspectRatio: '1/1',
                            boxSizing: 'border-box',
                            border: `${bubble.size / 5}px solid rgba(0, 163, 255, 0.6)`,
                        }}
                    />
                ))}
        </div>
    );
};
