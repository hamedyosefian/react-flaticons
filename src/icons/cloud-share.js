import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudShare = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 18a2.986 2.986 0 0 0-2.077.844l-2.96-1.481A2.9 2.9 0 0 0 16 17a2.9 2.9 0 0 0-.037-.363l2.96-1.481A2.994 2.994 0 1 0 18 13a2.9 2.9 0 0 0 .037.363l-2.96 1.481a3 3 0 1 0 0 4.312l2.96 1.481A2.9 2.9 0 0 0 18 21a3 3 0 1 0 3-3zm0-6a1 1 0 1 1-1 1 1 1 0 0 1 1-1zm-8 6a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm8 4a1 1 0 1 1 1-1 1 1 0 0 1-1 1zm-9 0a1 1 0 0 1-1 1H5.679a5.841 5.841 0 0 1-5.622-4.7 5.443 5.443 0 0 1 2.885-5.651 7.652 7.652 0 0 1-.8-5.18 8 8 0 0 1 15.49-.842 1.09 1.09 0 0 0 .722.735 1 1 0 1 1-.588 1.911 3.1 3.1 0 0 1-2.044-2.053 6 6 0 1 0-11.06 4.513 1.994 1.994 0 0 1-.792 2.686 3.468 3.468 0 0 0-1.835 3.6A3.807 3.807 0 0 0 5.679 21H11a1 1 0 0 1 1 1z" />
    </svg>
  );
});

CloudShare.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudShare.displayName = 'CloudShare';

export default CloudShare;
