import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TextCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11.107 14.447a1 1 0 1 0 1.789-.894l-5.5-11a1 1 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 11h5.764ZM4.619 9 6.5 5.236 8.383 9Z" />
      <path d="M23.707 11.293a1 1 0 0 0-1.414 0L13 20.586l-4.293-4.293a1 1 0 1 0-1.414 1.414l5 5a1 1 0 0 0 1.414 0l10-10a1 1 0 0 0 0-1.414Z" />
    </svg>
  );
});

TextCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextCheck.displayName = 'TextCheck';

export default TextCheck;
