import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const I = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M18 22h-5V2h5c1.308-.006 1.307-1.995 0-2H6C4.692.006 4.693 1.995 6 2h5v20H6c-1.308.006-1.307 1.995 0 2h12c1.308-.006 1.307-1.995 0-2Z" />
  </svg>
));

I.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

I.displayName = 'I';

export default I;
