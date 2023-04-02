import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Carrot = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23 5h-2.586l2.293-2.293a1 1 0 0 0-1.414-1.414L19 3.586V1a1 1 0 0 0-2 0v4.456a10.139 10.139 0 0 0-2.854-2.126 3.765 3.765 0 0 0-4.423 1.048C7.965 6.136 3.065 15.121.3 20.319A2.511 2.511 0 0 0 3.681 23.7c5.2-2.764 14.183-7.665 15.941-9.423a3.766 3.766 0 0 0 1.049-4.422A10.167 10.167 0 0 0 18.544 7H23a1 1 0 0 0 0-2Zm-4.792 7.863a16.072 16.072 0 0 1-2.293 1.637l-2.208-2.207a1 1 0 0 0-1.414 1.414l1.87 1.869c-2.746 1.643-6.689 3.842-11.421 6.358a.5.5 0 0 1-.676-.676 359.744 359.744 0 0 1 4.16-7.618l2.067 2.067a1 1 0 0 0 1.414-1.414l-2.456-2.456c1.09-1.889 2.006-3.4 2.709-4.463l2.333 2.333a1 1 0 0 0 1.414-1.414L11.174 5.76c.847-.789 1.366-.922 2.183-.592a11.623 11.623 0 0 1 3.008 2.466 11.628 11.628 0 0 1 2.467 3.009c.249.58.346 1.251-.624 2.22Z" />
  </svg>
));

Carrot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Carrot.displayName = 'Carrot';

export default Carrot;
