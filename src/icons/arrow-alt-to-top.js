import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltToTop = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M11.448 2.232a.774.774 0 0 1 1.104 0l4.361 4.418c.492.498.143 1.35-.552 1.35H13v15a1 1 0 0 1-2 0V8H7.639c-.695 0-1.044-.852-.552-1.35l4.361-4.418ZM20 0H4a1 1 0 0 0 0 2h16a1 1 0 1 0 0-2Z" />
    </svg>
  );
});

ArrowAltToTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltToTop.displayName = 'ArrowAltToTop';

export default ArrowAltToTop;
