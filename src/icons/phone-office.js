import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PhoneOffice = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 2H7.463A4.001 4.001 0 0 0 4 0C1.794 0 0 1.794 0 4v15c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5Zm2.828 4H17a1 1 0 0 1-1-1V4h3c1.304 0 2.415.836 2.828 2ZM2 4c0-1.103.897-2 2-2s2 .897 2 2v12c0 1.103-.897 2-2 2s-2-.897-2-2V4Zm17 18H5a3.004 3.004 0 0 1-2.96-2.514C2.62 19.813 3.288 20 4 20c2.206 0 4-1.794 4-4V4h6v1c0 1.654 1.346 3 3 3h5v11c0 1.654-1.346 3-3 3Zm-3-11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 4a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Z" />
    </svg>
  );
});

PhoneOffice.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneOffice.displayName = 'PhoneOffice';

export default PhoneOffice;
