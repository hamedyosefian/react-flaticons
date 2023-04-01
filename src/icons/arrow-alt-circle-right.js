import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltCircleRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm0 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10Zm5.768-10.552a.773.773 0 0 1 0 1.104l-4.418 4.361c-.498.492-1.35.143-1.35-.552V13H7a1 1 0 0 1 0-2h5V7.639c0-.695.852-1.044 1.35-.552l4.418 4.361Z" />
    </svg>
  );
});

ArrowAltCircleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltCircleRight.displayName = 'ArrowAltCircleRight';

export default ArrowAltCircleRight;
