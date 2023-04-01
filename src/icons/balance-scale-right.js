import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BalanceScaleRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m23.94 14.658-3.005-8.265a3.99 3.99 0 0 0-2.829-2.523l-5.105-1.221V1a1 1 0 0 0-2 0v1.17l-4.47-1.068a2.98 2.98 0 0 0-3.59 1.869L.063 10.649c-.042.112-.063.653-.063.653 0 2.506 1.871 4.567 4.26 4.692a4.474 4.474 0 0 0 3.338-1.229A4.52 4.52 0 0 0 9 11.501s-.022-.745-.067-.859l-2.927-7.61L11 4.226V22H5a1 1 0 0 0 0 2h14a1 1 0 0 0 0-2h-6V4.705l4.641 1.11c.198.047.384.124.554.224l-3.135 8.619c-.04.109-.06.644-.06.644C15 17.808 17 20 19.503 20a4.46 4.46 0 0 0 3.094-1.236A4.518 4.518 0 0 0 24 15.5s0-.538-.06-.842Zm-19.576-.662c-1.081-.057-1.986-.902-2.266-1.997H6.95c-.1.499-.35.954-.729 1.313a2.483 2.483 0 0 1-1.856.683Zm2.18-3.997H2.443l2.024-5.401 2.078 5.401ZM19.5 8.3l2.072 5.699h-4.145L19.499 8.3Zm-.136 9.695c-1.081-.057-1.986-.902-2.266-1.997h4.851c-.1.499-.35.954-.729 1.313a2.497 2.497 0 0 1-1.856.683Z" />
    </svg>
  );
});

BalanceScaleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BalanceScaleRight.displayName = 'BalanceScaleRight';

export default BalanceScaleRight;
