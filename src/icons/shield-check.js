import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ShieldCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18.581 2.14 12.316.051a1 1 0 0 0-.632 0L5.419 2.14A4.993 4.993 0 0 0 2 6.883V12c0 7.563 9.2 11.74 9.594 11.914a1 1 0 0 0 .812 0C12.8 23.74 22 19.563 22 12V6.883a4.993 4.993 0 0 0-3.419-4.743ZM20 12c0 5.455-6.319 9.033-8 9.889-1.683-.853-8-4.42-8-9.889V6.883a3 3 0 0 1 2.052-2.846L12 2.054l5.948 1.983A3 3 0 0 1 20 6.883Z" />
      <path d="m15.3 8.3-4.188 4.2-2.244-2.34a1 1 0 1 0-1.441 1.386l2.306 2.4a1.872 1.872 0 0 0 1.345.6h.033a1.873 1.873 0 0 0 1.335-.553l4.272-4.272A1 1 0 0 0 15.3 8.3Z" />
    </svg>
  );
});

ShieldCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldCheck.displayName = 'ShieldCheck';

export default ShieldCheck;
