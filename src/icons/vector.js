import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Vector = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M10.007 3 8 2.986A3 3 0 0 0 5 0H3a3 3 0 0 0-3 3v2a3 3 0 0 0 2.993 3l-.014 1.993A1 1 0 0 0 3.973 11h.006a1 1 0 0 0 1-.993L4.993 8H5a3 3 0 0 0 3-3v-.014L9.993 5H10a1 1 0 0 0 .007-2ZM6 5a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM21 0h-2a3 3 0 0 0-3 2.993l-1.994-.014H14a1 1 0 0 0-.007 2L16 4.993V5a3 3 0 0 0 3 3h.014L19 9.993A1 1 0 0 0 19.993 11H20a1 1 0 0 0 1-.993L21.014 8A3 3 0 0 0 24 5V3a3 3 0 0 0-3-3Zm1 5a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM21.007 16l.014-1.994A1 1 0 0 0 20.027 13h-.006a1 1 0 0 0-1 .993L19.007 16H19a3 3 0 0 0-3 3v.014L14.007 19H14a1 1 0 0 0-.007 2l2.007.014A3 3 0 0 0 19 24h2a3 3 0 0 0 3-3v-2a3 3 0 0 0-2.993-3ZM22 21a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1ZM10.007 19.021 8 19.007V19a3 3 0 0 0-3-3h-.014L5 14.007A1 1 0 0 0 4.007 13H4a1 1 0 0 0-1 .993L2.986 16A3 3 0 0 0 0 19v2a3 3 0 0 0 3 3h2a3 3 0 0 0 3-2.993l1.994.014H10a1 1 0 0 0 .007-2ZM6 21a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1Z" />
  </svg>
));

Vector.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Vector.displayName = 'Vector';

export default Vector;
