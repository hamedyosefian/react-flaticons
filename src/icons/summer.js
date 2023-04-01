import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Summer = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17 24c-6.078.117-9.334-7.638-5-11.889V5c.211-6.609 9.791-6.6 10 0v7.111c4.335 4.252 1.077 12.006-5 11.889Zm0-22a3 3 0 0 0-3 3v7.537a1 1 0 0 1-.332.744 5 5 0 1 0 6.664 0 1 1 0 0 1-.332-.744V5a3 3 0 0 0-3-3Zm0 18a3.007 3.007 0 0 1-1-5.829V8a1 1 0 0 1 2 0v6.171A3.007 3.007 0 0 1 17 20Zm0-4a1 1 0 0 0 0 2 1 1 0 0 0 0-2ZM5 17a1 1 0 0 1-.863-1.5l1.075-1.85a6.06 6.06 0 0 1-.837-.835l-1.887 1.057a1 1 0 1 1-.976-1.744l1.864-1.045A5.9 5.9 0 0 1 3.084 10H1a1 1 0 0 1 0-2h2.082a6.056 6.056 0 0 1 .275-1.051L1.5 5.864a1 1 0 1 1 1-1.728l1.843 1.072a5.993 5.993 0 0 1 .836-.842L4.128 2.488a1 1 0 1 1 1.744-.976l1.042 1.859a5.971 5.971 0 0 1 1.066-.284L8 1a1 1 0 0 1 2 0v2.089a2.005 2.005 0 0 1-1.681 1.969 4.011 4.011 0 0 0-.12 7.863 1 1 0 0 1-.4 1.959 6.012 6.012 0 0 1-.851-.239L5.864 16.5A1 1 0 0 1 5 17Z" />
    </svg>
  );
});

Summer.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Summer.displayName = 'Summer';

export default Summer;
