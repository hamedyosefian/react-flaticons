import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltToBottom = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12.552 21.768a.774.774 0 0 1-1.104 0L7.087 17.35c-.492-.498-.143-1.35.552-1.35H11V1a1 1 0 1 1 2 0v15h3.361c.695 0 1.044.852.552 1.35l-4.361 4.418ZM20 22H4a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Z" />
    </svg>
  );
});

ArrowAltToBottom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltToBottom.displayName = 'ArrowAltToBottom';

export default ArrowAltToBottom;
