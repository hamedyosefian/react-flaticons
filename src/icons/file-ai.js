import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const FileAi = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7.515 5.008a.744.744 0 0 0-.687-.464.748.748 0 0 0-.695.477l-1.977 5.187a.625.625 0 0 0 .362.807.64.64 0 0 0 .222.041.626.626 0 0 0 .584-.4l.339-.889h2.311l.335.887a.625.625 0 1 0 1.17-.441ZM6.139 8.514l.684-1.8.679 1.8ZM11.232 4.544a.626.626 0 0 0-.625.625v5.262a.625.625 0 0 0 1.25 0V5.169a.625.625 0 0 0-.625-.625Z" />
    <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.536-1.464l2.656-2.658A4.968 4.968 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.122a2.975 2.975 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.925a3.016 3.016 0 0 1-.8 1.464Z" />
  </svg>
));

FileAi.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FileAi.displayName = 'FileAi';

export default FileAi;
