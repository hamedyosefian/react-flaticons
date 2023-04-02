import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CompressAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M7.293 2.091 5.4 3.985 1.707.293A1 1 0 0 0 .293 1.707L3.985 5.4 2.091 7.293A1 1 0 0 0 2.8 9h4.764A1.436 1.436 0 0 0 9 7.564V2.8a1 1 0 0 0-1.707-.709ZM20.015 18.6l1.894-1.894A1 1 0 0 0 21.2 15h-4.764A1.436 1.436 0 0 0 15 16.436V21.2a1 1 0 0 0 1.707.708l1.893-1.893 3.692 3.692a1 1 0 0 0 1.414-1.414ZM16.436 9H21.2a1 1 0 0 0 .708-1.707L20.015 5.4l3.692-3.692A1 1 0 0 0 22.293.293L18.6 3.985l-1.893-1.894A1 1 0 0 0 15 2.8v4.764A1.436 1.436 0 0 0 16.436 9ZM7.564 15H2.8a1 1 0 0 0-.708 1.707L3.985 18.6.293 22.293a1 1 0 1 0 1.414 1.414L5.4 20.015l1.894 1.894A1 1 0 0 0 9 21.2v-4.764A1.436 1.436 0 0 0 7.564 15Z" />
  </svg>
));

CompressAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CompressAlt.displayName = 'CompressAlt';

export default CompressAlt;
