import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Plate = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24A12.013 12.013 0 0 1 0 12C.63-3.908 23.373-3.9 24 12a12.013 12.013 0 0 1-12 12Zm0-22A10.011 10.011 0 0 0 2 12c.525 13.257 19.477 13.253 20 0A10.011 10.011 0 0 0 12 2Zm8 10a1 1 0 0 0-2 0c-.251 7.929-11.749 7.928-12 0a6.006 6.006 0 0 1 6-6 1 1 0 0 0 0-2 8.009 8.009 0 0 0-8 8c.376 10.588 15.626 10.586 16 0Z" />
    </svg>
  );
});

Plate.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Plate.displayName = 'Plate';

export default Plate;
