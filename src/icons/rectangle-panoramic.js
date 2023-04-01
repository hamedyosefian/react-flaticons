import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const RectanglePanoramic = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 5H5a5 5 0 0 0-5 5v4a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5v-4a5 5 0 0 0-5-5Zm3 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3Z" />
    </svg>
  );
});

RectanglePanoramic.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RectanglePanoramic.displayName = 'RectanglePanoramic';

export default RectanglePanoramic;
