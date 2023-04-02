import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LevelUpAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M17.087 7H13v12a5.006 5.006 0 0 1-5 5H1a1 1 0 0 1 0-2h7a3 3 0 0 0 3-3V7H6.913a.924.924 0 0 1-.644-1.575L11.356.27a.9.9 0 0 1 1.288 0l5.087 5.155A.924.924 0 0 1 17.087 7Z" />
  </svg>
));

LevelUpAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LevelUpAlt.displayName = 'LevelUpAlt';

export default LevelUpAlt;