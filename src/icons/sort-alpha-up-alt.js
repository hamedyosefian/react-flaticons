import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SortAlphaUpAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 2h3.84s-4.521 5.065-4.552 5.114A1.884 1.884 0 0 0 16.887 10h4.112a1 1 0 1 0 0-2h-3.84s4.521-5.065 4.552-5.114A1.884 1.884 0 0 0 20.112 0H16a1 1 0 1 0 0 2Zm6 15.5V23a1 1 0 1 1-2 0v-2h-3v2a1 1 0 1 1-2 0v-5.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5ZM20 19v-1.5c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5V19h3ZM11.707 6.293a.999.999 0 0 0 0-1.414L7.414.586C7.024.196 6.512 0 6 0S4.976.195 4.586.585L.293 4.879a.999.999 0 1 0 1.414 1.414L5 3v20a1 1 0 1 0 2 0V3l3.293 3.293a.999.999 0 0 0 1.414 0Z" />
    </svg>
  );
});

SortAlphaUpAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAlphaUpAlt.displayName = 'SortAlphaUpAlt';

export default SortAlphaUpAlt;
