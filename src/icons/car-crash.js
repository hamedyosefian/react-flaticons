import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CarCrash = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24.013 15.331 23.49 11.1a4.471 4.471 0 0 0-2.834-4.081L16.7 5.378a4.933 4.933 0 0 0-5.073.875L7.952 8.979a9.066 9.066 0 0 0-2.295 3.283s-.428.77-.445.811a3.441 3.441 0 0 0 .087 2.58 3.251 3.251 0 0 0 .726 1.06l-.033.082a2.5 2.5 0 0 0 4.6 1.964l4.8 1.925a2.5 2.5 0 0 0 4.686 1.738l.014-.035A3.007 3.007 0 0 0 23 20.5l.412-1.04a9.04 9.04 0 0 0 .601-4.129ZM12.89 7.8a2.977 2.977 0 0 1 3.066-.568l3.955 1.64a2.541 2.541 0 0 1 1.589 2.417c0 .012.419 3.388.419 3.388L10.028 9.924ZM8.131 18.183h-.01l.02.008Zm9.429 3.781h-.009l.017.006Zm3.582-2.2a1 1 0 0 1-1.288.564L7.635 15.419a1.009 1.009 0 0 1-.5-.561 1.484 1.484 0 0 1-.081-1s.421-.757.437-.8a7.236 7.236 0 0 1 .916-1.635l1.62.648-.325.8a1 1 0 0 0 1.854.752l.328-.81 6.648 2.657-.33.813a1 1 0 1 0 1.854.752l.333-.822 1.622.648a6.987 6.987 0 0 1-.455 1.851ZM4 11a1 1 0 0 1-1 1H1a1 1 0 0 1-.768-1.64l1.591-1.909a.7.7 0 0 0 0-.9L.232 5.64A1 1 0 0 1 1 4h2.3a.705.705 0 0 0 .7-.7V1A1 1 0 0 1 5.64.232l1.909 1.591a.7.7 0 0 0 .9 0L10.36.232A1 1 0 0 1 12 1v2a1 1 0 0 1-1.992.128l-.277.231a2.7 2.7 0 0 1-3.462 0L6 3.135V3.3A2.707 2.707 0 0 1 3.3 6h-.165l.224.269a2.7 2.7 0 0 1 0 3.462l-.231.277A1 1 0 0 1 4 11Z" />
  </svg>
));

CarCrash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CarCrash.displayName = 'CarCrash';

export default CarCrash;