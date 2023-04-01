import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LetterCase = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M7.4 5.553a1.041 1.041 0 0 0-1.789 0l-5.5 11a1 1 0 1 0 1.789.894L3.619 14h5.764l1.724 3.447a1 1 0 1 0 1.789-.894ZM4.619 12 6.5 8.236 8.383 12ZM23 8a1 1 0 0 0-1 1v.026A4.948 4.948 0 0 0 19 8a5 5 0 0 0 0 10 4.948 4.948 0 0 0 3-1.026V17a1 1 0 0 0 2 0V9a1 1 0 0 0-1-1Zm-4 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3Z" />
    </svg>
  );
});

LetterCase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LetterCase.displayName = 'LetterCase';

export default LetterCase;
