// app/loading.tsx
import React from 'react';
import PropagateLoader from 'react-spinners/PropagateLoader';

const Loading = () => {
  const containerStyle: React.CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: 'black', // Optional
  };

  const loaderStyle: React.CSSProperties = {
    color: 'white', // Set the color of the spinner
  };

  return (
    <div style={containerStyle}>
      <PropagateLoader cssOverride={loaderStyle} size={25} />
    </div>
  );
};

export default Loading;
