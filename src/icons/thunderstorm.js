import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Thunderstorm = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M10.892 24.015a1.913 1.913 0 0 1-.815-.186 1.844 1.844 0 0 1-1-2.207L9.614 20H7.923a1.933 1.933 0 0 1-1.84-2.479l2.132-6.174A2 2 0 0 1 10.1 10H12a2 2 0 0 1 1.867 2.717L13.413 14h1.681a1.905 1.905 0 0 1 1.587 2.958L12.419 23.2a1.848 1.848 0 0 1-1.527.815ZM11 18a1 1 0 0 1 .949 1.315l-.662 1.993 3.66-5.357L12 16a1 1 0 0 1-.943-1.333l.932-2.642L10.1 12l-2.079 6.031Zm8 1.5a1 1 0 0 1-.385-1.923c4.967-2.007 4.218-9.468-1.032-10.472a3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.159 6.159 0 0 0 .023 2.18 3 3 0 0 1-.962 2.762 3.523 3.523 0 0 0 .41 5.5 1 1 0 1 1-1.114 1.662A5.536 5.536 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.146 8.146 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.057 8.057 0 0 1 8.734 4.44 1.04 1.04 0 0 0 .743.569c7.187 1.424 8.193 11.483 1.411 14.278A.987.987 0 0 1 19 19.5Z" />
    </svg>
  );
});

Thunderstorm.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Thunderstorm.displayName = 'Thunderstorm';

export default Thunderstorm;
