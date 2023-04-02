import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RectangleCode = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14.831 16.998a.999.999 0 0 1-.707-1.707l2.583-2.584c.189-.189.293-.44.293-.707s-.104-.518-.293-.707l-2.583-2.584a.999.999 0 1 1 1.414-1.414l2.583 2.583c.567.566.879 1.32.879 2.121s-.312 1.555-.879 2.121l-2.583 2.584a.997.997 0 0 1-.707.293Zm-4.954-.293a.999.999 0 0 0 0-1.414l-2.583-2.584A.99.99 0 0 1 7.001 12c0-.268.104-.518.293-.707L9.877 8.71a.999.999 0 1 0-1.414-1.414L5.88 9.879c-.567.567-.879 1.32-.879 2.122s.312 1.555.879 2.121l2.583 2.584a.997.997 0 0 0 1.414 0ZM24.001 17V7c0-2.757-2.243-5-5-5H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5Zm-5-13c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3h14Z" />
    </svg>
  );
});

RectangleCode.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RectangleCode.displayName = 'RectangleCode';

export default RectangleCode;
