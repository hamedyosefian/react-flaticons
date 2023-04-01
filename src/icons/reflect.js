import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Reflect = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23 13H1a1 1 0 0 1 0-2h22a1 1 0 0 1 0 2Zm-4.066-5.874a2.427 2.427 0 0 0-1.284-2.731L9.668.428A3.3 3.3 0 0 0 6.4.433 2.809 2.809 0 0 0 5 2.914V6a3 3 0 0 0 3 3h8.318a2.538 2.538 0 0 0 2.616-1.874ZM8.737 2.2l8.012 3.98a.421.421 0 0 1 .24.477c-.074.308-.494.341-.671.341H8A1 1 0 0 1 7 6V2.914a.825.825 0 0 1 .418-.758A1.168 1.168 0 0 1 8.011 2a1.5 1.5 0 0 1 .726.2Zm.891 21.394 8.033-3.994a2.425 2.425 0 0 0 1.273-2.726A2.538 2.538 0 0 0 16.318 15H8a3 3 0 0 0-3 3v3.085a2.808 2.808 0 0 0 1.4 2.481A3.212 3.212 0 0 0 8.032 24a3.287 3.287 0 0 0 1.596-.408ZM16.318 17c.177 0 .6.033.671.341a.417.417 0 0 1-.229.472L8.7 21.822a1.313 1.313 0 0 1-1.279.02.824.824 0 0 1-.421-.758V18a1 1 0 0 1 1-1Z" />
    </svg>
  );
});

Reflect.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Reflect.displayName = 'Reflect';

export default Reflect;
