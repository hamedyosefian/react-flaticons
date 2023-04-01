import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const T = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 0H3C1.692.005 1.693 1.995 3 2h8v21c.005 1.308 1.995 1.307 2 0V2h8c1.308-.005 1.307-1.995 0-2Z" />
    </svg>
  );
});

T.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

T.displayName = 'T';

export default T;
