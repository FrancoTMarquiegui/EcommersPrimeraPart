import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='spinner-overly'>
      <div className='lds-ripple'><div></div><div></div></div>
    </div>
  );
};

export default LoadingScreen;