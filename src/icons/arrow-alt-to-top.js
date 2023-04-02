import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowAltToTop = forwardRef(({ color, size, ...rest }, ref) => {
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
