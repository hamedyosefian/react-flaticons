import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Surprise = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24A12.013 12.013 0 0 1 0 12C.6-3.9 23.4-3.894 24 12a12.013 12.013 0 0 1-12 12Zm0-22A10.011 10.011 0 0 0 2 12c.5 13.248 19.5 13.244 20 0A10.011 10.011 0 0 0 12 2Zm0 12a3 3 0 0 0 0 6 3 3 0 0 0 0-6ZM8.5 8a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm7 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Z" />
    </svg>
  );
});

Surprise.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Surprise.displayName = 'Surprise';

export default Surprise;
