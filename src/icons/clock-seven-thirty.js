import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ClockSevenThirty = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm1 16v-6a1.001 1.001 0 0 0-1.793-.61L8.77 14.562a1 1 0 0 0 1.586 1.218l.644-.838v3.057a1 1 0 1 0 2 0Z" />
    </svg>
  );
});

ClockSevenThirty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ClockSevenThirty.displayName = 'ClockSevenThirty';

export default ClockSevenThirty;
