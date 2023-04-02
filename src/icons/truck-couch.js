import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TruckCouch = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20 16V5a3 3 0 0 1 3-3 1 1 0 0 0 0-2 5.006 5.006 0 0 0-5 5v11.279L3.158 21.226 2.1 18.051a2 2 0 0 1 1.272-2.53l.027-.009.391 1.155a2 2 0 0 0 2.541 1.25l7.74-2.648a2 2 0 0 0 1.247-2.534l-.379-1.122.377-.127a1 1 0 0 0-.64-1.9l-.376.127-.559-1.654a4.021 4.021 0 0 0-5.082-2.5L4.706 6.918a4.007 4.007 0 0 0-2.493 5.07l.55 1.629-.022.008a4 4 0 0 0-2.536 5.057l1.055 3.177-.576.192a1 1 0 0 0 .632 1.9l14.807-4.936A4.017 4.017 0 0 0 20 24c5.274-.138 5.274-7.863 0-8ZM5.354 8.811l3.957-1.353a2 2 0 0 1 2.54 1.248l1.579 4.67-7.741 2.65-1.581-4.68a2 2 0 0 1 1.246-2.535ZM20 22a2 2 0 0 1 0-4 2 2 0 0 1 0 4Z" />
  </svg>
));

TruckCouch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TruckCouch.displayName = 'TruckCouch';

export default TruckCouch;
