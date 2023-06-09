import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BarcodeScan = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M4 15v7a1 1 0 0 1-2 0v-7a1 1 0 0 1 2 0Zm14-1a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm-8 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm-3.5 0A1.5 1.5 0 0 0 5 15.5v6a1.5 1.5 0 1 0 3 0v-6A1.5 1.5 0 0 0 6.5 14Zm8 0a1.5 1.5 0 0 0-1.5 1.5v6a1.5 1.5 0 1 0 3 0v-6a1.5 1.5 0 0 0-1.5-1.5Zm6.5 0a1 1 0 0 0-1 1v7a1 1 0 0 0 2 0v-7a1 1 0 0 0-1-1Zm2-4h-1V2a1 1 0 0 0-2 0v8h-1V2a1 1 0 0 0-2 0v8h-1V2.5a1.5 1.5 0 1 0-3 0V10h-2V2a1 1 0 0 0-2 0v8H8V2.5a1.5 1.5 0 1 0-3 0V10H4V2a1 1 0 0 0-2 0v8H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

BarcodeScan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarcodeScan.displayName = 'BarcodeScan';

export default BarcodeScan;
