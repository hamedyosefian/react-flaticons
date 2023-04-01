import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TruckRamp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M20 16V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v11.279L.684 22.051a1 1 0 0 0 .632 1.9l14.807-4.936A4.017 4.017 0 0 0 20 24c5.274-.138 5.274-7.863 0-8Zm0 6a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
});

TruckRamp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TruckRamp.displayName = 'TruckRamp';

export default TruckRamp;
