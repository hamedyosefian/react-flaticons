import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CommentArrowUp = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12.836.029a12.035 12.035 0 0 0-9.327 3.492 12.027 12.027 0 0 0-3.48 9.333C.47 19.208 6.082 24 13.083 24H19c2.757 0 5-2.243 5-5v-6.66C24 5.862 19.097.454 12.836.029ZM22 19c0 1.654-1.346 3-3 3h-5.917c-6.034 0-10.686-3.905-11.058-9.285a10.027 10.027 0 0 1 2.898-7.782 10.019 10.019 0 0 1 7.778-2.91C17.915 2.377 22 6.909 22 12.339v6.66Zm-5.293-9.588a.999.999 0 1 1-1.414 1.414L13 8.533V17a1 1 0 1 1-2 0V8.634l-2.293 2.293a.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414l2.636-2.636c.556-.555 1.292-.876 2.071-.876s1.578.282 2.172.876l2.535 2.536Z" />
    </svg>
  );
});

CommentArrowUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentArrowUp.displayName = 'CommentArrowUp';

export default CommentArrowUp;
