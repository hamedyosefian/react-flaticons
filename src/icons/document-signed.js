import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DocumentSigned = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m19.535 3.122-1.656-1.658A4.968 4.968 0 0 0 14.343 0H8a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h8a5.006 5.006 0 0 0 5-5V6.657a4.968 4.968 0 0 0-1.465-3.535zm-1.414 1.414A2.932 2.932 0 0 1 18.5 5H16V2.5a3.1 3.1 0 0 1 .465.38zM19 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h6v3a2 2 0 0 0 2 2h3zM16 9a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2zm1 5a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1zm-.192 3.413a1 1 0 0 1-.217 1.394A6.464 6.464 0 0 1 13.135 20a3.252 3.252 0 0 1-2-.7c-.328-.225-.453-.3-.7-.3a3.951 3.951 0 0 0-1.832.794 1 1 0 0 1-1.214-1.588A5.861 5.861 0 0 1 10.439 17a3.025 3.025 0 0 1 1.832.655 1.347 1.347 0 0 0 .864.345 4.586 4.586 0 0 0 2.277-.809 1 1 0 0 1 1.396.222z" />
    </svg>
  );
});

DocumentSigned.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DocumentSigned.displayName = 'DocumentSigned';

export default DocumentSigned;
