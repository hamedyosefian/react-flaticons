import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudMoonRain = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M18.986 24a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-4 0a1 1 0 0 1-1-1v-3a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1ZM8 22.487a1 1 0 0 1-.6-.2 3.464 3.464 0 0 1-1.281-1.882 3.5 3.5 0 0 1 2-4.143 6.381 6.381 0 0 1 .057-2.732 6 6 0 0 1 11.367-.855c.136.326.287.36.588.427l.175.042a5.041 5.041 0 0 1 2.442 8.156 1 1 0 1 1-1.5-1.328 2.911 2.911 0 0 0 .664-1.272 3.023 3.023 0 0 0-2.133-3.621 2.643 2.643 0 0 1-2.079-1.633 4 4 0 0 0-7.613 2.354 2.016 2.016 0 0 1-1.181 2.3 1.494 1.494 0 0 0-.849 1.8 1.445 1.445 0 0 0 .54.786 1 1 0 0 1-.6 1.8ZM4.5 17a1 1 0 0 1-.577-.184A9.3 9.3 0 0 1 .051 8.272 9.349 9.349 0 0 1 7.779.117a10.038 10.038 0 0 1 3.875.159A2.122 2.122 0 0 1 12.6 3.87a8.025 8.025 0 0 0-2.539 4.283 1 1 0 0 1-1.976-.306 9.784 9.784 0 0 1 3.146-5.435.093.093 0 0 0 .024-.1.116.116 0 0 0-.086-.092 8.092 8.092 0 0 0-3.073-.122 7.321 7.321 0 0 0-6.056 6.38 7.205 7.205 0 0 0 3.033 6.706A1 1 0 0 1 4.5 17ZM19 3a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm-4 3a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm6 3a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
  </svg>
));

CloudMoonRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudMoonRain.displayName = 'CloudMoonRain';

export default CloudMoonRain;
