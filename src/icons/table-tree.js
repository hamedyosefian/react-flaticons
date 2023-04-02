import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TableTree = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 2H5C2.243 2 0 4.243 0 7v10c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5ZM5 4h14c1.654 0 3 1.346 3 3H2c0-1.654 1.346-3 3-3Zm14 16H5c-1.654 0-3-1.346-3-3V9h3v7c0 1.103.897 2 2 2h4a1 1 0 1 0 0-2H7v-2h2a1 1 0 1 0 0-2H7V9h15v8c0 1.654-1.346 3-3 3Zm-1-3a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm-3-3h-2a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2Z" />
  </svg>
));

TableTree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TableTree.displayName = 'TableTree';

export default TableTree;
