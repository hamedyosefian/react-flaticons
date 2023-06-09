import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChatArrowDown = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="m22.293 12.7-1.086 1.086-3.585-3.586a3.073 3.073 0 0 0-4.242 0l-.173.173a1.023 1.023 0 0 1-1.414 0L6.72 5.294a1 1 0 1 0-1.414 1.414l5.072 5.073a3.072 3.072 0 0 0 4.242 0l.173-.173a1.023 1.023 0 0 1 1.414 0l3.586 3.592-1.086 1.086a1 1 0 0 0 .707 1.707H22.5a1.5 1.5 0 0 0 1.5-1.5V13.4a1 1 0 0 0-1.707-.7Z" />
      <path d="M23 21.976H5a3 3 0 0 1-3-3V1a1 1 0 0 0-2 0v17.976a5.006 5.006 0 0 0 5 5h18a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

ChatArrowDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChatArrowDown.displayName = 'ChatArrowDown';

export default ChatArrowDown;
