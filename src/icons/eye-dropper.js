import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const EyeDropper = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.112 5.165a3.025 3.025 0 0 0 0-4.279 3.094 3.094 0 0 0-4.276 0L16.4 3.324c-1.012 1.013-3.123.789-4.579-.013a2.6 2.6 0 0 0-3.057 4.144l1.416 1.416-8.155 8.154a3.455 3.455 0 0 0-.593 4.129L.293 22.293a1 1 0 0 0 0 1.414 1 1 0 0 0 1.414 0l1.139-1.139a3.455 3.455 0 0 0 4.129-.593l8.154-8.155 1.416 1.416a2.6 2.6 0 0 0 4.144-3.057c-.8-1.456-1.025-3.568-.013-4.58zM5.56 20.561a1.536 1.536 0 0 1-2.121 0 1.5 1.5 0 0 1 0-2.121l8.155-8.154 2.121 2.121zm13.7-14.376c-1.759 1.759-1.5 4.832-.325 6.958a.578.578 0 0 1-.119.679.621.621 0 0 1-.859 0l-7.779-7.781A.612.612 0 0 1 10.606 5a.522.522 0 0 1 .251.063c2.126 1.17 5.2 1.434 6.958-.325L20.254 2.3a1.045 1.045 0 0 1 1.446 0 1.024 1.024 0 0 1 0 1.449z" />
    </svg>
  );
});

EyeDropper.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

EyeDropper.displayName = 'EyeDropper';

export default EyeDropper;
