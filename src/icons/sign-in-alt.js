import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SignInAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18.9 0H5.1A5.055 5.055 0 0 0 0 5v3a1 1 0 0 0 2 0V5a3.054 3.054 0 0 1 3.1-3h13.8A3.054 3.054 0 0 1 22 5v14a3.054 3.054 0 0 1-3.1 3H5.1A3.054 3.054 0 0 1 2 19v-3a1 1 0 0 0-2 0v3a5.055 5.055 0 0 0 5.1 5h13.8a5.055 5.055 0 0 0 5.1-5V5a5.055 5.055 0 0 0-5.1-5Z" />
      <path d="M3 12a1 1 0 0 0 1 1l13.188-.03-4.323 4.323a1 1 0 1 0 1.414 1.414l4.586-4.586a3 3 0 0 0 0-4.242l-4.584-4.586a1 1 0 0 0-1.414 1.414l4.262 4.263L4 11a1 1 0 0 0-1 1Z" />
    </svg>
  );
});

SignInAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SignInAlt.displayName = 'SignInAlt';

export default SignInAlt;
