import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChessBoard = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 14v4h-4v4h-4v-4h-4v4H6v-4H2v-4h4v-4H2V6h4V2h4v4h4V2h4v4h4v4h-4v4Zm-12-4H6V6h4Zm4 0V6h4v4Zm-4 4v4H6v-4Zm4 0h4v4h-4Zm-4-4h4v4h-4Z" />
  </svg>
));

ChessBoard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessBoard.displayName = 'ChessBoard';

export default ChessBoard;