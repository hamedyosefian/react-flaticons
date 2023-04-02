import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FolderTree = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M13 11h8c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3h-2.586L17 .586A1.986 1.986 0 0 0 15.586 0H13c-1.654 0-3 1.346-3 3v2H2V1a1 1 0 1 0-2 0v14c0 2.757 2.243 5 5 5h5v1c0 1.654 1.346 3 3 3h8c1.654 0 3-1.346 3-3v-3c0-1.654-1.346-3-3-3h-2.586L17 13.586A1.986 1.986 0 0 0 15.586 13H13c-1.654 0-3 1.346-3 3v2H5c-1.654 0-3-1.346-3-3V7h8v1c0 1.654 1.346 3 3 3Zm-1 5c0-.552.449-1 1-1h2.586L17 16.414c.378.378.88.586 1.414.586H21c.551 0 1 .448 1 1v3c0 .552-.449 1-1 1h-8c-.551 0-1-.448-1-1v-5Zm0-13c0-.552.449-1 1-1h2.586L17 3.414c.378.378.88.586 1.414.586H21c.551 0 1 .448 1 1v3c0 .552-.449 1-1 1h-8c-.551 0-1-.448-1-1V3Z" />
  </svg>
));

FolderTree.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderTree.displayName = 'FolderTree';

export default FolderTree;