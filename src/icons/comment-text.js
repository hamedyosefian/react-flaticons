import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CommentText = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12.836.028a12.036 12.036 0 0 0-9.327 3.493A12.024 12.024 0 0 0 .03 12.854C.47 19.208 6.082 24 13.084 24h5.917c2.757 0 5-2.243 5-5v-6.66C24 5.861 19.096.454 12.836.028ZM22 19c0 1.654-1.346 3-3 3h-5.917c-6.035 0-10.686-3.904-11.059-9.284a10.02 10.02 0 0 1 2.899-7.781A10.016 10.016 0 0 1 12.7 2.024c5.215.354 9.299 4.885 9.299 10.315v6.66Z" />
      <path d="M15 7H9c-1.654 0-3 1.346-3 3a1 1 0 1 0 2 0 1 1 0 0 1 1-1h2v8h-1a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2h-1V9h2c.551 0 1 .448 1 1a1 1 0 0 0 2 0c0-1.654-1.346-3-3-3Z" />
    </svg>
  );
});

CommentText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentText.displayName = 'CommentText';

export default CommentText;
