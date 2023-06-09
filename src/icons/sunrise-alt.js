import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SunriseAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 24h-4.078a2 2 0 0 1-1.972-1.711 5.009 5.009 0 0 0-9.9 0A2 2 0 0 1 5.079 24H1a1 1 0 0 1 0-2h4.079a6.821 6.821 0 0 1 .428-1.607l-3.525-2.044a1 1 0 1 1 1-1.731l3.529 2.046a7.062 7.062 0 0 1 1.151-1.148l-2.044-3.532a1 1 0 0 1 1.731-1l2.044 3.527A6.915 6.915 0 0 1 11 16.072V12a1 1 0 0 1 2 0v4.072a6.915 6.915 0 0 1 1.607.437l2.044-3.528a1 1 0 0 1 1.731 1l-2.047 3.531a7.062 7.062 0 0 1 1.151 1.148l3.529-2.046a1 1 0 0 1 1 1.731L18.5 20.391a6.852 6.852 0 0 1 .436 1.617L23 22a1 1 0 0 1 0 2ZM15.705 3.292l-3-3a1 1 0 0 0-1.414 0l-3 3a1 1 0 0 0 1.414 1.415L11 3.414V8a1 1 0 0 0 2 0V3.414l1.3 1.293a1 1 0 0 0 1.41-1.415h-.005Z" />
    </svg>
  );
});

SunriseAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SunriseAlt.displayName = 'SunriseAlt';

export default SunriseAlt;
