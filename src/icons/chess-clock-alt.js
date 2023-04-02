import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChessClockAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 5V3h1a1 1 0 0 0 0-2h-4a1 1 0 0 0 0 2h1v2H8a1 1 0 0 0 0-2H4a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0-5 5v7a5 5 0 0 0 3 4.576V23a1 1 0 0 0 2 0v-1h14v1a1 1 0 0 0 2 0v-1.424A5 5 0 0 0 24 17v-7a5.006 5.006 0 0 0-5-5Zm3 12a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Zm-5.5-8a4.5 4.5 0 1 0 4.5 4.5A4.505 4.505 0 0 0 16.5 9Zm0 7a2.5 2.5 0 0 1-2.288-1.5H16a1 1 0 0 0 0-2h-1.788A2.5 2.5 0 1 1 16.5 16Zm-9-7a4.5 4.5 0 0 0-3.19 7.669l.008.013.013.008A4.5 4.5 0 1 0 7.5 9Zm0 7a2.481 2.481 0 0 1-.909-.177l1.263-1.262a1 1 0 0 0-1.415-1.415l-1.262 1.263A2.5 2.5 0 1 1 7.5 16Z" />
  </svg>
));

ChessClockAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessClockAlt.displayName = 'ChessClockAlt';

export default ChessClockAlt;
