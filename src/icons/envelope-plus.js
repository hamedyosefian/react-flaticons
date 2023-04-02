import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EnvelopePlus = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 10v9a5.006 5.006 0 0 1-5 5H5a5.006 5.006 0 0 1-5-5V8a5.006 5.006 0 0 1 5-5h8a1 1 0 0 1 0 2H5a2.99 2.99 0 0 0-2.639 1.6l7.517 7.518a3.008 3.008 0 0 0 4.244 0l3.821-3.818a1 1 0 0 1 1.414 1.414l-3.821 3.822a5.008 5.008 0 0 1-7.072 0L2 9.071V19a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-9a1 1 0 0 1 2 0Zm-7-5h2v2a1 1 0 0 0 2 0V5h2a1 1 0 0 0 0-2h-2V1a1 1 0 0 0-2 0v2h-2a1 1 0 0 0 0 2Z" />
  </svg>
));

EnvelopePlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EnvelopePlus.displayName = 'EnvelopePlus';

export default EnvelopePlus;
