import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Tachometer = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.9 11.437A12 12 0 0 0 4 4.052a12.055 12.055 0 0 0-.246 17.66A4.847 4.847 0 0 0 7.114 23h9.766a4.988 4.988 0 0 0 3.508-1.429A11.942 11.942 0 0 0 23.9 11.437Zm-4.91 8.705a3.005 3.005 0 0 1-2.11.858H7.114a2.863 2.863 0 0 1-1.982-.741 10.045 10.045 0 0 1 .205-14.716 10 10 0 0 1 13.653 14.6ZM17.707 7.293a1 1 0 0 1 0 1.414l-3.775 3.775a2 2 0 1 1-1.414-1.414l3.775-3.775a1 1 0 0 1 1.414 0Z" />
    </svg>
  );
});

Tachometer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tachometer.displayName = 'Tachometer';

export default Tachometer;
