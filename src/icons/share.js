import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Share = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19.333 14.667a4.66 4.66 0 0 0-3.839 2.024l-6.509-2.939a4.574 4.574 0 0 0 .005-3.488l6.5-2.954a4.66 4.66 0 1 0-.827-2.643 4.633 4.633 0 0 0 .08.786l-6.91 3.14a4.668 4.668 0 1 0-.015 6.827l6.928 3.128a4.736 4.736 0 0 0-.079.785 4.667 4.667 0 1 0 4.666-4.666Zm0-12.667a2.667 2.667 0 1 1-2.666 2.667A2.669 2.669 0 0 1 19.333 2ZM4.667 14.667A2.667 2.667 0 1 1 7.333 12a2.67 2.67 0 0 1-2.666 2.667ZM19.333 22A2.667 2.667 0 1 1 22 19.333 2.669 2.669 0 0 1 19.333 22Z" />
    </svg>
  );
});

Share.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Share.displayName = 'Share';

export default Share;
