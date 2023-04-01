import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RectangleXmark = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm3 15c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v10Zm-5.793-7.793L13.414 12l2.793 2.793a.999.999 0 1 1-1.414 1.414L12 13.414l-2.793 2.793a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414L10.586 12 7.793 9.207a.999.999 0 1 1 1.414-1.414L12 10.586l2.793-2.793a.999.999 0 1 1 1.414 1.414Z" />
    </svg>
  );
});

RectangleXmark.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RectangleXmark.displayName = 'RectangleXmark';

export default RectangleXmark;
