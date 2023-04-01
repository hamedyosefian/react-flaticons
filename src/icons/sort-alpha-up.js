import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SortAlphaUp = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 22h-3.84s4.521-5.065 4.552-5.114A1.884 1.884 0 0 0 20.113 14h-4.112a1 1 0 1 0 0 2h3.84s-4.521 5.065-4.552 5.114A1.884 1.884 0 0 0 16.888 24H21a1 1 0 1 0 0-2Zm1-18.5V9a1 1 0 1 1-2 0V7h-3v2a1 1 0 1 1-2 0V3.5C15 1.57 16.57 0 18.5 0S22 1.57 22 3.5ZM20 5V3.5c0-.827-.673-1.5-1.5-1.5S17 2.673 17 3.5V5h3Zm-8.293 1.293a.999.999 0 0 0 0-1.414L7.414.586C7.024.196 6.512 0 6 0S4.976.195 4.586.585L.293 4.879a.999.999 0 1 0 1.414 1.414L5 3v20a1 1 0 1 0 2 0V3l3.293 3.293a.999.999 0 0 0 1.414 0Z" />
    </svg>
  );
});

SortAlphaUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAlphaUp.displayName = 'SortAlphaUp';

export default SortAlphaUp;
