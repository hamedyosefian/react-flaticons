import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LevelDown = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M17.713 18.233a1 1 0 0 0-1.414-.011l-2.885 2.834c-.108.108-.255.244-.414.389V5a5.006 5.006 0 0 0-5-5H1a1 1 0 0 0 0 2h7a3 3 0 0 1 3 3v16.445a14.91 14.91 0 0 1-.42-.395L7.7 18.222a1 1 0 1 0-1.4 1.425l2.872 2.823c.2.2.513.487.84.777a3 3 0 0 0 3.977 0c.326-.289.636-.572.833-.769l2.878-2.831a1 1 0 0 0 .013-1.414Z" />
    </svg>
  );
});

LevelDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LevelDown.displayName = 'LevelDown';

export default LevelDown;
