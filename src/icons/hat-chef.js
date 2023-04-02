import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HatChef = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.836 4.705c-.763-3.113-5.05-4.759-7.676-3.084a6.16 6.16 0 0 0-8.32 0C1.409-1.658-3.587 7.73 3.326 10.713a.934.934 0 0 1 .674.851V19.5A4.5 4.5 0 0 0 8.5 24h7a4.5 4.5 0 0 0 4.5-4.5v-7.936a.934.934 0 0 1 .674-.851 5.017 5.017 0 0 0 3.162-6.008ZM18 19.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.588 2.588 0 0 1 6 19h12Zm2-10.672a2.912 2.912 0 0 0-2 2.736V17H6v-5.436a2.912 2.912 0 0 0-2-2.736A3.027 3.027 0 0 1 2.1 5.2c.586-2.1 3.729-2.979 5.183-1.5a1.006 1.006 0 0 0 1.543-.14c1.247-2.08 5.095-2.08 6.342 0a1.007 1.007 0 0 0 1.543.14 3.168 3.168 0 0 1 2.9-.641A3.013 3.013 0 0 1 20 8.828Z" />
  </svg>
));

HatChef.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HatChef.displayName = 'HatChef';

export default HatChef;
