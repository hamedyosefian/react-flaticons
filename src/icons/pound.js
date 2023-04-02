import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Pound = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 22H6.884A6.934 6.934 0 0 0 8 18v-4h7a1 1 0 0 0 0-2H8V8a6 6 0 0 1 12 0 1 1 0 0 0 2 0A8 8 0 0 0 6 8v4H4a1 1 0 0 0 0 2h2v4c0 1.2-.292 4-3 4a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2z" />
    </svg>
  );
});

Pound.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pound.displayName = 'Pound';

export default Pound;
