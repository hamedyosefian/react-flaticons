import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TirePressureWarning = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11 12V4a1 1 0 0 1 2 0v8a1 1 0 0 1-2 0Zm13 .429a12.063 12.063 0 0 0-2.638-7.613A6.069 6.069 0 0 1 20 1a1 1 0 0 0-1-1c-2.3.255-.16 5.038.8 6.064A9.42 9.42 0 0 1 17.715 20H6.287A9.426 9.426 0 0 1 4.2 6.064C5.155 5.048 7.306.252 5 0a1 1 0 0 0-1 1 6.069 6.069 0 0 1-1.362 3.816A11.412 11.412 0 0 0 5 21.544V23a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1h2v1a1 1 0 0 0 2 0v-1.456a11.3 11.3 0 0 0 5-9.115ZM12 17a1 1 0 0 0 0-2 1 1 0 0 0 0 2Z" />
    </svg>
  );
});

TirePressureWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TirePressureWarning.displayName = 'TirePressureWarning';

export default TirePressureWarning;
