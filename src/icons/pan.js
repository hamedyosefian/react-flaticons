import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Pan = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M14 0C6.664-.19 1.6 8.253 5.139 14.619l-4.261 4.26a3 3 0 1 0 4.243 4.243l4.26-4.261C15.748 22.4 24.189 17.336 24 10A10.013 10.013 0 0 0 14 0ZM3.707 21.708a1 1 0 0 1-1.415-1.414l3.969-3.97a10.12 10.12 0 0 0 1.415 1.415ZM14 18a8.009 8.009 0 0 1-8-8C6.375-.589 21.626-.586 22 10a8.01 8.01 0 0 1-8 8Zm6-8c-.251 7.93-11.75 7.928-12 0a6.007 6.007 0 0 1 6-6 1 1 0 0 1 0 2 4 4 0 0 0-4 4c.138 5.275 7.863 5.274 8 0a1 1 0 0 1 2 0Z" />
    </svg>
  );
});

Pan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pan.displayName = 'Pan';

export default Pan;
