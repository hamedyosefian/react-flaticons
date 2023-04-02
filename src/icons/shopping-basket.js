import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ShoppingBasket = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.297 9.034A3 3 0 0 0 21.03 8h-.086C20.445 3.506 16.625 0 12 0S3.555 3.506 3.056 8H3a3 3 0 0 0-2.97 3.425l1.061 7.424C1.511 21.786 4.065 24 7.031 24H17c2.966 0 5.52-2.215 5.94-5.151l1.061-7.424a3.002 3.002 0 0 0-.704-2.391ZM12 2c3.52 0 6.441 2.613 6.928 6H5.072C5.559 4.613 8.48 2 12 2Zm10.021 9.142-1.061 7.424A4.02 4.02 0 0 1 17 22.001H7.031a4.019 4.019 0 0 1-3.96-3.435L2.01 11.142a.99.99 0 0 1 .234-.797.984.984 0 0 1 .755-.345H21.03c.294 0 .562.122.756.345a.99.99 0 0 1 .234.797ZM13 13v6a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0Zm5 0v6a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0ZM8 13v6a1 1 0 1 1-2 0v-6a1 1 0 1 1 2 0Z" />
    </svg>
  );
});

ShoppingBasket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShoppingBasket.displayName = 'ShoppingBasket';

export default ShoppingBasket;
