import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowAltToLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 12a1 1 0 0 1-1 1H8v3.361c0 .695-.852 1.044-1.35.552l-4.418-4.361a.774.774 0 0 1 0-1.104L6.65 7.087C7.148 6.595 8 6.944 8 7.639V11h15a1 1 0 0 1 1 1ZM1 3a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

ArrowAltToLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltToLeft.displayName = 'ArrowAltToLeft';

export default ArrowAltToLeft;
