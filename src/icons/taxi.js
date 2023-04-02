import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Taxi = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 11a1 1 0 0 0 0-2h-1.4l-.77-2.481a4.964 4.964 0 0 0-4.13-3.467A4.982 4.982 0 0 0 12.117 0h-.234A4.982 4.982 0 0 0 7.3 3.052a4.964 4.964 0 0 0-4.128 3.466L2.4 9H1a1 1 0 0 0 0 2h.781l-.715 2.3A3.958 3.958 0 0 0 2 19.444V21a3 3 0 0 0 6 0v-1h8v1a3 3 0 0 0 6 0v-1.556a3.958 3.958 0 0 0 .934-6.142L22.219 11ZM11.883 2h.234a2.991 2.991 0 0 1 2.226 1H9.657a2.988 2.988 0 0 1 2.226-1Zm-6.8 5.11A2.986 2.986 0 0 1 7.947 5h8.106a2.986 2.986 0 0 1 2.865 2.111l1.532 4.934A3.941 3.941 0 0 0 20 12H4a3.941 3.941 0 0 0-.45.045ZM6 21a1 1 0 0 1-2 0v-1h2Zm14 0a1 1 0 0 1-2 0v-1h2Zm0-3H4a2 2 0 0 1 0-4v1a1 1 0 0 0 2 0v-1h12v1a1 1 0 0 0 2 0v-1a2 2 0 0 1 0 4Z" />
    </svg>
  );
});

Taxi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Taxi.displayName = 'Taxi';

export default Taxi;
