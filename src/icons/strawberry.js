import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Strawberry = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 8c-1.855 0-3.5-.013-4.791-.795l3.5-3.5a1 1 0 1 0-1.414-1.414L16.806 5.78C16.079 4.544 16 2.974 16 1a1 1 0 0 0-1-1c-1.672.08-.843 2.919-.822 4.122C7.343.205 2.908 7.4.838 13.455c-2.96 8.773 2.132 12.344 9.707 9.706 6.044-2.065 13.238-6.493 9.344-13.319C21.011 9.827 23.9 10.691 24 9a1 1 0 0 0-1-1Zm-5.541 8.985c-2.5 2.658-11.506 6.937-14.508 4.064C-.221 17.764 5.414 4.764 10.38 5c1.7 0 3.566 1.012 5.589 3.035 3.465 3.465 3.966 6.474 1.49 8.95Zm-3.842-6.6a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm3 3a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm-8-1a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm-2 5a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002Zm5-2a1.308 1.308 0 0 1 0 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635 5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85-.002ZM8.015 9.35a5.4 5.4 0 0 1 .752-1.967 1.308 1.308 0 0 1 1.85 1.85 5.4 5.4 0 0 1-1.967.752.526.526 0 0 1-.635-.635Z" />
    </svg>
  );
});

Strawberry.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Strawberry.displayName = 'Strawberry';

export default Strawberry;
