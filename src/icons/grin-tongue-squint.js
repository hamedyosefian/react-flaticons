import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GrinTongueSquint = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 14H8a1 1 0 0 0 0 2h1v.6c.133 4.495 5.869 4.49 6 0V16h1a1 1 0 0 0 0-2Zm-3 2.6c-.062 1.839-1.938 1.837-2 0V16h2Zm4.555-8.768L15.8 9l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.007 1.007 0 0 1 0-1.664l3-2a1 1 0 0 1 1.11 1.664ZM7 12a1 1 0 0 1-.556-1.832L8.2 9 6.445 7.832a1 1 0 1 1 1.11-1.664l3 2a1.007 1.007 0 0 1 0 1.664l-3 2A1 1 0 0 1 7 12Zm5-12A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10Z" />
    </svg>
  );
});

GrinTongueSquint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinTongueSquint.displayName = 'GrinTongueSquint';

export default GrinTongueSquint;
