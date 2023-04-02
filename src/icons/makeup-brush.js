import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const MakeupBrush = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M23.229.771a2.637 2.637 0 0 0-3.591-.12L5.472 13.133C3.137 13.573 0 14.874 0 17.6A6.407 6.407 0 0 0 6.4 24c2.725 0 4.027-3.136 4.467-5.471L23.352 4.358a2.634 2.634 0 0 0-.123-3.587zM10.141 16.327l-2.468-2.468 2.005-1.767 2.23 2.23zM6.4 22A4.405 4.405 0 0 1 2 17.6c0-1.508 2.639-2.287 4.049-2.537l2.888 2.887C8.686 19.361 7.908 22 6.4 22zM21.849 3.04l-8.616 9.778-2.052-2.051 9.775-8.613a.631.631 0 0 1 .893.886z" />
  </svg>
));

MakeupBrush.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MakeupBrush.displayName = 'MakeupBrush';

export default MakeupBrush;
