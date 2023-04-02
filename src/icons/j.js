import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const J = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17 24H7c-2.757 0-5-2.243-5-5v-1c.006-1.308 1.995-1.307 2 0v1c0 1.654 1.346 3 3 3h10c1.654 0 3-1.346 3-3V1c.006-1.308 1.995-1.307 2 0v18c0 2.757-2.243 5-5 5Z" />
    </svg>
  );
});

J.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

J.displayName = 'J';

export default J;
