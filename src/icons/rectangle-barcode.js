import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RectangleBarcode = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 22H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v10c0 2.757-2.243 5-5 5ZM5 4C3.346 4 2 5.346 2 7v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3H5Zm1 13V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm4 0V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm10 0V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm-6-.5v-9a1.5 1.5 0 1 0-3 0v9a1.5 1.5 0 0 0 3 0Zm1.5 1.5a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Z" />
    </svg>
  );
});

RectangleBarcode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RectangleBarcode.displayName = 'RectangleBarcode';

export default RectangleBarcode;
