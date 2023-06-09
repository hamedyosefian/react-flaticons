import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Subway = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17 0H7a5.006 5.006 0 0 0-5 5v9a5.008 5.008 0 0 0 4.266 4.946l-2.123 3.539a1 1 0 0 0 1.714 1.03L8.566 19h6.868l2.709 4.515a1 1 0 0 0 1.714-1.03l-2.123-3.539A5.008 5.008 0 0 0 22 14V5a5.006 5.006 0 0 0-5-5Zm-4 11V6h7v5Zm-9 0V6h7v5Zm3-9h10a3 3 0 0 1 2.828 2H4.172A3 3 0 0 1 7 2Zm10 15H7a3 3 0 0 1-3-3v-1h2v1a1 1 0 0 0 2 0v-1h8v1a1 1 0 0 0 2 0v-1h2v1a3 3 0 0 1-3 3Z" />
    </svg>
  );
});

Subway.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Subway.displayName = 'Subway';

export default Subway;
