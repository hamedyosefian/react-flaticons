import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowAltFromTop = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 0H4a1 1 0 1 0 0 2h7v16H7.639c-.695 0-1.044.852-.552 1.35l4.361 4.418a.773.773 0 0 0 1.104 0l4.361-4.418c.492-.498.143-1.35-.552-1.35H13V2h7a1 1 0 1 0 0-2Z" />
    </svg>
  );
});

ArrowAltFromTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltFromTop.displayName = 'ArrowAltFromTop';

export default ArrowAltFromTop;
