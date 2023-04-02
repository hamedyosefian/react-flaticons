import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GrinWink = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 10c0 1-.895 1-2 1s-2 0-2-1a2 2 0 0 1 4 0ZM7 11h3a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2Zm17 1a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Zm-5.211 2.024A15.4 15.4 0 0 1 12 15a15.4 15.4 0 0 1-4.8-.976 1 1 0 0 0-1.052 1.518A6.836 6.836 0 0 0 12 19a6.827 6.827 0 0 0 5.842-3.458 1 1 0 0 0-1.053-1.518Z" />
    </svg>
  );
});

GrinWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinWink.displayName = 'GrinWink';

export default GrinWink;
