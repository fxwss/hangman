import React, { memo } from 'react';
import { HeartIcon as HeatIconSolid } from '@heroicons/react/solid';
import { HeartIcon as HeatIconOutline } from '@heroicons/react/outline';
import { motion } from 'framer-motion';

const heartAnimation = {
  initial: {
    scale: 1,
    opacity: 0,
  },
  animate: {
    scale: [3, 1],
    opacity: 1,
  },
  transition: {
    duration: 0.3,
  },
};

type LifesProps = {
  total: number;
  current: number;
};

const Lifes = ({ total, current }: LifesProps) => {
  return (
    <div className="flex flex-row-reverse gap-4 flex-wrap justify-center">
      {Array(total)
        .fill(0)
        .map((_, index) =>
          index < current ? (
            <HeatIconSolid className="w-6 h-6 text-red-500" key={index} />
          ) : (
            <motion.div key={`heart-${index}-disabled`} {...heartAnimation}>
              <HeatIconOutline className="w-6 h-6 text-red-500" key={index} />
            </motion.div>
          )
        )}
    </div>
  );
};

export default memo(Lifes);
