import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SortAmountDownAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 1a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h13a1 1 0 0 1 1 1Zm-4 4H10a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2Zm-3 5h-7a1 1 0 1 0 0 2h7a1 1 0 1 0 0-2Zm-3 5h-4a1 1 0 1 0 0 2h4a1 1 0 1 0 0-2Zm-6.293 4.293L6 21V1a1 1 0 1 0-2 0v20l-1.708-1.708a.999.999 0 1 0-1.414 1.414l2.707 2.707c.39.39.902.585 1.415.585s1.024-.195 1.414-.585l2.707-2.707a.999.999 0 1 0-1.414-1.414Z" />
    </svg>
  );
});

SortAmountDownAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAmountDownAlt.displayName = 'SortAmountDownAlt';

export default SortAmountDownAlt;
