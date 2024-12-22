'use client';

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import React from 'react';

type MotionDivProps = HTMLMotionProps<'div'>;

const MotionDiv = React.forwardRef<HTMLHeadingElement, MotionDivProps>(function MotionDiv({ children, ...props }, ref) {
  return (
    <motion.div ref={ref} {...props}>
      {children}
    </motion.div>
  );
});

export { MotionDiv };
