import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiceD4 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.287 12.967 15.155 1.543l-.035-.046a4 4 0 0 0-6.275.046L.7 12.98a4 4 0 0 0 1 5.541l7.666 4.733a4.97 4.97 0 0 0 5.254 0l7.73-4.776a3.984 3.984 0 0 0 .937-5.511ZM2.822 16.862a1.987 1.987 0 0 1-.48-2.735l8.1-11.378A2.008 2.008 0 0 1 11 2.268v19.561a2.982 2.982 0 0 1-.576-.276Zm18.42-.043-7.666 4.734a3.01 3.01 0 0 1-.576.276V2.268a1.993 1.993 0 0 1 .544.461l8.1 11.384a1.979 1.979 0 0 1-.402 2.706Z" />
    </svg>
  );
});

DiceD4.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceD4.displayName = 'DiceD4';

export default DiceD4;
