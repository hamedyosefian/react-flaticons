import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Film = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5zm1 11h2v2h-2zm0-2V7h2v2zm-2 2H6V2h12zM4 13H2v-2h2zm0-4H2V7h2zm-2 6h2v2H2zm4-2h12v9H6zm14 2h2v2h-2zm2-10h-2V2.184A3 3 0 0 1 22 5zM4 2.184V5H2a3 3 0 0 1 2-2.816zM2 19h2v2.816A3 3 0 0 1 2 19zm18 2.816V19h2a3 3 0 0 1-2 2.816z" />
  </svg>
));

Film.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Film.displayName = 'Film';

export default Film;