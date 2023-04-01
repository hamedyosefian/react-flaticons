import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const TvMusic = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M16 7a1 1 0 0 1-1 1h-1v4.5a2.5 2.5 0 1 1-2-2.45V8c0-1.103.897-2 2-2h1a1 1 0 0 1 1 1Zm8 0v7c0 2.757-2.243 5-5 5h-6v1h3a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2h3v-1H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5Zm-2 0c0-1.654-1.346-3-3-3H5C3.346 4 2 5.346 2 7v7c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7Z" />
    </svg>
  );
});

TvMusic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

TvMusic.displayName = 'TvMusic';

export default TvMusic;
