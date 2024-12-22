'use client';

import type { HTMLMotionProps } from 'framer-motion';
import { motion } from 'framer-motion';
import React from 'react';

type MotionParagraphProps = HTMLMotionProps<'p'>;

const MotionParagraph = React.forwardRef<HTMLHeadingElement, MotionParagraphProps>(function MotionParagraph({ children, ...props }, ref) {
  return (
    <motion.p ref={ref} {...props}>
      {children}
    </motion.p>
  );
});

export { MotionParagraph };
