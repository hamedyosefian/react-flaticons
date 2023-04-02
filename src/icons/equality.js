import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Equality = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m23.944 12.669-3.031-8.66a3.004 3.004 0 0 0-2.832-2.01H13V1a1 1 0 1 0-2 0v1H5.919a3.004 3.004 0 0 0-2.832 2.009l-3.031 8.66c-.037.106-.056.632-.056.632 0 2.506 1.871 4.567 4.26 4.692a4.46 4.46 0 0 0 3.338-1.229A4.517 4.517 0 0 0 9 13.5s-.021-.732-.061-.842l-3.145-8.65c.041-.005.083-.008.125-.008H11v18H5a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2h-6V4h5.081c.042 0 .084.002.125.008l-3.146 8.65c-.04.109-.061.842-.061.842a4.52 4.52 0 0 0 1.402 3.264c.845.802 1.828 1.229 3.339 1.229 2.391 0 4.259-2.186 4.259-4.692 0 0-.019-.526-.056-.632Zm-19.58 3.328C3.283 15.94 2.378 15.095 2.098 14H6.95c-.1.499-.35.954-.729 1.313a2.486 2.486 0 0 1-1.856.683ZM6.572 12H2.409l2.042-5.833L6.572 12Zm12.977-5.833L21.591 12h-4.163l2.121-5.833Zm.088 9.83a2.495 2.495 0 0 1-1.857-.683 2.476 2.476 0 0 1-.729-1.313h4.852c-.28 1.094-1.184 1.94-2.265 1.997Z" />
  </svg>
));

Equality.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Equality.displayName = 'Equality';

export default Equality;
