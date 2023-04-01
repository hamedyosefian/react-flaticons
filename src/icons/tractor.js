import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tractor = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M11 17h-.1a4.952 4.952 0 0 0-.729-1.756l.073-.073a1 1 0 0 0-1.414-1.414l-.073.073A4.952 4.952 0 0 0 7 13.1V13a1 1 0 0 0-2 0v.1a4.952 4.952 0 0 0-1.756.729l-.073-.073a1 1 0 0 0-1.414 1.414l.073.073A4.952 4.952 0 0 0 1.1 17H1a1 1 0 0 0 0 2h.1a4.952 4.952 0 0 0 .729 1.756l-.073.073a1 1 0 0 0 1.414 1.414l.073-.073A4.952 4.952 0 0 0 5 22.9v.1a1 1 0 0 0 2 0v-.1a4.952 4.952 0 0 0 1.756-.729l.073.073a1 1 0 0 0 1.414-1.414l-.073-.073A4.952 4.952 0 0 0 10.9 19h.1a1 1 0 0 0 0-2Zm-5 4a3 3 0 0 1 0-6 3 3 0 0 1 0 6Zm18-9a4 4 0 0 0-4-4V6a1 1 0 0 0-2 0v2h-2.446l-3.531-5.65A4.971 4.971 0 0 0 7.783 0H6a3 3 0 0 0-3 3v5a3 3 0 0 0-3 3 1 1 0 0 0 2 0 1 1 0 0 1 1-1h17a2.012 2.012 0 0 1 1.6 3.2l-1.555 2.073c-6.729-2-8.559 8.3-1.545 8.727a4.522 4.522 0 0 0 3.226-7.634L23.2 14.4A4.022 4.022 0 0 0 24 12ZM5 3a1 1 0 0 1 1-1h1.783a2.983 2.983 0 0 1 2.544 1.41L13.2 8H5Zm13.5 19a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
});

Tractor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tractor.displayName = 'Tractor';

export default Tractor;
