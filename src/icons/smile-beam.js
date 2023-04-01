import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SmileBeam = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M10 12a1 1 0 0 1-1-1c0-1.054-.68-2-1-2s-1 .946-1 2a1 1 0 0 1-2 0c0-1.892 1.232-4 3-4s3 2.108 3 4a1 1 0 0 1-1 1Zm9-1c0-1.892-1.232-4-3-4s-3 2.108-3 4a1 1 0 0 0 2 0c0-1.054.68-2 1-2s1 .946 1 2a1 1 0 0 0 2 0Zm5 1A12.013 12.013 0 0 0 12 0C-3.9.6-3.893 23.4 12 24a12.013 12.013 0 0 0 12-12Zm-2 0a10.011 10.011 0 0 1-10 10C-1.249 21.5-1.244 2.5 12 2a10.011 10.011 0 0 1 10 10Zm-4.334 3.746a1 1 0 0 0-1.33-1.493 6.36 6.36 0 0 1-8.67 0 1 1 0 0 0-1.332 1.492A9.454 9.454 0 0 0 12 18a9.454 9.454 0 0 0 5.666-2.254Z" />
    </svg>
  );
});

SmileBeam.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SmileBeam.displayName = 'SmileBeam';

export default SmileBeam;
