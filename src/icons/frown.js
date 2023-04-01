import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Frown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm4.01 16a1.021 1.021 0 0 0 .963-1.285A5.469 5.469 0 0 0 12.007 13a5.5 5.5 0 0 0-4.966 3.715A1 1 0 0 0 8 18ZM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" />
    </svg>
  );
});

Frown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Frown.displayName = 'Frown';

export default Frown;
