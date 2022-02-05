import React, { memo } from 'react';
import Fade from '../atoms/Fade';
import Loading from '../atoms/Loading';

const Modal = () => {
  return (
    <Fade>
      <div className="flex justify-center items-center left-0 top-0 w-screen h-screen bg-black opacity-70">
        <div className="w-4/5 h-4/5  rounded shadow bg-white border to-blue-400 opacity-100">
          <div className="w-48 h-48">
            <Loading />
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default memo(Modal);
