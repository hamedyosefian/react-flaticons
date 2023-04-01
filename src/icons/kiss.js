import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kiss = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M8.5 11a1.5 1.5 0 0 1 0-3 1.5 1.5 0 0 1 0 3Zm7-3a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm8.5 4a12.013 12.013 0 0 1-12 12C-3.9 23.4-3.893.6 12 0a12.013 12.013 0 0 1 12 12Zm-2 0A10.011 10.011 0 0 0 12 2c-13.248.5-13.245 19.5 0 20a10.011 10.011 0 0 0 10-10Z" />
      <path d="M15 14.5a2.5 2.5 0 0 0-2.5-2.5h-1.731a1 1 0 0 0 0 2H12.5a.5.5 0 0 1 0 1H12a1 1 0 0 0 0 2h.5a.5.5 0 0 1 0 1h-1.731a1 1 0 0 0 0 2H12.5a2.507 2.507 0 0 0 1.987-4A2.471 2.471 0 0 0 15 14.5Z" />
    </svg>
  );
});

Kiss.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kiss.displayName = 'Kiss';

export default Kiss;
