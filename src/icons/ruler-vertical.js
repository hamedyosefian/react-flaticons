import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RulerVertical = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M13 0h-2C8.794 0 7 1.794 7 4v16c0 2.206 1.794 4 4 4h2c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4Zm0 22h-2c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v1h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v1c0 1.103-.897 2-2 2Z" />
  </svg>
));

RulerVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RulerVertical.displayName = 'RulerVertical';

export default RulerVertical;
