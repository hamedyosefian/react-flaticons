import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Map = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m20.68 1.167-.021-.007-2.715-.9a5.017 5.017 0 0 0-2.9-.079L9.468 1.8a3.025 3.025 0 0 1-2.048-.18l-.5-.232A5 5 0 0 0 0 6v12.075a5.013 5.013 0 0 0 3.6 4.8l2.869.9A4.991 4.991 0 0 0 7.964 24a4.592 4.592 0 0 0 1.336-.181l5.8-1.6a3 3 0 0 1 1.617.013l2.343.676A4 4 0 0 0 24 19.021V5.876a5.01 5.01 0 0 0-3.32-4.709ZM4.176 20.959A3.013 3.013 0 0 1 2 18.075V6a2.953 2.953 0 0 1 1.336-2.5A3 3 0 0 1 5 3a2.9 2.9 0 0 1 1.112.222s.745.319.887.37v18.25ZM9 21.827V3.879a5.105 5.105 0 0 0 1.006-.155L15 2.273V20.2Zm13-2.806a2 2 0 0 1-2.433 1.954L17 20.252V2.075l3.018.979A3.006 3.006 0 0 1 22 5.876Z" />
  </svg>
));

Map.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Map.displayName = 'Map';

export default Map;