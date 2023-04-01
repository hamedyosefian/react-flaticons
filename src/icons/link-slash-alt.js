import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const LinkSlashAlt = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M11.953 17.993a6.232 6.232 0 0 1-4.121-1.823 6.478 6.478 0 0 1-.641-.748 1 1 0 0 1 1.617-1.178 4.234 4.234 0 0 0 3.239 1.751 1 1 0 0 1-.046 1.999h-.048ZM1.831 13.331A6.206 6.206 0 0 0 0 17.75c0 1.669.65 3.239 1.831 4.419C3.011 23.35 4.58 24 6.25 24s3.239-.65 4.419-1.831l1.058-1.058a.999.999 0 1 0-1.414-1.414l-1.058 1.058C8.452 21.558 7.385 22 6.25 22s-2.202-.442-3.005-1.245S2 18.885 2 17.75s.442-2.203 1.245-3.005l3.037-3.038a.999.999 0 1 0-1.414-1.414l-3.037 3.038ZM.293 1.707l22 22a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-6.581-6.581 5.043-5.043A6.206 6.206 0 0 0 24 6.25c0-1.669-.65-3.239-1.831-4.419C20.989.65 19.42 0 17.75 0s-3.239.65-4.419 1.831l-1.058 1.058a.999.999 0 1 0 1.414 1.414l1.058-1.058C15.548 2.442 16.615 2 17.75 2s2.202.442 3.005 1.245S22 5.115 22 6.25s-.442 2.203-1.245 3.005l-5.043 5.043L9.86 8.446a4.222 4.222 0 0 1 4.894.798c.162.162.308.333.437.511a1 1 0 0 0 1.398.219 1 1 0 0 0 .22-1.397 6.288 6.288 0 0 0-.641-.748c-2.095-2.095-5.297-2.408-7.76-.835L1.707.293A.999.999 0 1 0 .293 1.707Z" />
    </svg>
  );
});

LinkSlashAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LinkSlashAlt.displayName = 'LinkSlashAlt';

export default LinkSlashAlt;
