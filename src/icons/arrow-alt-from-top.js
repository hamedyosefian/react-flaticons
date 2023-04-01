import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltFromTop = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
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
