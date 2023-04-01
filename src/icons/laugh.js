import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Laugh = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2ZM8 14a1 1 0 0 0-.963 1.285A5.5 5.5 0 0 0 12.007 19a5.469 5.469 0 0 0 4.966-3.715A1.021 1.021 0 0 0 16.01 14Zm-2-4c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" />
    </svg>
  );
});

Laugh.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Laugh.displayName = 'Laugh';

export default Laugh;
