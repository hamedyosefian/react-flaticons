import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ModeLandscape = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 19a1 1 0 0 0 .707-1.707l-6.172-6.171a5 5 0 0 0-7.07 0l-2.172 2.171a1 1 0 0 0 1.414 1.414l2.172-2.171a3.07 3.07 0 0 1 4.242 0l6.172 6.171A1 1 0 0 0 18 19ZM16 10.5A3.5 3.5 0 1 0 12.5 7a3.5 3.5 0 0 0 3.5 3.5Zm0-5A1.5 1.5 0 1 1 14.5 7 1.5 1.5 0 0 1 16 5.5ZM23 16a1 1 0 0 0-1 1v2a3 3 0 0 1-3 3h-2a1 1 0 0 0 0 2h2a5.006 5.006 0 0 0 5-5v-2a1 1 0 0 0-1-1ZM1 8a1 1 0 0 0 1-1V5a3 3 0 0 1 3-3h2a1 1 0 0 0 0-2H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1ZM7 22H5a3 3 0 0 1-3-3v-2a1 1 0 0 0-2 0v2a5.006 5.006 0 0 0 5 5h2a1 1 0 0 0 0-2ZM19 0h-2a1 1 0 0 0 0 2h2a3 3 0 0 1 3 3v2a1 1 0 0 0 2 0V5a5.006 5.006 0 0 0-5-5Z" />
    </svg>
  );
});

ModeLandscape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ModeLandscape.displayName = 'ModeLandscape';

export default ModeLandscape;
