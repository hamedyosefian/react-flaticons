import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BookArrowRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.133 12.093-1.614 1.614c-.929.921-2.335-.486-1.414-1.414L21.398 11H13c-1.308-.006-1.307-1.995 0-2h8.398l-1.293-1.293c-.921-.928.486-2.335 1.414-1.414l1.614 1.614a2.965 2.965 0 0 1 0 4.187ZM20 16v3c0 2.757-2.243 5-5 5H4c-2.206 0-4-1.794-4-4V5c0-2.757 2.243-5 5-5h10a5 5 0 0 1 4.843 3.75 1 1 0 0 1-1.938.499A2.997 2.997 0 0 0 15 1.999H6v14h12c.006-1.308 1.995-1.307 2 0ZM2 5v11.556A3.959 3.959 0 0 1 4 16V2.184A2.996 2.996 0 0 0 2 5Zm16 14v-1H4c-2.629.047-2.627 3.953 0 4h11c1.654 0 3-1.346 3-3Z" />
    </svg>
  );
});

BookArrowRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BookArrowRight.displayName = 'BookArrowRight';

export default BookArrowRight;
