import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Eclipse = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24a1 1 0 0 1-1-1v-4.079a6.829 6.829 0 0 1-1.623-.435L7.33 22.007A1 1 0 0 1 5.6 21l2.049-3.525a7.092 7.092 0 0 1-1.128-1.13L3.01 18.391A1 1 0 0 1 2 16.662l3.51-2.043A6.922 6.922 0 0 1 5.072 13H1a1 1 0 0 1 0-2h4.072a6.922 6.922 0 0 1 .445-1.626L2 7.326A1 1 0 0 1 3 5.6l3.528 2.049a7.137 7.137 0 0 1 1.143-1.142L5.627 2.992a1 1 0 1 1 1.728-1.006L9.4 5.5a6.9 6.9 0 0 1 1.609-.431L11 1a1 1 0 0 1 2 0v4.079a2 2 0 0 1-1.71 1.971A5.019 5.019 0 0 0 7 12c0 3.538 3.728 4.87 4.289 4.95A2 2 0 0 1 13 18.921V23a1 1 0 0 1-1 1Zm6-6c-7.929-.252-7.928-11.749 0-12 7.929.252 7.928 11.749 0 12Zm0-10c-5.275.138-5.274 7.863 0 8 5.275-.138 5.274-7.863 0-8Z" />
    </svg>
  );
});

Eclipse.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Eclipse.displayName = 'Eclipse';

export default Eclipse;
