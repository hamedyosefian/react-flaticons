import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GraduationCap = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M470.549 111.573 313.237 36.629c-34.628-20.684-77.728-21.051-112.704-.96L41.451 111.573c-.597.299-1.216.619-1.792.96-37.752 21.586-50.858 69.689-29.272 107.441a78.736 78.736 0 0 0 31.064 30.266l43.883 20.907V375.68c.026 46.743 30.441 88.039 75.072 101.931a331.883 331.883 0 0 0 95.595 13.056 331.9 331.9 0 0 0 95.595-12.949c44.631-13.891 75.046-55.188 75.072-101.931V271.104l42.667-20.395v175.957c0 11.782 9.551 21.333 21.333 21.333 11.782 0 21.333-9.551 21.333-21.333v-256c.142-25.051-19.638-48.193-41.452-59.093zM384 375.787c.011 27.959-18.129 52.69-44.8 61.077A289.962 289.962 0 0 1 256 448a289.962 289.962 0 0 1-83.2-11.136c-26.671-8.388-44.811-33.118-44.8-61.077v-84.309l70.763 33.707a112.47 112.47 0 0 0 57.707 15.765 106.666 106.666 0 0 0 54.976-14.805L384 291.477v84.31zm68.267-164.054-160.896 76.8a70.272 70.272 0 0 1-72.32-.96l-157.419-74.88c-17.547-9.462-24.101-31.357-14.639-48.903a36.105 36.105 0 0 1 13.85-14.201l159.893-76.373a70.4 70.4 0 0 1 72.32.96l157.312 74.944a36.861 36.861 0 0 1 18.965 31.787 36.266 36.266 0 0 1-17.066 30.826z" />
    </svg>
  );
});

GraduationCap.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GraduationCap.displayName = 'GraduationCap';

export default GraduationCap;
