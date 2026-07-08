import {motion} from 'framer-motion';

export const Bubbles = () => {
    const sizes: number[] = [20, 40, 60, 80];

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
            {Array.from({length: 15}).map((_, i) => {
                const size = sizes[i % sizes.length]!;

                return (
                    <motion.div
                        key={i}
                        className="absolute rounded-full"
                        initial={{
                            y: "120vh",
                            x: Math.random() * 100 + "vw",
                            opacity: 0
                        }}
                        animate={{y: "-20vh", opacity: [0, 0.7, 0]}}
                        transition={{
                            duration: Math.random() * 10 + 15,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 10
                        }}
                        style={{
                            width: `${size}px`,
                            height: `${size}px`,
                            aspectRatio: '1/1',
                            boxSizing: 'border-box',
                            border: `${size / 5}px solid rgba(0, 163, 255, 0.6)`
                        }}
                    />
                );
            })}
        </div>
    );
};
