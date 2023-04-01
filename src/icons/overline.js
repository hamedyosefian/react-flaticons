import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Overline = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24c-4.411 0-8-3.589-8-8v-4c0-4.411 3.589-8 8-8s8 3.589 8 8v4c0 4.411-3.589 8-8 8Zm0-18c-3.309 0-6 2.691-6 6v4c0 3.309 2.691 6 6 6s6-2.691 6-6v-4c0-3.309-2.691-6-6-6Zm10-5a1 1 0 0 0-1-1H3a1 1 0 1 0 0 2h18a1 1 0 0 0 1-1Z" />
    </svg>
  );
});

Overline.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Overline.displayName = 'Overline';

export default Overline;
