import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Resize = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 0h-8a5.006 5.006 0 0 0-5 5v6H5a5.006 5.006 0 0 0-5 5v3a5.006 5.006 0 0 0 5 5h3a5.006 5.006 0 0 0 5-5v-1h6a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm-8 16a3 3 0 0 1-3-3 3 3 0 0 1 3 3zm0 3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1a5.006 5.006 0 0 0 5 5zm11-6a3 3 0 0 1-3 3h-6a4.969 4.969 0 0 0-.833-2.753L18 7.414V10a1 1 0 0 0 2 0V7a3 3 0 0 0-3-3h-3a1 1 0 0 0 0 2h2.586l-5.833 5.833A4.969 4.969 0 0 0 8 11V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3z" />
    </svg>
  );
});

Resize.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Resize.displayName = 'Resize';

export default Resize;
