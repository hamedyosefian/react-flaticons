import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Settings = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M12 8a4 4 0 1 0 4 4 4 4 0 0 0-4-4Zm0 6a2 2 0 1 1 2-2 2 2 0 0 1-2 2Z" />
    <path d="m21.294 13.9-.444-.256a9.1 9.1 0 0 0 0-3.29l.444-.256a3 3 0 1 0-3-5.2l-.445.257A8.977 8.977 0 0 0 15 3.513V3a3 3 0 0 0-6 0v.513a8.977 8.977 0 0 0-2.848 1.646L5.705 4.9a3 3 0 0 0-3 5.2l.444.256a9.1 9.1 0 0 0 0 3.29l-.444.256a3 3 0 1 0 3 5.2l.445-.257A8.977 8.977 0 0 0 9 20.487V21a3 3 0 0 0 6 0v-.513a8.977 8.977 0 0 0 2.848-1.646l.447.258a3 3 0 0 0 3-5.2Zm-2.548-3.776a7.048 7.048 0 0 1 0 3.75 1 1 0 0 0 .464 1.133l1.084.626a1 1 0 0 1-1 1.733l-1.086-.628a1 1 0 0 0-1.215.165 6.984 6.984 0 0 1-3.243 1.875 1 1 0 0 0-.751.969V21a1 1 0 0 1-2 0v-1.252a1 1 0 0 0-.751-.969A6.984 6.984 0 0 1 7.006 16.9a1 1 0 0 0-1.215-.165l-1.084.627a1 1 0 1 1-1-1.732l1.084-.626a1 1 0 0 0 .464-1.133 7.048 7.048 0 0 1 0-3.75 1 1 0 0 0-.465-1.129l-1.084-.626a1 1 0 0 1 1-1.733l1.086.628A1 1 0 0 0 7.006 7.1a6.984 6.984 0 0 1 3.243-1.875A1 1 0 0 0 11 4.252V3a1 1 0 0 1 2 0v1.252a1 1 0 0 0 .751.969A6.984 6.984 0 0 1 16.994 7.1a1 1 0 0 0 1.215.165l1.084-.627a1 1 0 1 1 1 1.732l-1.084.626a1 1 0 0 0-.463 1.129Z" />
  </svg>
));

Settings.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Settings.displayName = 'Settings';

export default Settings;