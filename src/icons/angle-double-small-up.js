import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AngleDoubleSmallUp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M6 18a1 1 0 0 1-.705-1.71l6.001-5.964a1 1 0 0 1 1.41 0l5.999 5.964a.999.999 0 1 1-1.41 1.418l-5.294-5.263-5.296 5.264A.997.997 0 0 1 6 18Zm12.712-6.56a.999.999 0 0 0-.01-1.414l-3.925-3.875C14.036 5.409 13.049 5 12 5s-2.036.409-2.772 1.146l-3.93 3.88a1 1 0 1 0 1.404 1.423l3.935-3.884c.729-.729 1.993-.733 2.731.004l3.93 3.88a.996.996 0 0 0 1.414-.008Z" />
  </svg>
));

AngleDoubleSmallUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleDoubleSmallUp.displayName = 'AngleDoubleSmallUp';

export default AngleDoubleSmallUp;
