import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LevelUp = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17.713 5.767a1 1 0 0 1-1.414.011l-2.885-2.834A13.426 13.426 0 0 0 13 2.555V19a5.006 5.006 0 0 1-5 5H1a1 1 0 0 1 0-2h7a3 3 0 0 0 3-3V2.555c-.16.146-.308.284-.42.4L7.7 5.778a1 1 0 1 1-1.4-1.425L9.172 1.53c.2-.2.513-.487.84-.777a3 3 0 0 1 3.977 0c.326.289.636.572.833.769L17.7 4.353a1 1 0 0 1 .013 1.414Z" />
  </svg>
));

LevelUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LevelUp.displayName = 'LevelUp';

export default LevelUp;
