import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShipSide = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19.989 12h-1.336a15.71 15.71 0 0 0-4.328-5.864A5.03 5.03 0 0 0 11.146 5H8.818L8.11 2.315A3.105 3.105 0 1 0 2.1 3.9L2.394 5H1a1 1 0 0 0 0 2h10.146a3.029 3.029 0 0 1 1.913.687 13.411 13.411 0 0 1 3.386 4.318h-.82a3.037 3.037 0 0 0-1.692.5l-1.984 1.322A.994.994 0 0 1 11.4 14H1a1 1 0 0 0 0 2h10.4a2.992 2.992 0 0 0 1.664-.5l1.983-1.322a.948.948 0 0 1 .574-.168h4.369a2 2 0 0 1 1.7.935 1.949 1.949 0 0 1 .123 1.912A9.03 9.03 0 0 1 13.668 22H1a1 1 0 0 0 0 2h12.668a11.04 11.04 0 0 0 9.948-6.3 4 4 0 0 0-3.627-5.7ZM4.037 3.388a1.107 1.107 0 0 1 2.14-.564L6.75 5H4.462ZM0 10a1 1 0 0 1 1-1h9a1 1 0 0 1 0 2H1a1 1 0 0 1-1-1Zm4 10a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Zm4 0a1 1 0 1 1 1-1 1 1 0 0 1-1 1Z" />
    </svg>
  );
});

ShipSide.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShipSide.displayName = 'ShipSide';

export default ShipSide;
