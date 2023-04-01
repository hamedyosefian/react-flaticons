import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LevelDownAlt = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17.087 17H13V5a5.006 5.006 0 0 0-5-5H1a1 1 0 0 0 0 2h7a3 3 0 0 1 3 3v12H6.913a.924.924 0 0 0-.644 1.575l5.087 5.155a.9.9 0 0 0 1.288 0l5.087-5.155A.924.924 0 0 0 17.087 17Z" />
    </svg>
  );
});

LevelDownAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LevelDownAlt.displayName = 'LevelDownAlt';

export default LevelDownAlt;
