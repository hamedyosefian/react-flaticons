import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ArrowAltRight = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.768 11.448 19.35 7.087c-.498-.492-1.35-.143-1.35.552V11H1a1 1 0 1 0 0 2h17v3.361c0 .695.852 1.044 1.35.552l4.418-4.361a.773.773 0 0 0 0-1.104Z" />
    </svg>
  );
});

ArrowAltRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ArrowAltRight.displayName = 'ArrowAltRight';

export default ArrowAltRight;
