import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Glass = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21.469 1.027A3 3 0 0 0 19.209 0H4.791a3 3 0 0 0-2.972 3.405l2.219 16.27A5.017 5.017 0 0 0 8.992 24h6.016a5.017 5.017 0 0 0 4.954-4.324l2.219-16.271a3 3 0 0 0-.712-2.378Zm-3.488 18.379A3.011 3.011 0 0 1 15.008 22H8.992a3.011 3.011 0 0 1-2.973-2.595L4.6 9H16a1 1 0 0 0 0-2H4.327L3.8 3.135A1 1 0 0 1 4.791 2h14.418a1 1 0 0 1 .991 1.135Z" />
    </svg>
  );
});

Glass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Glass.displayName = 'Glass';

export default Glass;
