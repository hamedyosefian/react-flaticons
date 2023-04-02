import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Doctor = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 5h-3V4a3 3 0 0 0-3-3h-2a3 3 0 0 0-3 3v1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-8a5.006 5.006 0 0 0-5-5zm-9-1a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v1h-4zm12 14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3zm-6-4a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2v-2a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z" />
    </svg>
  );
});

Doctor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Doctor.displayName = 'Doctor';

export default Doctor;
