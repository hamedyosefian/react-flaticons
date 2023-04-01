import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Cow = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.63 3.845A2.024 2.024 0 0 0 21.988 3h-3.544c.519-.847 1.1-2.892-.444-3a1 1 0 0 0-1 1 2 2 0 0 1-2 2H9a2 2 0 0 1-2-2 1 1 0 0 0-1-1c-1.548.109-.962 2.152-.444 3H2.012A2.008 2.008 0 0 0 .1 5.614a6.9 6.9 0 0 0 2.919 3.525c0 .035 3 12.065 3 12.065A2.994 2.994 0 0 0 9 24h6a2.994 2.994 0 0 0 2.979-2.8s3-12.03 3-12.065a6.9 6.9 0 0 0 2.921-3.52 1.937 1.937 0 0 0-.27-1.77Zm-5.25 4.117A5.108 5.108 0 0 0 13 13v5h-2v-5a5.108 5.108 0 0 0-5.38-5.038A9.858 9.858 0 0 1 8.342 4.99l7.3.01a9.812 9.812 0 0 1 2.738 2.962ZM2.012 5h3.321a12.177 12.177 0 0 0-1.6 2.221A4.709 4.709 0 0 1 2.012 5ZM6 10a2.974 2.974 0 0 1 1.032.194 1.507 1.507 0 0 0 1.774 1.774A2.974 2.974 0 0 1 9 13v5a2.974 2.974 0 0 0-1.6.472L5.263 9.929A5.427 5.427 0 0 0 6 10Zm9 12H9a1 1 0 0 1 0-2h6a1 1 0 0 1 0 2Zm1.6-3.528A2.974 2.974 0 0 0 15 18v-5a2.974 2.974 0 0 1 .194-1.032 1.507 1.507 0 0 0 1.774-1.774 7.779 7.779 0 0 1 1.769-.265Zm3.664-11.257a12.087 12.087 0 0 0-1.615-2.24L22 4.97a4.779 4.779 0 0 1-1.736 2.245Z" />
    </svg>
  );
});

Cow.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cow.displayName = 'Cow';

export default Cow;
