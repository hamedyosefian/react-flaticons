import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ArrowsFromLine = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 12a1 1 0 0 1-1 1H1a1 1 0 1 1 0-2h22a1 1 0 0 1 1 1ZM8.707 5.293 11 3v5a1 1 0 1 0 2 0V3l2.293 2.293a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414L13.414.586a2.003 2.003 0 0 0-2.828 0L7.293 3.879a.999.999 0 1 0 1.414 1.414Zm6.586 13.414L13 21v-5a1 1 0 1 0-2 0v5l-2.293-2.293a.999.999 0 1 0-1.414 1.414l3.293 3.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l3.293-3.293a.999.999 0 1 0-1.414-1.414Z" />
    </svg>
  );
});

ArrowsFromLine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowsFromLine.displayName = 'ArrowsFromLine';

export default ArrowsFromLine;
