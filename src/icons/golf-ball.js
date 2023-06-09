import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GolfBall = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 12a1 1 0 1 1-1-1 1 1 0 0 1 1 1Zm-5-1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm2-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm2-1a1 1 0 1 0-1-1 1 1 0 0 0 1 1Zm2 1a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm-.055 9.086a4.959 4.959 0 0 1-1.41 2.792L13 21.414V23a1 1 0 0 1-2 0v-1.586l-1.536-1.536a4.962 4.962 0 0 1-1.41-2.792 9 9 0 1 1 7.891 0Zm-2.824 1.378a3.016 3.016 0 0 0 .8-1.464h-3.85a3.022 3.022 0 0 0 .8 1.464L12 19.586ZM19 9a7 7 0 1 0-10.594 6.005C8.437 15 8.468 15 8.5 15h7c.032 0 .063 0 .094.005A6.966 6.966 0 0 0 19 9Z" />
    </svg>
  );
});

GolfBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GolfBall.displayName = 'GolfBall';

export default GolfBall;
