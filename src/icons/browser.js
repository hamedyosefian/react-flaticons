import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Browser = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 1H5a5.006 5.006 0 0 0-5 5v12a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5zM5 3h14a3 3 0 0 1 3 3v1H2V6a3 3 0 0 1 3-3zm14 18H5a3 3 0 0 1-3-3V9h20v9a3 3 0 0 1-3 3zm0-8a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1zm-4 4a1 1 0 0 1-1 1H6a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zM3 5a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm3 0a1 1 0 1 1 1 1 1 1 0 0 1-1-1z" />
    </svg>
  );
});

Browser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Browser.displayName = 'Browser';

export default Browser;
