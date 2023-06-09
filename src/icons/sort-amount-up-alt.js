import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SortAmountUpAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 8a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h13a1 1 0 0 1 1 1Zm-4 4H10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Zm-3 5h-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2Zm-3 5h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2ZM9.121 3.293 6.413.584a2.006 2.006 0 0 0-2.828 0L.878 3.293a.999.999 0 1 0 1.414 1.414L4 2.999V23a1 1 0 1 0 2 0V2.999l1.707 1.708a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
    </svg>
  );
});

SortAmountUpAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAmountUpAlt.displayName = 'SortAmountUpAlt';

export default SortAmountUpAlt;
