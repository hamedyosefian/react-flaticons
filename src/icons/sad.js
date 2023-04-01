import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sad = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24a12 12 0 1 1 12-12 12.013 12.013 0 0 1-12 12Zm0-22a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.746 15.667a1 1 0 0 0-.08-1.413A9.454 9.454 0 0 0 12 14a9.454 9.454 0 0 0-5.666 2.254 1 1 0 0 0 1.33 1.494A7.508 7.508 0 0 1 12 16a7.51 7.51 0 0 1 4.336 1.748 1 1 0 0 0 1.41-.081ZM6 10c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Zm8 0c0 1 .895 1 2 1s2 0 2-1a2 2 0 0 0-4 0Z" />
    </svg>
  );
});

Sad.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sad.displayName = 'Sad';

export default Sad;
