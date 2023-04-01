import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Grape = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22 10a4.006 4.006 0 0 0-7-2.618 3.984 3.984 0 0 0-1.967-1.23C13.389 1.618 16.927 1.205 17 3a1 1 0 0 0 0 2 2 2 0 0 0 2-2c-.3-3.828-5.018-3.987-6.99-.438C11.428 1.517 9.216-1.1 8.105.553A1 1 0 0 0 8.553 1.9c1.46.73 2.252 2.129 2.413 4.258A3.984 3.984 0 0 0 9 7.382a3.991 3.991 0 1 0-3.828 6.529 3.985 3.985 0 0 0 3 5 3.984 3.984 0 1 0 7.656 0 3.985 3.985 0 0 0 3-5A4 4 0 0 0 22 10ZM12 8a2 2 0 0 1 0 4 2 2 0 0 1 0-4Zm-8 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Zm3 5a1.991 1.991 0 0 1 .5-1.3A3.991 3.991 0 0 0 9 12.618a3.991 3.991 0 0 0 1.505 1.082A1.994 1.994 0 1 1 7 15Zm5 7a2 2 0 0 1-1.5-3.3 3.991 3.991 0 0 0 1.5-1.082 3.991 3.991 0 0 0 1.505 1.082A2 2 0 0 1 12 22Zm3-5a2 2 0 0 1-1.5-3.3 3.991 3.991 0 0 0 1.5-1.082 3.991 3.991 0 0 0 1.5 1.086A2 2 0 0 1 15 17Zm3-5a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z" />
    </svg>
  );
});

Grape.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grape.displayName = 'Grape';

export default Grape;
