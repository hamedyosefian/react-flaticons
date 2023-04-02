import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Fox = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.241.435a1.983 1.983 0 0 0-1.7-.383 6.132 6.132 0 0 0-4.141 3.73A21.876 21.876 0 0 0 12 3a21.876 21.876 0 0 0-5.4.782A6.133 6.133 0 0 0 2.456.052a1.982 1.982 0 0 0-1.7.383A2 2 0 0 0 0 2.006v7.852a10.927 10.927 0 0 0 3.222 7.778l4.657 4.657a5.862 5.862 0 0 0 8.242 0l4.657-4.657A10.931 10.931 0 0 0 24 9.858V2.006a1.994 1.994 0 0 0-.759-1.571ZM5.051 5.316a1 1 0 0 0 1.264.633A20.924 20.924 0 0 1 12 5a20.934 20.934 0 0 1 5.685.949 1 1 0 0 0 1.263-.633c.617-1.849 1.671-2.995 3.052-3.31v6.167c-2.428.559-9 2.811-9 10.827v.184a2.868 2.868 0 0 0-2 0V19c0-8.015-6.571-10.268-9-10.827V2c1.381.321 2.435 1.468 3.051 3.316Zm-.415 10.906a8.929 8.929 0 0 1-2.618-6A11.431 11.431 0 0 1 4 10.945V11a3.781 3.781 0 0 0 3.6 2.978A8.852 8.852 0 0 1 9 19v1.586Zm14.728 0L15 20.586V19a8.852 8.852 0 0 1 1.4-5.022A3.783 3.783 0 0 0 20 11v-.055a11.431 11.431 0 0 1 1.982-.722 8.929 8.929 0 0 1-2.618 5.999Z" />
  </svg>
));

Fox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Fox.displayName = 'Fox';

export default Fox;
