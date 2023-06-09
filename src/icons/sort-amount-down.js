import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SortAmountDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 16a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h13a1 1 0 0 1 1 1Zm-14-4h10a1 1 0 1 0 0-2H10a1 1 0 1 0 0 2Zm0-5h7a1 1 0 1 0 0-2h-7a1 1 0 1 0 0 2Zm0-5h4a1 1 0 1 0 0-2h-4a1 1 0 1 0 0 2ZM7.707 19.293 6 21V1a1 1 0 1 0-2 0v20l-1.707-1.707a.999.999 0 1 0-1.414 1.414l2.707 2.707c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l2.707-2.707a.999.999 0 1 0-1.414-1.414Z" />
    </svg>
  );
});

SortAmountDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAmountDown.displayName = 'SortAmountDown';

export default SortAmountDown;
