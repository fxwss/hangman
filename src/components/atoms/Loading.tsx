import { RefreshIcon } from '@heroicons/react/outline';
import { AnimationProps, motion } from 'framer-motion';
import React, { HTMLAttributes, memo } from 'react';

const animation: AnimationProps = {
  animate: {
    rotate: -360,
  },
  transition: {
    duration: 1,
    ease: 'linear',
    repeat: Infinity,
  },
};

const LoadingWithAnimation = ({ className }: HTMLAttributes<SVGElement>) => {
  return (
    <motion.div {...animation}>
      <RefreshIcon className={className} />
    </motion.div>
  );
};

export default memo(LoadingWithAnimation);
