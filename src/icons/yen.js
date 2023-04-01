import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Yen = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22.61.208a1 1 0 0 0-1.4.182L12 12.36 2.792.39a1 1 0 0 0-1.584 1.22L10.738 14H6a1 1 0 0 0 0 2h5v2H6a1 1 0 0 0 0 2h5v3a1 1 0 0 0 2 0v-3h5a1 1 0 0 0 0-2h-5v-2h5a1 1 0 0 0 0-2h-4.738l9.53-12.39A1 1 0 0 0 22.61.208z" />
    </svg>
  );
});

Yen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Yen.displayName = 'Yen';

export default Yen;
