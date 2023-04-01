import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CloudSleet = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M14 24a1 1 0 0 1-.929-1.372l2-5a1 1 0 0 1 1.858.744l-2 5A1 1 0 0 1 14 24Zm-4 0a1.015 1.015 0 0 1-.372-.071 1 1 0 0 1-.557-1.3l2-5a1 1 0 0 1 1.858.744l-2 5A1 1 0 0 1 10 24Zm-4 0a1.015 1.015 0 0 1-.372-.071 1 1 0 0 1-.557-1.3l2-5a1 1 0 1 1 1.858.744l-2 5A1 1 0 0 1 6 24Zm-2.559-4.5a1 1 0 0 1-.457-.111A5.536 5.536 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.059 8.059 0 0 1 8.734 4.44 1.04 1.04 0 0 0 .743.569c6.68 1.257 8.211 10.478 2.3 13.834a1 1 0 1 1-1.007-1.727c4.327-2.409 3.188-9.272-1.687-10.147a3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.142 6.142 0 0 0 .024 2.181 3.005 3.005 0 0 1-.964 2.762 3.523 3.523 0 0 0 .754 5.7 1 1 0 0 1-.459 1.89Zm9.8-4.467a1 1 0 0 1-.868-.5L11.5 13.01l-.873 1.524a1 1 0 1 1-1.735-1L9.774 12H8a1 1 0 0 1 0-2h1.774l-.882-1.539a1 1 0 0 1 1.735-1L11.5 8.99l.874-1.524a1 1 0 1 1 1.734 1L13.227 10H15a1 1 0 0 1 0 2h-1.773l.881 1.539a1 1 0 0 1-.866 1.5Z" />
    </svg>
  );
});

CloudSleet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudSleet.displayName = 'CloudSleet';

export default CloudSleet;
