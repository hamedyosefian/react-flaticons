import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const WindWarning = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M11 24a4.241 4.241 0 0 1-3.943-2.667 1 1 0 1 1 1.886-.666C9.72 22.649 12.991 22.337 13 20a2 2 0 0 0-2-2H1a1 1 0 0 1 0-2h10c5.276.139 5.272 7.863 0 8Zm9-5a4.241 4.241 0 0 1-3.943-2.667 1 1 0 0 1 1.886-.666c.777 1.982 4.048 1.67 4.057-.667a2 2 0 0 0-2-2h-5a1 1 0 0 1 0-2h5c5.276.139 5.272 7.863 0 8ZM7 14C-2.251 13.706-2.249.293 7 0c9.251.294 9.249 13.707 0 14ZM7 2C.392 2.21.394 11.791 7 12c6.608-.21 6.606-9.791 0-10Zm13 7h-3a1 1 0 0 1 0-2h3a2 2 0 0 0 2-2c-.009-2.337-3.281-2.648-4.057-.667a1 1 0 1 1-1.886-.666C17.616-.415 23.952.421 24 5a4 4 0 0 1-4 4ZM7 8a1 1 0 0 1-1-1V4a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1Zm-1 2a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

WindWarning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

WindWarning.displayName = 'WindWarning';

export default WindWarning;
