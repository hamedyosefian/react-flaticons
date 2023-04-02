import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const AngleCircleLeft = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 12a12 12 0 1 0-12 12 12.013 12.013 0 0 0 12-12ZM2 12a10 10 0 1 1 10 10A10.011 10.011 0 0 1 2 12Z" />
    <path d="M8 12a2.993 2.993 0 0 1 .752-1.987c.291-.327.574-.637.777-.84L12.353 6.3a1 1 0 0 1 1.426 1.4l-2.829 2.88c-.187.188-.441.468-.7.759a1 1 0 0 0 0 1.323c.258.29.512.57.693.752l2.836 2.886a1 1 0 0 1-1.426 1.4l-2.829-2.878c-.2-.2-.48-.507-.769-.833A2.99 2.99 0 0 1 8 12Z" />
  </svg>
));

AngleCircleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleCircleLeft.displayName = 'AngleCircleLeft';

export default AngleCircleLeft;
