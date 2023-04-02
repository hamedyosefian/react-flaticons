import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CommentAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 0H4a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h2.9l4.451 3.763a1 1 0 0 0 1.292 0L17.1 20H20a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4Zm2 16a2 2 0 0 1-2 2h-2.9a2 2 0 0 0-1.291.473L12 21.69l-3.807-3.217A2 2 0 0 0 6.9 18H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2Z" />
      <path d="M7 7h5a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM17 9H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2ZM17 13H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

CommentAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentAlt.displayName = 'CommentAlt';

export default CommentAlt;
