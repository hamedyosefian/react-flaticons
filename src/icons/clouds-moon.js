import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudsMoon = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M2.777 15.513a1.284 1.284 0 0 0-.728 1.543 1 1 0 0 1-1.934.509 3.284 3.284 0 0 1 1.874-3.89 5.316 5.316 0 0 1 .039-2.442 5.534 5.534 0 0 1 7.606-3.768 1 1 0 0 1-.8 1.832 3.63 3.63 0 0 0-1.972-.258 3.581 3.581 0 0 0-2.916 4.27 1.963 1.963 0 0 1-1.169 2.204Zm21.185-4.357a1.963 1.963 0 0 0-1.55-1.256 5.944 5.944 0 0 1-4.369-2.75 5.869 5.869 0 0 1-.351-4.614A1.945 1.945 0 0 0 17.231.6 1.971 1.971 0 0 0 15.3.069a8.787 8.787 0 0 0-3.011 1.54 8.027 8.027 0 0 0-2.31 2.981 1 1 0 0 0 1.824.82 6.006 6.006 0 0 1 1.731-2.234 8.662 8.662 0 0 1 2.25-1.237 7.864 7.864 0 0 0 .516 6.194 7.7 7.7 0 0 0 5.8 3.68 7.433 7.433 0 0 1-1.78 1.4 1 1 0 0 0 .983 1.742 9.3 9.3 0 0 0 2.307-1.832 1.963 1.963 0 0 0 .352-1.967Zm-4.087 9.253a4.616 4.616 0 0 1-3.453 3.445 5.011 5.011 0 0 1-.992.123c-1.279.024-7.735.038-9.236 0a3.476 3.476 0 0 1-.784-.115 3.285 3.285 0 0 1-.421-6.187 5.316 5.316 0 0 1 .039-2.442 5.548 5.548 0 0 1 10.525-.793c.078.188.406.262.736.323.108.02.2.039.268.056a4.672 4.672 0 0 1 3.318 5.59Zm-3.834-3.657a2.948 2.948 0 0 1-2.335-1.544 3.6 3.6 0 0 0-3.846-2.169 3.581 3.581 0 0 0-2.917 4.27 1.963 1.963 0 0 1-1.166 2.2 1.284 1.284 0 0 0-.728 1.543 1.26 1.26 0 0 0 .871.873 1.566 1.566 0 0 0 .334.049c1.222.033 7.594.029 9.139 0a2.947 2.947 0 0 0 .586-.074 2.636 2.636 0 0 0 1.947-1.941 2.679 2.679 0 0 0-1.885-3.207Z" />
    </svg>
  );
});

CloudsMoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudsMoon.displayName = 'CloudsMoon';

export default CloudsMoon;
