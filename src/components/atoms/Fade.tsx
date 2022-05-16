import { motion } from 'framer-motion';
import React, { memo, ReactNode, useState } from 'react';

type FadeProps = {
  children?: ReactNode;
  className?: string;
};

const Fade = ({ children, className = '', ...props }: FadeProps) => {
  const [key] = useState(Math.random().toString());

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      {...props}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default memo(Fade);
