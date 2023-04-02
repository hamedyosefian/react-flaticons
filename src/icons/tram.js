import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tram = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 9h-7V2.948A2 2 0 1 0 10 5v4H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5Zm3 5v2h-5v-5h2a3 3 0 0 1 3 3ZM9 11h6v5H9Zm-4 0h2v5H2v-2a3 3 0 0 1 3-3Zm14 11H5a3 3 0 0 1-3-3v-1h20v1a3 3 0 0 1-3 3ZM13 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Zm6.016-.276a1 1 0 0 1 .805-1.162l3-.546a1 1 0 0 1 .358 1.968l-3 .545a1 1 0 0 1-1.163-.805Zm-19 3.455a1 1 0 0 1 .805-1.163l4-.727a1 1 0 0 1 .358 1.968l-4 .727a1 1 0 0 1-1.163-.805Z" />
  </svg>
));

Tram.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tram.displayName = 'Tram';

export default Tram;
