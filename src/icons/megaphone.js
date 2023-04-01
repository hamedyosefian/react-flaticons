import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Megaphone = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17 0a1 1 0 0 0-1 1c0 2.949-2.583 4-5 4H4a4 4 0 0 0-4 4v2a3.979 3.979 0 0 0 1.514 3.109l3.572 7.972A3.233 3.233 0 0 0 8.039 24a2.982 2.982 0 0 0 2.72-4.2l-2.2-4.8H11c2.417 0 5 1.051 5 4a1 1 0 0 0 2 0V1a1 1 0 0 0-1-1zM8.937 20.619A.983.983 0 0 1 8.039 22a1.232 1.232 0 0 1-1.126-.734L4.105 15h2.254zM16 14.6a7.723 7.723 0 0 0-5-1.6H4a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h7a7.723 7.723 0 0 0 5-1.595zm7.9.852a1 1 0 0 1-1.342.448l-2-1a1 1 0 0 1 .894-1.79l2 1a1 1 0 0 1 .448 1.337zm-3.79-9a1 1 0 0 1 .448-1.342l2-1a1 1 0 1 1 .894 1.79l-2 1a1 1 0 0 1-1.342-.448zM20 10a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1z" />
    </svg>
  );
});

Megaphone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Megaphone.displayName = 'Megaphone';

export default Megaphone;
