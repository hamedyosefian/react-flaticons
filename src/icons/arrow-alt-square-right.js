import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltSquareRight = forwardRef(
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
      <path d="M19 0H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm3 19c0 1.654-1.346 3-3 3H5c-1.654 0-3-1.346-3-3V5c0-1.654 1.346-3 3-3h14c1.654 0 3 1.346 3 3v14Zm-4.232-7.552a.773.773 0 0 1 0 1.104l-4.418 4.361c-.498.492-1.35.143-1.35-.552V13H7a1 1 0 1 1 0-2h5V7.639c0-.695.852-1.044 1.35-.552l4.418 4.361Z" />
    </svg>
  ),
);

ArrowAltSquareRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltSquareRight.displayName = 'ArrowAltSquareRight';

export default ArrowAltSquareRight;
