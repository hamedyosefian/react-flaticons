import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const K = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m21.781 22.375-7.543-9.429 7.594-11.391a1.001 1.001 0 0 0-1.664-1.11L12.465 12H4V1C3.994-.308 2.006-.307 2 1v11.978a.066.066 0 0 0 0 .044V23c.006 1.308 1.995 1.307 2 0v-9h8.519l7.7 9.625a1 1 0 0 0 1.561-1.25Z" />
    </svg>
  );
});

K.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

K.displayName = 'K';

export default K;
