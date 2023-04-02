import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BandAid = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9 10a1 1 0 1 1 1 1 1 1 0 0 1-1-1zm5 1a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm-4 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1zm4 2a1 1 0 1 0-1-1 1 1 0 0 0 1 1zm10-5v4a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5v-4a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5zM7 7v10h10V7zM5 17V7a3 3 0 0 0-3 3v4a3 3 0 0 0 3 3zm17-7a3 3 0 0 0-3-3v10a3 3 0 0 0 3-3z" />
    </svg>
  );
});

BandAid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BandAid.displayName = 'BandAid';

export default BandAid;
