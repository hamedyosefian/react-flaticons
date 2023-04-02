import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Gamepad = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M473.759 107.286c-19.12-31.867-53.112-53.112-91.353-53.112H127.469c-38.241 0-72.232 21.245-91.353 53.112C12.747 149.776 0 196.515 0 245.378c0 116.846 46.739 212.448 106.224 212.448 31.867 0 57.361-29.743 76.481-91.353 2.124-8.498 10.622-14.871 21.245-14.871h104.1c8.498 0 16.996 6.373 21.245 14.871 19.12 61.61 44.614 91.353 76.481 91.353 59.485 0 106.224-95.602 106.224-212.448-2.124-48.863-14.871-95.602-38.241-138.092zm-70.108 308.05c-6.373 0-21.245-16.996-36.116-61.61-8.498-27.618-33.992-44.614-61.61-44.614H203.95c-27.618 0-53.112 19.12-61.61 44.614-14.871 44.614-29.743 61.61-36.116 61.61-21.245 0-63.734-65.859-63.734-169.958 0-40.365 10.622-80.73 29.743-116.846 12.747-19.12 33.992-31.867 55.237-31.867h254.938c21.245 0 42.49 12.747 55.237 31.867 19.12 36.116 29.743 76.481 29.743 116.846-.002 104.099-42.492 169.958-63.737 169.958z" />
      <path d="M192 192h-21.333v-21.333c0-12.8-8.533-21.333-21.333-21.333-12.8 0-21.333 8.533-21.333 21.333V192h-21.333c-12.8 0-21.333 8.533-21.333 21.333 0 12.8 8.533 21.333 21.333 21.333H128V256c0 12.8 8.533 21.333 21.333 21.333 12.8 0 21.333-8.533 21.333-21.333v-21.333H192c12.8 0 21.333-8.533 21.333-21.333C213.333 200.533 204.8 192 192 192z" />
      <circle cx="394.667" cy="181.333" r="32" />
      <circle cx="330.667" cy="245.333" r="32" />
    </svg>
  );
});

Gamepad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gamepad.displayName = 'Gamepad';

export default Gamepad;
