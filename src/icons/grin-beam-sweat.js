import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const GrinBeamSweat = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M6 12a1 1 0 0 1-1-1c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-2 0c0-1.054-.679-2-1-2s-1 .946-1 2a1 1 0 0 1-1 1Zm7-1a1 1 0 0 0 2 0c0-1.054.68-2 1-2s1 .946 1 2a1 1 0 0 0 2 0c-.248-5.285-5.753-5.282-6 0Zm7.5-4A2.5 2.5 0 0 0 23 4.5c.072-1.083-1.837-5.626-3.073-4.231A8.374 8.374 0 0 0 18 4.5 2.5 2.5 0 0 0 20.5 7Zm3.179 2.229a1 1 0 0 0-1.948.459 10 10 0 1 1-6.242-7.063 1 1 0 0 0 .7-1.874C8.571-2.229-.153 3.8 0 12a12 12 0 1 0 23.679-2.771ZM12 19a6.827 6.827 0 0 0 5.842-3.458 1 1 0 0 0-1.053-1.518A15.4 15.4 0 0 1 12 15a15.4 15.4 0 0 1-4.8-.976 1 1 0 0 0-1.052 1.518A6.836 6.836 0 0 0 12 19Z" />
    </svg>
  );
});

GrinBeamSweat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GrinBeamSweat.displayName = 'GrinBeamSweat';

export default GrinBeamSweat;
