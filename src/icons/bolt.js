import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bolt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M11.24 24a2.262 2.262 0 0 1-.948-.212 2.18 2.18 0 0 1-1.2-2.622L10.653 16H6.975A3 3 0 0 1 4.1 12.131l3.024-10A2.983 2.983 0 0 1 10 0h3.693a2.6 2.6 0 0 1 2.433 3.511L14.443 8H17a3 3 0 0 1 2.483 4.684l-6.4 10.3A2.2 2.2 0 0 1 11.24 24ZM10 2a1 1 0 0 0-.958.71l-3.024 10A1 1 0 0 0 6.975 14H12a1 1 0 0 1 .957 1.29l-1.947 6.442a.183.183 0 0 0 .121.241.188.188 0 0 0 .269-.073l6.4-10.3a1 1 0 0 0 .078-1.063A.979.979 0 0 0 17 10h-4a1 1 0 0 1-.937-1.351l2.19-5.84a.6.6 0 0 0-.56-.809Z" />
  </svg>
));

Bolt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bolt.displayName = 'Bolt';

export default Bolt;