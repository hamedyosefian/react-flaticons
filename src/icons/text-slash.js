import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const TextSlash = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M4 8v1a1 1 0 0 1-2 0V8a1 1 0 0 1 2 0Zm19.707 15.707a.997.997 0 0 1-1.414 0l-22-22A.999.999 0 1 1 1.707.293l2.546 2.546A4.98 4.98 0 0 1 7 2h10c2.757 0 5 2.243 5 5v2a1 1 0 0 1-2 0V7c0-1.654-1.346-3-3-3h-4v7.586l10.707 10.707a.999.999 0 0 1 0 1.414ZM5.716 4.302 11 9.586V4H7c-.45 0-.885.112-1.284.302ZM12 16a1 1 0 0 0-1 1v4a1 1 0 0 0 2 0v-4a1 1 0 0 0-1-1Z" />
    </svg>
  );
});

TextSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TextSlash.displayName = 'TextSlash';

export default TextSlash;
