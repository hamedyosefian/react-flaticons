import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Forward = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M3.787 20.656A3.789 3.789 0 0 1 0 16.87V7.13a3.783 3.783 0 0 1 6.021-3.051L9.8 6.853a3.783 3.783 0 0 1 6.01-2.774l6.641 4.87a3.784 3.784 0 0 1 0 6.1l-6.641 4.87a3.783 3.783 0 0 1-6.01-2.772l-3.779 2.774a3.775 3.775 0 0 1-2.234.735Zm7.006-6.475a1 1 0 0 1 1 1v1.689a1.784 1.784 0 0 0 2.838 1.438l6.64-4.87a1.783 1.783 0 0 0 0-2.876l-6.64-4.87a1.784 1.784 0 0 0-2.838 1.438v1.689a1 1 0 0 1-1.591.806L4.838 5.692A1.784 1.784 0 0 0 2 7.13v9.74a1.784 1.784 0 0 0 2.838 1.438l5.362-3.933a1 1 0 0 1 .593-.194Z" />
    </svg>
  );
});

Forward.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Forward.displayName = 'Forward';

export default Forward;
