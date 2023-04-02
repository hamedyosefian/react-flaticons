import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CakeBirthday = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 22h-1v-8a5.006 5.006 0 0 0-5-5h-4V6.039a2.5 2.5 0 0 0 1.5-2.289A7.293 7.293 0 0 0 12.738.327a1 1 0 0 0-1.476 0A7.293 7.293 0 0 0 9.5 3.75 2.5 2.5 0 0 0 11 6.039V9H7a5.006 5.006 0 0 0-5 5v8H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM7 11h10a3 3 0 0 1 3 3v1.98c-.936-.1-1.5-.7-1.5-.98a1 1 0 0 0-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .343-.682 1-1.75 1-1.089 0-1.75-.694-1.75-1a1 1 0 0 0-2 0c0 .315-.579.888-1.5.981V14a3 3 0 0 1 3-3Zm-3 6.979A4.156 4.156 0 0 0 6.5 17a4.309 4.309 0 0 0 5.5.015A4.309 4.309 0 0 0 17.5 17a4.156 4.156 0 0 0 2.5.978V22H4Z" />
  </svg>
));

CakeBirthday.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CakeBirthday.displayName = 'CakeBirthday';

export default CakeBirthday;
