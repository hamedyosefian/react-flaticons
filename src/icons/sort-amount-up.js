import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SortAmountUp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 23a1 1 0 0 1-1 1H10a1 1 0 1 1 0-2h13a1 1 0 0 1 1 1ZM9 18a1 1 0 0 0 1 1h10a1 1 0 1 0 0-2H10a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h7a1 1 0 1 0 0-2h-7a1 1 0 0 0-1 1Zm0-5a1 1 0 0 0 1 1h4a1 1 0 1 0 0-2h-4a1 1 0 0 0-1 1Zm.121-4.707L6.413.584a2.006 2.006 0 0 0-2.828 0L.878 3.293a.999.999 0 1 0 1.414 1.414L4 2.999V23a1 1 0 1 0 2 0V2.999l1.707 1.708a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414Z" />
  </svg>
));

SortAmountUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortAmountUp.displayName = 'SortAmountUp';

export default SortAmountUp;
