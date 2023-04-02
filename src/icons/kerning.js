import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Kerning = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="m16.94 1.342-8 22a1 1 0 0 1-1.88-.684l8-22a.999.999 0 1 1 1.88.683ZM9.908 6.059a1 1 0 0 0-1.278.605l-3.344 9.362-3.344-9.362a.999.999 0 1 0-1.884.672l3.805 10.653a1.496 1.496 0 0 0 1.423 1.002c.647 0 1.205-.394 1.422-1.003l3.805-10.652a.998.998 0 0 0-.605-1.277Zm13.428 12.883a1 1 0 0 1-1.278-.605l-1.192-3.336h-4.305l-1.191 3.336a.999.999 0 1 1-1.883-.672l3.805-10.652a1.494 1.494 0 0 1 1.422-1.003c.647 0 1.206.394 1.423 1.002l3.805 10.653a.998.998 0 0 1-.605 1.277Zm-3.184-5.941-1.438-4.026-1.438 4.026h2.876Z" />
  </svg>
));

Kerning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Kerning.displayName = 'Kerning';

export default Kerning;
