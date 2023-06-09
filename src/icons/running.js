import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Running = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 12a1 1 0 0 1-1 1h-2.87a3.016 3.016 0 0 1-2.569-1.452l-1.368-2.271-1.487 3.623a1 1 0 0 1-1.851-.758L13.555 8h-1.939l-2.064 5.032a1 1 0 0 0 .39 1.225l4.592 2.9A1 1 0 0 1 15 18v5a1 1 0 0 1-2 0v-4.449l-4.126-2.6A3 3 0 0 1 7.7 12.273L9.454 8H7.236a.994.994 0 0 0-.894.552l-1.447 2.895a1 1 0 0 1-1.79-.894l1.448-2.9A2.984 2.984 0 0 1 7.236 6h6.623a3.017 3.017 0 0 1 2.571 1.453l1.844 3.063a1.006 1.006 0 0 0 .856.484H22a1 1 0 0 1 1 1ZM7.875 16.814a1 1 0 0 0-1.3.557.994.994 0 0 1-.929.629H3a1 1 0 0 0 0 2h2.646a2.987 2.987 0 0 0 2.786-1.886 1 1 0 0 0-.557-1.3ZM15 5a2.5 2.5 0 1 0-2.5-2.5A2.5 2.5 0 0 0 15 5Z" />
    </svg>
  );
});

Running.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Running.displayName = 'Running';

export default Running;
