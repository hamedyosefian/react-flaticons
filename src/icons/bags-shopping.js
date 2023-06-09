import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BagsShopping = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 10h-1V8c0-2.206-1.794-4-4-4h-1.028c-.25-2.247-2.16-4-4.472-4S5.277 1.753 5.028 4H4C1.794 4 0 5.794 0 8v6c0 2.757 2.243 5 5 5h1c0 2.757 2.243 5 5 5h8c2.757 0 5-2.243 5-5v-5c0-2.206-1.794-4-4-4ZM9.5 2c1.207 0 2.217.86 2.45 2h-4.9c.232-1.14 1.242-2 2.45-2ZM5 17c-1.654 0-3-1.346-3-3V8c0-1.103.897-2 2-2h1v2a1 1 0 1 0 2 0V6h5v2a1 1 0 1 0 2 0V6h1c1.103 0 2 .897 2 2v2h-7c-2.206 0-4 1.794-4 4v3H5Zm17 2c0 1.654-1.346 3-3 3h-8c-1.654 0-3-1.346-3-3v-5c0-1.103.897-2 2-2h10c1.103 0 2 .897 2 2v5Zm-3-4v1c0 2.206-1.794 4-4 4s-4-1.794-4-4v-1a1 1 0 1 1 2 0v1c0 1.103.897 2 2 2s2-.897 2-2v-1a1 1 0 1 1 2 0Z" />
    </svg>
  );
});

BagsShopping.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BagsShopping.displayName = 'BagsShopping';

export default BagsShopping;
