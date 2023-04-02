import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Radish = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.335 8c4.95-4.354-1.972-11.273-6.322-6.322C14.128-1.3 9.263-.006 9.035 3.507c-.027 3.1 1.881 4 1.956 7.6-2.931-2.486-6.725-3.024-9.527-.158-2 1.916-1.292 6.491-1.449 9.035a4.019 4.019 0 0 0 4 4.016c2.539-.156 7.146.567 9.062-1.428 2.649-2.652 2.547-6.225-.169-9.546 3.561.068 4.559 2 7.6 1.958 3.505-.208 4.814-5.106 1.827-6.984Zm-2.82-6a2.517 2.517 0 0 1 1.768 4.267c-.325.326-1.649 1.094-2.135 1.438-1.591.875-3.662 1.8-5.335 2.5.7-1.672 1.621-3.741 2.495-5.333C17.1 3.428 17.9 2 19.515 2Zm-6.494.006a1.844 1.844 0 0 1 1.669 1.667 49.6 49.6 0 0 0-2.176 4.472c-.392-1.7-1.533-2.958-1.487-4.463a1.844 1.844 0 0 1 1.994-1.675Zm-1.358 19.152c-1.175 1.264-5.883.712-7.649.842-2.674-.163-1.886-3-1.98-5.088 0-1.908.005-3.71.844-4.549 2.466-2.448 5.334-1.29 7.705 1.064 1.323 1.324 4.077 4.729 1.08 7.731Zm9.921-8.817c-1.7 1.717-3.639-.432-5.711-.838a49.517 49.517 0 0 0 4.468-2.175 1.85 1.85 0 0 1 1.243 3.013Z" />
    </svg>
  );
});

Radish.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Radish.displayName = 'Radish';

export default Radish;
