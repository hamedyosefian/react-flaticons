import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Grid = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M4.5 17.5H2a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5H2v-2.5h2.5ZM22 17.5h-2.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5H22ZM4.5 8.75H2a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5H2v-2.5h2.5ZM22 8.75h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5H22ZM4.5 0H2a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5H2V2h2.5ZM13.25 17.5h-2.5a2 2 0 0 0-2 2V22a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5h2.5ZM13.25 8.75h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2v-2.5a2 2 0 0 0-2-2Zm0 4.5h-2.5v-2.5h2.5ZM13.25 0h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2h2.5a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5h-2.5V2h2.5ZM22 0h-2.5a2 2 0 0 0-2 2v2.5a2 2 0 0 0 2 2H22a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm0 4.5h-2.5V2H22Z" />
  </svg>
));

Grid.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Grid.displayName = 'Grid';

export default Grid;
