import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BarcodeRead = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5 18a1 1 0 0 1-1-1V7a1 1 0 1 1 2 0v10a1 1 0 0 1-1 1Zm5-1V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm10 0V7a1 1 0 1 0-2 0v10a1 1 0 1 0 2 0Zm-6-.5v-9a1.5 1.5 0 1 0-3 0v9a1.5 1.5 0 1 0 3 0ZM7 21a1 1 0 0 0-1-1H4c-1.103 0-2-.897-2-2v-2a1 1 0 1 0-2 0v2c0 2.206 1.794 4 4 4h2a1 1 0 0 0 1-1Zm17-3v-2a1 1 0 1 0-2 0v2c0 1.103-.897 2-2 2h-2a1 1 0 1 0 0 2h2c2.206 0 4-1.794 4-4Zm0-10V6c0-2.206-1.794-4-4-4h-2a1 1 0 1 0 0 2h2c1.103 0 2 .897 2 2v2a1 1 0 1 0 2 0ZM2 8V6c0-1.103.897-2 2-2h2a1 1 0 1 0 0-2H4C1.794 2 0 3.794 0 6v2a1 1 0 1 0 2 0Zm13.5 10a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 1 0v11a.5.5 0 0 1-.5.5Z" />
    </svg>
  );
});

BarcodeRead.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarcodeRead.displayName = 'BarcodeRead';

export default BarcodeRead;
