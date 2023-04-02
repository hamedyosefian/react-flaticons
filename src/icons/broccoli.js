import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Broccoli = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M20.794 6.206a4.431 4.431 0 0 0-4.6-3.194C13.509-1.852 5.916-.445 5.083 5c-7.24.463-6.488 10.65.74 10.934a17.52 17.52 0 0 1 1.037 4.45A4.027 4.027 0 0 0 10.842 24h2.316a4.027 4.027 0 0 0 3.982-3.615 15.894 15.894 0 0 1 1.493-5.473c5.567.988 7.548-6.974 2.161-8.706Zm-5.643 13.96A2.027 2.027 0 0 1 13.158 22h-2.316a2.027 2.027 0 0 1-1.993-1.834 20.312 20.312 0 0 0-.913-4.266 8.082 8.082 0 0 0 2.573-.989 4.835 4.835 0 0 0 .491.309V19a1 1 0 0 0 2 0v-3.073a5.219 5.219 0 0 0 3.228-.475 19.7 19.7 0 0 0-1.077 4.714ZM19.5 13a2.519 2.519 0 0 1-1.564-.565A2.72 2.72 0 0 1 17 10a1 1 0 0 0-2 0 4.7 4.7 0 0 0 .969 3.255 3.425 3.425 0 0 1-4.6-.264 1 1 0 0 0-1.33-.151A5.75 5.75 0 0 1 7 14c-2.281 0-5-.694-5-4a3 3 0 0 1 3-3 2.808 2.808 0 0 1 3 3 1 1 0 0 0 2 0 5 5 0 0 0-2.945-4.546A4 4 0 0 1 14.7 4.5a1 1 0 0 0 1.178.592 2.477 2.477 0 0 1 3.083 2.085 1 1 0 0 0 .861.862A2.493 2.493 0 0 1 19.5 13Z" />
  </svg>
));

Broccoli.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Broccoli.displayName = 'Broccoli';

export default Broccoli;
