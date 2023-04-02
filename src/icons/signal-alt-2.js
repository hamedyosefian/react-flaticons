import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SignalAlt2 = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 6a3 3 0 0 0-3 3v12a3 3 0 0 0 6 0V9a3 3 0 0 0-3-3ZM21 0a3 3 0 0 0-3 3v18a3 3 0 0 0 6 0V3a3 3 0 0 0-3-3ZM3 12a3 3 0 0 0-3 3v6a3 3 0 0 0 6 0v-6a3 3 0 0 0-3-3Z" />
    </svg>
  );
});

SignalAlt2.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SignalAlt2.displayName = 'SignalAlt2';

export default SignalAlt2;
