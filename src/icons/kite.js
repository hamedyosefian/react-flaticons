import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kite = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M18.76 16a5.207 5.207 0 0 0-3.707 1.535A15.143 15.143 0 0 1 4.274 22H3.123a1.121 1.121 0 0 1-.793-1.914L5.52 16.9l11.768-3.138A5.005 5.005 0 0 0 21 8.927V5a5.006 5.006 0 0 0-5-5h-3.927a5.005 5.005 0 0 0-4.831 3.712L4.1 15.485.916 18.672A3.121 3.121 0 0 0 3.123 24h1.151a17.127 17.127 0 0 0 12.193-5.051A3.243 3.243 0 0 1 22 21.242V23a1 1 0 0 0 2 0v-1.758A5.249 5.249 0 0 0 18.76 16Zm-1.988-4.174-8.43 2.248L14.5 7.915l3.356 3.356a2.981 2.981 0 0 1-1.084.555ZM19 5v3.927a2.984 2.984 0 0 1-.066.593L15.915 6.5 18.7 3.716A2.963 2.963 0 0 1 19 5Zm-6.927-3H16a2.977 2.977 0 0 1 1.287.3L14.5 5.087l-3.02-3.021A2.984 2.984 0 0 1 12.073 2Zm-2.9 2.228a2.981 2.981 0 0 1 .555-1.085L13.087 6.5l-6.162 6.163Z" />
    </svg>
  );
});

Kite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kite.displayName = 'Kite';

export default Kite;
