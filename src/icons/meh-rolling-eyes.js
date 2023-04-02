import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MehRollingEyes = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M16.5 6c-4.612.129-4.611 7.872 0 8 4.612-.129 4.611-7.872 0-8Zm0 6c-1.114.045-1.833-1.743-1.352-2.85a1.514 1.514 0 0 0 2.7 0c.485 1.107-.234 2.895-1.348 2.85ZM11 10c-.128-5.278-6.872-5.277-7 0 .128 5.278 6.872 5.277 7 0Zm-5 0a2.479 2.479 0 0 1 .148-.85 1.514 1.514 0 0 0 2.7 0C9.772 11.956 6.265 13.4 6 10Zm11 7a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1ZM12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.894 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.244 20 0a10.011 10.011 0 0 1-10 10Z" />
  </svg>
));

MehRollingEyes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MehRollingEyes.displayName = 'MehRollingEyes';

export default MehRollingEyes;
