import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Bank = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1zM.291 8.552a2.443 2.443 0 0 1 .153-2.566 4.716 4.716 0 0 1 1.668-1.5L9.613.582a5.174 5.174 0 0 1 4.774 0l7.5 3.907a4.716 4.716 0 0 1 1.668 1.5 2.443 2.443 0 0 1 .153 2.566A2.713 2.713 0 0 1 21.292 10H21v8h1a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2h1v-8h-.292A2.713 2.713 0 0 1 .291 8.552zM5 18h3v-8H5zm5-8v8h4v-8zm9 0h-3v8h3zM2.063 7.625A.717.717 0 0 0 2.708 8h18.584a.717.717 0 0 0 .645-.375.452.452 0 0 0-.024-.5 2.7 2.7 0 0 0-.949-.864l-7.5-3.907a3.176 3.176 0 0 0-2.926 0l-7.5 3.907a2.712 2.712 0 0 0-.949.865.452.452 0 0 0-.026.499z" />
  </svg>
));

Bank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Bank.displayName = 'Bank';

export default Bank;
