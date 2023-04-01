import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bug = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M22 7a2 2 0 0 0 2-2V1a1 1 0 0 0-2 0v4h-4c-.018 0-.032.009-.05.01a6.411 6.411 0 0 0-11.89 0C6.039 5.011 6.021 5 6 5H2V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h3.485l-1.013 4H1a1 1 0 0 0 0 2h2.965l-.145.573-.02.127a8.37 8.37 0 0 0-.07 1.032A8.2 8.2 0 0 0 4.053 17H2a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0v-4h2.93a8.248 8.248 0 0 0 14.14 0H22v4a1 1 0 0 0 2 0v-4a2 2 0 0 0-2-2h-2.053a8.2 8.2 0 0 0 .325-2.273A8.37 8.37 0 0 0 20.2 13.7l-.175-.7H23a1 1 0 0 0 0-2h-3.478l-1.009-4ZM12 21a6.279 6.279 0 0 1-6.272-6.273A6.188 6.188 0 0 1 5.775 14l2.03-8.03a4.448 4.448 0 0 1 8.376-.041L18.225 14a6.188 6.188 0 0 1 .047.725A6.279 6.279 0 0 1 12 21Z" />
    </svg>
  );
});

Bug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bug.displayName = 'Bug';

export default Bug;
