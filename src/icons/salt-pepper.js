import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const SaltPepper = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21.832 11.445A7.8 7.8 0 0 1 20 6a1 1 0 0 0 0-2c-.138-5.276-7.863-5.272-8 0a1 1 0 0 0 0 2 7.8 7.8 0 0 1-1.832 5.445 8.845 8.845 0 0 0-1.3 9.445A4.994 4.994 0 0 0 13.5 24h5c3.761.121 5.506-4 5.5-7a9.847 9.847 0 0 0-2.168-5.555ZM16 2a2 2 0 0 1 2 2h-4a2 2 0 0 1 2-2Zm2 4a8.5 8.5 0 0 0 1.188 5h-6.377A8.492 8.492 0 0 0 14 6Zm3.271 14.155A2.975 2.975 0 0 1 18.5 22h-5c-2.568.147-3.48-3.224-3.5-5a7.244 7.244 0 0 1 1.537-4h8.926a6.551 6.551 0 0 1 .808 7.155ZM8 23c-.035 1.327-1.641.953-2.5 1-3.764.122-5.506-4-5.5-7-.042-4.5 4.509-6.634 4-11a1 1 0 0 1 0-2 4.025 4.025 0 0 1 6.667-2.981 1 1 0 0 1-1.334 1.49A2.012 2.012 0 0 0 6 4h2a1 1 0 0 1 0 2H6a8.492 8.492 0 0 1-1.189 5H7a1 1 0 0 1 0 2H3.537a6.554 6.554 0 0 0-.809 7.155A2.977 2.977 0 0 0 5.5 22H7a1 1 0 0 1 1 1Zm10-4a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm-2-3a1 1 0 0 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 0 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
});

SaltPepper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SaltPepper.displayName = 'SaltPepper';

export default SaltPepper;
