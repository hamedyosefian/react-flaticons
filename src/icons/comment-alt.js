import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2.9l4.451 3.763a1 1 0 0 0 1.292 0L17.1 20H20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 16a2 2 0 0 1-2 2h-2.9a2 2 0 0 0-1.291.473L12 21.69l-3.807-3.217A2 2 0 0 0 6.9 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
    <path d="M7 7h5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM17 9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2ZM17 13H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" />
  </svg>
));

CommentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentAlt.displayName = 'CommentAlt';

export default CommentAlt;
