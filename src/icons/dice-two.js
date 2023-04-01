import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiceTwo = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 24H5a5.006 5.006 0 0 1-5-5V5a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v14a5.006 5.006 0 0 1-5 5ZM5 2a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Zm1 5a1 1 0 1 0 1-1 1 1 0 0 0-1 1Zm10 10a1 1 0 1 0 1-1 1 1 0 0 0-1 1Z" />
    </svg>
  );
});

DiceTwo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceTwo.displayName = 'DiceTwo';

export default DiceTwo;
