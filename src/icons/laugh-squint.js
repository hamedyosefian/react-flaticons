import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LaughSquint = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17.555 7.832 15.8 9l1.752 1.168a1 1 0 1 1-1.11 1.664l-3-2a1.007 1.007 0 0 1 0-1.664l3-2a1 1 0 0 1 1.11 1.664Zm-10 4 3-2a1.007 1.007 0 0 0 0-1.664l-3-2a1 1 0 1 0-1.11 1.664L8.2 9l-1.755 1.168a1 1 0 0 0 1.11 1.664ZM15.99 14H8.009a.994.994 0 0 0-.955 1.3 5.178 5.178 0 0 0 9.9-.007A.994.994 0 0 0 15.99 14ZM24 12a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Z" />
    </svg>
  );
});

LaughSquint.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LaughSquint.displayName = 'LaughSquint';

export default LaughSquint;
