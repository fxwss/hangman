import { motion } from 'framer-motion';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/outline';
import Fade from '../components/atoms/Fade';
import Button from '../components/atoms/Button';

const containerAnimation = {
  initial: { scale: 2, opacity: 1 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { scale: 2, opacity: 1, transition: { duration: 0.3 } },

  arrow: {
    marginLeft: 16,
  },
};

const Index = () => {
  return (
    <div className="w-full h-screen grid place-items-center">
      <Fade className="bg-white p-4 w-96 flex justify-center">
        <motion.div
          initial="initial"
          animate="animate"
          exit="exit"
          variants={containerAnimation}
          key="index-page"
        >
          <div className="flex flex-col items-center gap-16">
            <h1 className="uppercase text-4xl min-w-max md:text-8xl font-bold">Jogo da forca</h1>
            <motion.div whileHover="arrow">
              <Link to="/hangman">
                <Button className="bg-indigo-500 hover:bg-indigo-300 md:py-6 md:px-8 py-4 px-6 text-white text-xl md:text-4xl hover:text-black flex justify-center gap-2">
                  Iniciar jogo
                  <motion.div className="flex" variants={containerAnimation}>
                    <ArrowRightIcon className="w-8 h-8 md:w-12 flex my-auto" />
                  </motion.div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </Fade>
    </div>
  );
};

export default Index;
