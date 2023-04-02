import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GrinStars = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.245 20 0a10.011 10.011 0 0 1-10 10Zm5.842-6.458A6.827 6.827 0 0 1 12 19a6.836 6.836 0 0 1-5.848-3.458A1 1 0 0 1 7.2 14.024 15.4 15.4 0 0 0 12 15a15.4 15.4 0 0 0 4.792-.976 1 1 0 0 1 1.05 1.518ZM5.736 12.754a.715.715 0 0 1-.27-.822l.519-1.606-1.366-1A.734.734 0 0 1 5.052 8h1.681l.511-1.593a.738.738 0 0 1 1.4 0L9.154 8h1.681a.734.734 0 0 1 .433 1.327l-1.366 1 .519 1.606a.735.735 0 0 1-1.134.818l-1.343-.988-1.344.987a.728.728 0 0 1-.864.004Zm13.551-3.427-1.366 1 .519 1.606a.735.735 0 0 1-1.134.818l-1.343-.988-1.344.988a.728.728 0 0 1-.864 0 .715.715 0 0 1-.27-.822l.52-1.606-1.367-1A.734.734 0 0 1 13.071 8h1.682l.511-1.593a.737.737 0 0 1 1.4 0L17.173 8h1.681a.734.734 0 0 1 .433 1.327Z" />
  </svg>
));

GrinStars.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinStars.displayName = 'GrinStars';

export default GrinStars;
