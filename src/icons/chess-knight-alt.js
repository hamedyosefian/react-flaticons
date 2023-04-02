import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChessKnightAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20 18.172V8.5c0-.079-.1-7.963-8.536-8.5a1.983 1.983 0 0 0-2.053 1.385 5.29 5.29 0 0 1-3.5 3.846A3.018 3.018 0 0 0 4 8.025 1.977 1.977 0 0 0 5.975 10h4.247a5.681 5.681 0 0 1-3.181 3.416A5.075 5.075 0 0 0 4 18v.17A3 3 0 0 0 5 24h14a3 3 0 0 0 1-5.828ZM7.861 15.24a7.769 7.769 0 0 0 4.625-6.076A1 1 0 0 0 11.5 8L6 8.025a1.025 1.025 0 0 1 .663-.94A7.333 7.333 0 0 0 11.339 2 6.607 6.607 0 0 1 18 8.5V18H6a3.036 3.036 0 0 1 1.861-2.76ZM19 22H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z" />
  </svg>
));

ChessKnightAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessKnightAlt.displayName = 'ChessKnightAlt';

export default ChessKnightAlt;
