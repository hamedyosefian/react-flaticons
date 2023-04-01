import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HandHoldingSeeding = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m23.047 17.197-4.318 3.935A10.977 10.977 0 0 1 11.321 24H1a1 1 0 1 1 0-2h10.32a8.98 8.98 0 0 0 6.061-2.347l4.284-3.902c.347-.348.43-.944.156-1.324a1.006 1.006 0 0 0-.74-.424 1.018 1.018 0 0 0-.788.29l-4.234 3.886A2.99 2.99 0 0 1 14 19H9a1 1 0 1 1 0-2h5c.252 0 1-.115 1-1a1 1 0 0 0-1-1H9.088a8.947 8.947 0 0 0-6.364 2.636l-.998 1.053a1 1 0 1 1-1.451-1.376l1.017-1.071a10.946 10.946 0 0 1 7.797-3.24h4.912c1.236 0 2.3.752 2.759 1.822l2.151-1.974a2.955 2.955 0 0 1 2.331-.839c.88.07 1.683.525 2.203 1.248.844 1.174.673 2.866-.397 3.939ZM4.006 2.162A2.01 2.01 0 0 1 4.594.594 1.997 1.997 0 0 1 6.163.006C9.04.209 10.948 1.201 12 3.118 13.053 1.201 14.96.209 17.838.006a1.975 1.975 0 0 1 1.568.588c.416.415.63.987.588 1.569-.311 4.413-2.48 6.545-6.994 6.808v1.028a1 1 0 1 1-2 0V8.971c-4.514-.264-6.683-2.395-6.994-6.809Zm9.026 4.806c3.361-.224 4.734-1.637 4.968-4.946-3.329.214-4.744 1.585-4.968 4.946ZM6.021 2c.214 3.329 1.585 4.744 4.946 4.968C10.743 3.607 9.33 2.234 6.021 2Z" />
    </svg>
  );
});

HandHoldingSeeding.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HandHoldingSeeding.displayName = 'HandHoldingSeeding';

export default HandHoldingSeeding;
