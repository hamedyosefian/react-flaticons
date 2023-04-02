import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ChartArea = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 24H3c-1.654 0-3-1.346-3-3V1a1 1 0 0 1 2 0v20c0 .551.449 1 1 1h20a1 1 0 0 1 0 2Zm1.006-6.991.015-4.979a3.015 3.015 0 0 0-.879-2.13l-2.021-2.021c-1.134-1.134-3.11-1.134-4.243 0l-1.879 1.878-3.879-3.878c-1.133-1.134-3.109-1.134-4.242 0l-2 2A2.978 2.978 0 0 0 3.999 10v7c0 1.654 1.346 3 3 3h14.006a3.004 3.004 0 0 0 3-2.991ZM9.707 7.293l4.586 4.585a.999.999 0 0 0 1.414 0l2.586-2.585a1.023 1.023 0 0 1 1.414 0l2.021 2.021a.992.992 0 0 1 .292.71l-.015 4.979c-.001.549-.45.997-1 .997H7c-.551 0-1-.449-1-1v-7c0-.263.107-.521.293-.707l2-2C8.481 7.104 8.732 7 9 7s.518.104.707.293Z" />
  </svg>
));

ChartArea.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartArea.displayName = 'ChartArea';

export default ChartArea;
