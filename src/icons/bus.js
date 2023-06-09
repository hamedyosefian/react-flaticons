import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Bus = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M22 10V5.646A5.041 5.041 0 0 0 18.35.83a24.742 24.742 0 0 0-12.7 0A5.041 5.041 0 0 0 2 5.646V10a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2v2a4.994 4.994 0 0 0 2 4v.5a2.5 2.5 0 0 0 4.95.5h6.1a2.5 2.5 0 0 0 4.95-.5V21a4.994 4.994 0 0 0 2-4v-2a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2Zm-9 3V7h7v6Zm-9 0V7h7v6ZM6.2 2.752a22.75 22.75 0 0 1 11.6 0A3 3 0 0 1 19.931 5H4.069A3 3 0 0 1 6.2 2.752ZM17 20H7a3 3 0 0 1-3-3v-2h2v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h2v2a3 3 0 0 1-3 3Z" />
    </svg>
  );
});

Bus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bus.displayName = 'Bus';

export default Bus;
