import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Z = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 24H5.912a3.862 3.862 0 0 1-3.723-2.698c-.537-1.64.016-3.358 1.407-4.379L19.222 5.464c.827-.606.897-1.505.688-2.144-.209-.638-.797-1.32-1.822-1.32H3C1.692 1.994 1.693.005 3 0h15.088a3.862 3.862 0 0 1 3.723 2.698c.537 1.64-.016 3.358-1.407 4.379L4.778 18.536c-.827.606-.897 1.505-.688 2.144.209.638.797 1.32 1.822 1.32H21c1.308.006 1.307 1.995 0 2Z" />
    </svg>
  );
});

Z.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Z.displayName = 'Z';

export default Z;
