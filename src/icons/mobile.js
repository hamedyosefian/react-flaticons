import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Mobile = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm3 19a3 3 0 0 1-3 3h-3v-1a1 1 0 0 0-2 0v1H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3zm-3-3a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h6a1 1 0 0 1 1 1zm-6-3a1 1 0 0 0 1-1v-1h2v1a1 1 0 0 0 2 0V8a3 3 0 0 0-6 0v4a1 1 0 0 0 1 1zm2-6a1 1 0 0 1 1 1v1h-2V8a1 1 0 0 1 1-1z" />
    </svg>
  );
});

Mobile.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mobile.displayName = 'Mobile';

export default Mobile;
