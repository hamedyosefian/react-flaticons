import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EnvelopeOpenText = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M7 6a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 5h6a1 1 0 1 0 0-2H8a1 1 0 0 0 0 2Zm16 1.708V19c0 2.757-2.243 5-5 5H5c-2.757 0-5-2.243-5-5v-6.292c0-1.356.562-2.673 1.541-3.611L3 7.699V4c0-2.206 1.794-4 4-4h10c2.206 0 4 1.794 4 4v3.699l1.459 1.397A5.025 5.025 0 0 1 24 12.707ZM5 4v8.243l4.878 4.879c1.134 1.133 3.11 1.133 4.243 0L19 12.243V4c0-1.103-.897-2-2-2H7c-1.103 0-2 .897-2 2Zm17 8.708c0-.195-.02-.389-.058-.579l-6.407 6.407C14.591 19.48 13.336 20 12 20s-2.591-.52-3.536-1.464l-6.406-6.408c-.038.19-.058.384-.058.579v6.292c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3v-6.292Z" />
    </svg>
  );
});

EnvelopeOpenText.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopeOpenText.displayName = 'EnvelopeOpenText';

export default EnvelopeOpenText;
