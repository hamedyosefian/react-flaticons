import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const QuoteRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8 4H4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 2 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2ZM22 4h-4a4 4 0 0 0-4 4v4a2 2 0 0 0 2 2h5.91A6.006 6.006 0 0 1 16 19a1 1 0 0 0 0 2 8.009 8.009 0 0 0 8-8V6a2 2 0 0 0-2-2Z" />
    </svg>
  );
});

QuoteRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

QuoteRight.displayName = 'QuoteRight';

export default QuoteRight;
