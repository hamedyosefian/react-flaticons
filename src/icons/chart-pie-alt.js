import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChartPieAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18.713 12H14a2 2 0 0 1-2-2V5.274a3 3 0 0 0-1.166-2.383 2.871 2.871 0 0 0-2.481-.534 10.969 10.969 0 0 0 .553 21.414 11 11 0 0 0 12.734-8.114 2.876 2.876 0 0 0-.533-2.485A3.055 3.055 0 0 0 18.713 12Zm.988 3.168A8.969 8.969 0 1 1 8.842 4.3a.871.871 0 0 1 .764.172 1.016 1.016 0 0 1 .4.806V10a4 4 0 0 0 4 4h4.712a1.041 1.041 0 0 1 .816.4.884.884 0 0 1 .166.768Z" />
      <path d="M23.651 7.446A10.073 10.073 0 0 0 16.582.372 2.1 2.1 0 0 0 16.038.3a2 2 0 0 0-2.019 2V7a3 3 0 0 0 3 3h4.719a2.008 2.008 0 0 0 1.913-2.554ZM21.153 8h-4.138a1 1 0 0 1-1-1l-.008-4.693a.048.048 0 0 1 .025-.009h.026A8.072 8.072 0 0 1 21.734 8Z" />
    </svg>
  );
});

ChartPieAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartPieAlt.displayName = 'ChartPieAlt';

export default ChartPieAlt;
