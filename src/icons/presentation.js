import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Presentation = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23 14h-1V5a5.006 5.006 0 0 0-5-5H7a5.006 5.006 0 0 0-5 5v9H1a1 1 0 0 0 0 2h10v4H9a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 1 1 0 0 0 2 0 3 3 0 0 0-3-3h-2v-4h10a1 1 0 0 0 0-2zM4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v9H4z" />
    </svg>
  );
});

Presentation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Presentation.displayName = 'Presentation';

export default Presentation;
