import React from 'react';

const BackgroundWrapper = ({ children, disableBackground }) => {
  const style = disableBackground ? {
    width: '100%',
    minHeight: '100vh',
    paddingTop: '70px', // agar tidak tertutup navbar
  } : {
    width: '100%',
    minHeight: '100vh',
    backgroundImage: 'linear-gradient(rgba(255,255,255,0.5), rgba(255,255,255,0.5)), url(/Images/bg2.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    paddingTop: '70px', // agar tidak tertutup navbar
  };

  return <div style={style}>{children}</div>;
};

export default BackgroundWrapper;
