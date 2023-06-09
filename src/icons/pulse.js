import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Pulse = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zm3 13a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-2-4a1 1 0 0 1-1 1h-2.965l-1.7 2.555A1 1 0 0 1 13.5 14h-.062a1 1 0 0 1-.833-.551l-2.229-4.461-1.044 1.567A1 1 0 0 1 8.5 11H5a1 1 0 0 1 0-2h2.965l1.7-2.555A.987.987 0 0 1 10.562 6a1 1 0 0 1 .833.551l2.229 4.459 1.044-1.567A1 1 0 0 1 15.5 9H19a1 1 0 0 1 1 1z" />
    </svg>
  );
});

Pulse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pulse.displayName = 'Pulse';

export default Pulse;
