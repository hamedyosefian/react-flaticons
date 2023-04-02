import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShuttleVan = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m23.4 10.43-2.43-5.46A5.005 5.005 0 0 0 16.4 2H5a5.006 5.006 0 0 0-5 5v8a4.007 4.007 0 0 0 3 3.873v.627a3.5 3.5 0 0 0 7 0V19h4v.5a3.5 3.5 0 0 0 7 0v-.627A4.006 4.006 0 0 0 24 15v-1.727a6.936 6.936 0 0 0-.6-2.843Zm-4.258-4.648L21.017 10H14V4h2.4a3 3 0 0 1 2.742 1.782ZM8 10V4h4v6ZM5 4h1v6H2V7a3 3 0 0 1 3-3Zm3 15.5a1.5 1.5 0 0 1-3 0V19h3Zm9.5 1.5a1.5 1.5 0 0 1-1.5-1.5V19h3v.5a1.5 1.5 0 0 1-1.5 1.5Zm4.5-6a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-3h19.836A4.977 4.977 0 0 1 22 13.273Z" />
  </svg>
));

ShuttleVan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShuttleVan.displayName = 'ShuttleVan';

export default ShuttleVan;
