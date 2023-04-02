import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const WrenchSimple = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M15 24a1 1 0 0 1-1-1v-1.398c0-1.505.805-2.853 2.1-3.516a8.971 8.971 0 0 0 4.9-8.013 8.95 8.95 0 0 0-5.03-8.078L16 8c0 2.206-1.794 4-4 4s-4-1.794-4-4V2.012c-3.072 1.511-5 4.606-5 8.061a8.971 8.971 0 0 0 4.9 8.013c1.295.663 2.1 2.011 2.1 3.516V23a1 1 0 1 1-2 0v-1.398c0-.739-.397-1.421-1.012-1.736A10.963 10.963 0 0 1 1 10.074C1 5.852 3.355 2.068 7.146.2c.61-.3 1.321-.263 1.901.101.597.371.953 1.011.953 1.711V8c0 1.103.897 2 2 2s2-.897 2-2V2.012c0-.7.356-1.34.953-1.711a1.951 1.951 0 0 1 1.9-.101 10.94 10.94 0 0 1 6.146 9.873c0 4.146-2.295 7.898-5.988 9.792-.614.315-1.012.997-1.012 1.736v1.398a1 1 0 0 1-1 1Z" />
  </svg>
));

WrenchSimple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WrenchSimple.displayName = 'WrenchSimple';

export default WrenchSimple;
