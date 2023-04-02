import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GasPumpAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 6.945a5.963 5.963 0 0 0-1.755-4.117L19.707.293a1 1 0 0 0-1.414 1.414L20 3.414V6a2 2 0 0 0 2 2v10a1 1 0 0 1-2 0v-1a3 3 0 0 0-3-3h-1V5a5.006 5.006 0 0 0-5-5H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h6a5.006 5.006 0 0 0 5-5v-3h1a1 1 0 0 1 1 1v1a3 3 0 0 0 6 0s0-11.037 0-11.055ZM5 2h6a3 3 0 0 1 3 3v4H2V5a3 3 0 0 1 3-3Zm9 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-8h12Z" />
    </svg>
  );
});

GasPumpAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GasPumpAlt.displayName = 'GasPumpAlt';

export default GasPumpAlt;
