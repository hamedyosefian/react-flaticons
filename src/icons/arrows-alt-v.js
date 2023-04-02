import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowsAltV = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m16.913 19.35-4.361 4.418a.773.773 0 0 1-1.104 0L7.087 19.35c-.492-.498-.143-1.35.552-1.35H11V6H7.639c-.695 0-1.044-.852-.552-1.35L11.448.232a.773.773 0 0 1 1.104 0l4.361 4.418c.492.498.143 1.35-.552 1.35H13v12h3.361c.695 0 1.044.852.552 1.35Z" />
  </svg>
));

ArrowsAltV.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsAltV.displayName = 'ArrowsAltV';

export default ArrowsAltV;