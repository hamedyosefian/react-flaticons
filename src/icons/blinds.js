import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Blinds = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M22 18.172V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v12c0 2.757 2.243 5 5 5h10a1 1 0 1 0 0-2H5a3.004 3.004 0 0 1-2.828-2H17a1 1 0 0 0 1-1V2.172c1.164.413 2 1.524 2 2.828v13.172A3.004 3.004 0 0 0 18 21c0 1.654 1.346 3 3 3s3-1.346 3-3a3.004 3.004 0 0 0-2-2.828ZM16 6v2H2V6h14ZM2 10h14v2H2v-2Zm3-8h11v2H2.172A3.004 3.004 0 0 1 5 2ZM2 16v-2h14v2H2Zm19 6a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
  </svg>
));

Blinds.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Blinds.displayName = 'Blinds';

export default Blinds;
