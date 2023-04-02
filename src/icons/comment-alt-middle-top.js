import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CommentAltMiddleTop = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 24H4c-2.206 0-4-1.794-4-4V8c0-2.206 1.794-4 4-4h2.923L10.691.826c.737-.656 1.88-.655 2.637.017L17.147 4H20c2.206 0 4 1.794 4 4v12c0 2.206-1.794 4-4 4ZM4 6c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2h-3.212c-.232 0-.458-.081-.637-.229l-4.124-3.41-4.095 3.404A1.002 1.002 0 0 1 7.287 6H3.999Z" />
    </svg>
  );
});

CommentAltMiddleTop.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentAltMiddleTop.displayName = 'CommentAltMiddleTop';

export default CommentAltMiddleTop;
