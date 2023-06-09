import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowAltCircleDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m16.913 13.35-4.361 4.418a.773.773 0 0 1-1.104 0L7.087 13.35c-.492-.498-.143-1.35.552-1.35H11V7a1 1 0 0 1 2 0v5h3.361c.695 0 1.044.852.552 1.35ZM24 12c0 6.617-5.383 12-12 12S0 18.617 0 12 5.383 0 12 0s12 5.383 12 12Zm-2 0c0-5.514-4.486-10-10-10S2 6.486 2 12s4.486 10 10 10 10-4.486 10-10Z" />
    </svg>
  );
});

ArrowAltCircleDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltCircleDown.displayName = 'ArrowAltCircleDown';

export default ArrowAltCircleDown;
