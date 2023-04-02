import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CodeFork = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 4c0-2.206-1.794-4-4-4s-4 1.794-4 4a4.007 4.007 0 0 0 3 3.873V8c0 1.654-1.346 3-3 3h-1a3.99 3.99 0 0 0-3 1.357A3.99 3.99 0 0 0 9 11H8c-1.654 0-3-1.346-3-3v-.127A4.007 4.007 0 0 0 8 4c0-2.206-1.794-4-4-4S0 1.794 0 4a4.007 4.007 0 0 0 3 3.873V8c0 2.757 2.243 5 5 5h1c1.103 0 2 .897 2 2v1.127A4.007 4.007 0 0 0 8 20c0 2.206 1.794 4 4 4s4-1.794 4-4a4.007 4.007 0 0 0-3-3.873V15c0-1.103.897-2 2-2h1c2.757 0 5-2.243 5-5v-.127A4.007 4.007 0 0 0 24 4ZM2 4c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm12 16c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm6-14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z" />
  </svg>
));

CodeFork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeFork.displayName = 'CodeFork';

export default CodeFork;
