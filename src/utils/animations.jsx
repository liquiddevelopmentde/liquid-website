import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export const fadeInUp = { 
  hidden: { opacity: 0, y: 30 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } 
};

export const FadeInWhenVisible = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
    <div ref={ref}>
      <motion.div 
        variants={fadeInUp} 
        initial="hidden" 
        animate={isInView ? "visible" : "hidden"} 
        transition={{ delay }}
      >
        {children}
      </motion.div>
    </div>
  );
};
