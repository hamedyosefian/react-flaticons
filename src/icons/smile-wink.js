import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SmileWink = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.666 13.746a1 1 0 0 0-1.33-1.494A7.508 7.508 0 0 1 12 16a7.509 7.509 0 0 1-4.334-1.746 1 1 0 0 0-1.332 1.492A9.454 9.454 0 0 0 12 18a9.454 9.454 0 0 0 5.666-2.254ZM14 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm-3 0a1 1 0 0 0-1-1H7a1 1 0 0 0 0 2h3a1 1 0 0 0 1-1Z" />
    </svg>
  );
});

SmileWink.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SmileWink.displayName = 'SmileWink';

export default SmileWink;
