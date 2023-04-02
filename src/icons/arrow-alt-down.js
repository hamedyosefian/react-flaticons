import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowAltDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m16.913 19.35-4.361 4.418a.773.773 0 0 1-1.104 0L7.087 19.35c-.492-.498-.143-1.35.552-1.35H11V1a1 1 0 1 1 2 0v17h3.361c.695 0 1.044.852.552 1.35Z" />
    </svg>
  );
});

ArrowAltDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltDown.displayName = 'ArrowAltDown';

export default ArrowAltDown;
