import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bread = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M6.028 24c-4.979-.021-7.075-4.188-5.535-9.179C2.343 7.43 15.015-4.362 22.359 1.641 28.834 9.569 14.584 24.3 6.028 24ZM17.969 2C11.4 2.25 4.239 9.3 2.411 15.384c-.721 2.451-.492 4.426.644 5.561 6.8 5.332 23.222-11.089 17.89-17.89A4.072 4.072 0 0 0 17.969 2ZM15 14a4.784 4.784 0 0 0-5-5 1 1 0 0 0 0 2 2.783 2.783 0 0 1 3 3 1 1 0 0 0 2 0Zm4-4a4.784 4.784 0 0 0-5-5 1 1 0 0 0 0 2 2.783 2.783 0 0 1 3 3 1 1 0 0 0 2 0Zm-8 8a4.784 4.784 0 0 0-5-5 1 1 0 0 0 0 2 2.783 2.783 0 0 1 3 3 1 1 0 0 0 2 0Z" />
  </svg>
));

Bread.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bread.displayName = 'Bread';

export default Bread;
