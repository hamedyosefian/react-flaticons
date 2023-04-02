import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentArrowUpRight = forwardRef(
  ({ color = 'currentColor', size = '20px', ...rest }, ref) => (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      {...rest}
    >
      <path d="M17 10v4a1 1 0 1 1-2 0v-3.559l-6.294 6.268a1 1 0 1 1-1.412-1.416l6.318-6.292H10a1 1 0 1 1 0-2h4c1.654 0 3 1.346 3 3Zm7 2.34V19c0 2.757-2.243 5-5 5h-5.917C6.082 24 .471 19.208.029 12.854a12.027 12.027 0 0 1 3.48-9.333A12.043 12.043 0 0 1 12.836.029C19.097.454 24 5.862 24 12.34Zm-2 0c0-5.431-4.085-9.962-9.299-10.316a10.015 10.015 0 0 0-7.778 2.91 10.022 10.022 0 0 0-2.898 7.782c.372 5.38 5.023 9.285 11.058 9.285H19c1.654 0 3-1.346 3-3v-6.66Z" />
    </svg>
  ),
);

CommentArrowUpRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentArrowUpRight.displayName = 'CommentArrowUpRight';

export default CommentArrowUpRight;
