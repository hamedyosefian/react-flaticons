import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Tornado = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-4a3 3 0 0 1 0-6h7a1 1 0 0 0 0-2H6C-1.932 11.747-1.926.25 6 0h14a4 4 0 0 1 0 8H6a1 1 0 0 1 0-2h14a2 2 0 0 0 0-4H6a4 4 0 0 0 0 8h13a3 3 0 0 1 0 6h-7a1 1 0 0 0 0 2h4a3 3 0 0 1 0 6Z" />
    </svg>
  );
});

Tornado.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tornado.displayName = 'Tornado';

export default Tornado;
