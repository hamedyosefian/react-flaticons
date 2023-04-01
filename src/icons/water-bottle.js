import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WaterBottle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M20 7.989A3.981 3.981 0 0 0 17.485 4.3L15 3.307V2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2v1.307L6.514 4.3A4 4 0 0 0 5.383 11a3.993 3.993 0 0 0 0 6A4.006 4.006 0 0 0 8 24h8a4.006 4.006 0 0 0 2.618-7 3.993 3.993 0 0 0 0-6A3.993 3.993 0 0 0 20 7.989ZM18 20a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h8a2 2 0 0 1 2 2Zm0-6a2 2 0 0 1-2 2H8a2 2 0 0 1 0-4h8a2 2 0 0 1 2 2ZM8 10a2 2 0 0 1-.743-3.841l3.114-1.246A1 1 0 0 0 11 3.984V2h2v1.984a1 1 0 0 0 .629.929l3.113 1.245A2 2 0 0 1 16 10Z" />
    </svg>
  );
});

WaterBottle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WaterBottle.displayName = 'WaterBottle';

export default WaterBottle;
