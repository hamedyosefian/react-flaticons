import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Gifts = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21.672 14.366c.149-.291.251-.608.298-.942a2.985 2.985 0 0 0-.57-2.226 3.006 3.006 0 0 0-4.2-.599c-.507.38-.898.848-1.2 1.336a4.838 4.838 0 0 0-1.2-1.336 2.985 2.985 0 0 0-2.224-.57 2.982 2.982 0 0 0-1.977 1.17 2.981 2.981 0 0 0-.569 2.225c.048.333.149.65.298.942A4.005 4.005 0 0 0 8 18v2c0 .728.196 1.411.537 2H5c-1.654 0-3-1.346-3-3V9c0-1.654 1.346-3 3-3h6a3 3 0 0 1 2.906 2.249 1.001 1.001 0 0 0 1.937-.498A4.997 4.997 0 0 0 11.001 4h-.586l1.293-1.293a.999.999 0 1 0-1.414-1.414L9.001 2.586V1a1 1 0 1 0-2 0v1.586L5.708 1.293a.999.999 0 1 0-1.414 1.414L5.587 4h-.586A5.006 5.006 0 0 0 0 9v10c0 2.757 2.243 5 5 5h15c2.206 0 4-1.794 4-4v-2a4.007 4.007 0 0 0-2.328-3.634ZM18.4 12.2a.996.996 0 0 1 1.4.2.992.992 0 0 1 .19.742.994.994 0 0 1-.391.659 1.945 1.945 0 0 1-.336.199h-2.026c.198-.61.549-1.34 1.163-1.8Zm-6.2.2a.998.998 0 0 1 1.401-.201c.614.46.965 1.19 1.163 1.8h-2.025a1.86 1.86 0 0 1-.339-.201.994.994 0 0 1-.39-.657.99.99 0 0 1 .189-.741ZM10 20v-2c0-1.103.897-2 2-2h3v6h-3c-1.103 0-2-.897-2-2Zm12 0c0 1.103-.897 2-2 2h-3l-.003-6H20c1.103 0 2 .897 2 2v2Z" />
    </svg>
  );
});

Gifts.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gifts.displayName = 'Gifts';

export default Gifts;
