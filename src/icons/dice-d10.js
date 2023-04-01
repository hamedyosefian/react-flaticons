import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiceD10 = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23 12.916a5.059 5.059 0 0 0-1.048-3.24L15.1 1.469a4 4 0 0 0-6.19-.007L2.024 9.708A4.976 4.976 0 0 0 1 12.918a5.245 5.245 0 0 0 1.374 3.268l6.754 6.595A3.966 3.966 0 0 0 12.006 24a3.951 3.951 0 0 0 2.853-1.2l6.794-6.65A5.155 5.155 0 0 0 23 12.916Zm-2.61-1.993a3.024 3.024 0 0 1 .462.871l-4.108-.684-2.93-8.065Zm-8.38 2.827-2.816-2.106 2.812-7.717 2.8 7.718ZM10.2 3.045 7.26 11.11l-4.116.69a2.873 2.873 0 0 1 .443-.84ZM3.808 14.787a3.019 3.019 0 0 1-.611-.973l4.546-.757 3.265 2.443v6.23a2.116 2.116 0 0 1-.459-.361Zm9.637 6.6a2.022 2.022 0 0 1-.437.343V15.5l3.25-2.443 4.552.758a2.907 2.907 0 0 1-.583.938Z" />
    </svg>
  );
});

DiceD10.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceD10.displayName = 'DiceD10';

export default DiceD10;
