import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GrinBeam = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M6 12a1 1 0 0 1-1-1c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-2 0c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-1 1Zm10-5c-1.768 0-3 2.108-3 4a1 1 0 0 0 2 0c0-1.054.679-2 1-2s1 .946 1 2a1 1 0 0 0 2 0c0-1.892-1.232-4-3-4Zm8 5a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Zm-5.211 2.024A15.4 15.4 0 0 1 12 15a15.4 15.4 0 0 1-4.8-.976 1 1 0 0 0-1.052 1.518A6.836 6.836 0 0 0 12 19a6.827 6.827 0 0 0 5.842-3.458 1 1 0 0 0-1.053-1.518Z" />
    </svg>
  );
});

GrinBeam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinBeam.displayName = 'GrinBeam';

export default GrinBeam;
