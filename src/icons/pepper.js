import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pepper = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21.945 6.479a5.991 5.991 0 0 0-2.98-1.392C18.619.687 15.752 0 14 0a1 1 0 0 0 0 2c1.171 0 2.687.351 2.955 3.105A6.073 6.073 0 0 0 12 11.048C11.981 13.338 10.516 15 8.515 15c-.592 0-2.392 0-3.3-3.936A2.633 2.633 0 0 0 2.649 9c-5.314.483-1.614 9.518.945 11.563A12.441 12.441 0 0 0 12.225 24 12.247 12.247 0 0 0 24 11.635a6.206 6.206 0 0 0-2.055-5.156Zm-4.512.56a3.953 3.953 0 0 1 2.933.762 2.957 2.957 0 0 1-4.733 0 3.822 3.822 0 0 1 1.8-.762ZM22 11.635c-.5 13.831-19.867 13.638-19.992-.014a.639.639 0 0 1 1.261-.109C4.312 16.048 6.7 17 8.515 17c3.1 0 5.457-2.552 5.485-5.937a4.156 4.156 0 0 1 .371-1.657 4.965 4.965 0 0 0 7.282-.028A4.883 4.883 0 0 1 22 11.635Z" />
    </svg>
  );
});

Pepper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pepper.displayName = 'Pepper';

export default Pepper;
