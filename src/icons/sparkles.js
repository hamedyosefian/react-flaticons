import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Sparkles = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19.5 24a1 1 0 0 1-.929-.628l-.844-2.113-2.116-.891a1.007 1.007 0 0 1 .035-1.857l2.088-.791.837-2.092a1.008 1.008 0 0 1 1.858 0l.841 2.1 2.1.841a1.007 1.007 0 0 1 0 1.858l-2.1.841-.841 2.1A1 1 0 0 1 19.5 24ZM10 21a2 2 0 0 1-1.936-1.413L6.45 14.54l-5.063-1.694a2.032 2.032 0 0 1 .052-3.871l5.023-1.534 1.692-5.054A1.956 1.956 0 0 1 10.108 1a2 2 0 0 1 1.917 1.439l1.532 5.015 5.03 1.61a2.042 2.042 0 0 1 0 3.872l-5.039 1.612-1.612 5.039A2 2 0 0 1 10 21Zm.112-17.977L8.2 8.564a1 1 0 0 1-.656.64l-5.521 1.684 5.541 1.917a1 1 0 0 1 .636.643l1.77 5.53 1.83-5.53a1 1 0 0 1 .648-.648l5.53-1.769a.072.072 0 0 0 .02-.009L12.448 9.2a1 1 0 0 1-.652-.661Zm8.17 8.96ZM20.5 7a1 1 0 0 1-.97-.757l-.357-1.43-1.433-.385a1 1 0 0 1 .034-1.94l1.4-.325.356-1.406a1 1 0 0 1 1.94 0l.354 1.418 1.418.355a1 1 0 0 1 0 1.94l-1.418.355-.354 1.418A1 1 0 0 1 20.5 7Z" />
  </svg>
));

Sparkles.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sparkles.displayName = 'Sparkles';

export default Sparkles;
