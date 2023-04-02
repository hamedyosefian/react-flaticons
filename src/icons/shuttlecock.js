import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Shuttlecock = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.2 10.073a3.252 3.252 0 0 0-1.354-.81 3.265 3.265 0 0 0-.791-3.334 3.166 3.166 0 0 0-2.105-.878 3.135 3.135 0 0 0-.93-2.117 3.261 3.261 0 0 0-3.285-.741 3.213 3.213 0 0 0-.824-1.406A2.742 2.742 0 0 0 11.875 0 2.772 2.772 0 0 0 9.89.961a34.174 34.174 0 0 0-6.815 13.6L1.333 16.3A4.5 4.5 0 0 0 7.7 22.667l1.742-1.742a34.174 34.174 0 0 0 13.6-6.815 2.757 2.757 0 0 0 .158-4.037ZM19.692 7.4a1.186 1.186 0 0 1-.019 1.656c-.222.221-.956.872-1.046.962l-.007.007c-1.853 1.609-4.553 3.59-5.738 4.446l-.969-.969 6.1-6.1a1.213 1.213 0 0 1 1.679-.002Zm-5.665-2.121c.027-.029.845-.877.9-.932a1.212 1.212 0 0 1 1.676 0 1.138 1.138 0 0 1 0 1.634L16.584 6 10.5 12.086l-.988-.986c.867-1.2 2.894-3.967 4.515-5.821Zm-2.619-3.016a.756.756 0 0 1 1.105-.045 1.272 1.272 0 0 1 .093 1.649c-.023.027-3.583 4.5-4.527 5.8l-.846-.846a29.568 29.568 0 0 1 4.175-6.558Zm-5.125 18.99a2.561 2.561 0 0 1-3.536 0 2.5 2.5 0 0 1 0-3.536l1.278-1.278 3.536 3.536ZM9.312 18.9 5.1 14.688a31.129 31.129 0 0 1 1.273-3.9l6.836 6.836A31.129 31.129 0 0 1 9.312 18.9ZM22 12.043a.754.754 0 0 1-.263.549 29.562 29.562 0 0 1-6.555 4.175l-.865-.865c1.371-.994 4.046-2.975 5.867-4.59a1.294 1.294 0 0 1 1.609.185.73.73 0 0 1 .207.546Z" />
    </svg>
  );
});

Shuttlecock.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Shuttlecock.displayName = 'Shuttlecock';

export default Shuttlecock;
