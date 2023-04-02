import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pause = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M6.5 0A3.5 3.5 0 0 0 3 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 6.5 0ZM8 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0ZM17.5 0A3.5 3.5 0 0 0 14 3.5v17a3.5 3.5 0 0 0 7 0v-17A3.5 3.5 0 0 0 17.5 0ZM19 20.5a1.5 1.5 0 0 1-3 0v-17a1.5 1.5 0 0 1 3 0Z" />
  </svg>
));

Pause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pause.displayName = 'Pause';

export default Pause;
