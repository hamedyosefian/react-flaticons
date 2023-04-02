import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Watermelon = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M22.373 2.324A4.336 4.336 0 0 0 15.5 1.273L1.273 15.5a4.347 4.347 0 0 0-1.214 3.742c.718 3.917 5.816 4.606 9.038 4.765 10.878.156 18.424-11.957 13.276-21.683Zm-4.157 15.892a12.874 12.874 0 0 1-14.984 2.377 2.322 2.322 0 0 1-.545-3.682L16.911 2.686a2.321 2.321 0 0 1 3.682.546 12.871 12.871 0 0 1-2.377 14.984Zm.4-10.448a1.308 1.308 0 0 1-1.85 1.85 5.412 5.412 0 0 1-.751-1.966.526.526 0 0 1 .635-.635 5.412 5.412 0 0 1 1.964.751Zm-5 8a1.308 1.308 0 0 1-1.849 1.849 5.378 5.378 0 0 1-.752-1.966.526.526 0 0 1 .635-.634 5.394 5.394 0 0 1 1.966.748Zm3-3a1.308 1.308 0 0 1-1.85 1.85 5.412 5.412 0 0 1-.751-1.966.526.526 0 0 1 .635-.635 5.412 5.412 0 0 1 1.965.749Zm-8 4a1.308 1.308 0 0 1-1.849 1.849 5.369 5.369 0 0 1-.751-1.966.526.526 0 0 1 .634-.635 5.386 5.386 0 0 1 1.968.749Z" />
  </svg>
));

Watermelon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Watermelon.displayName = 'Watermelon';

export default Watermelon;
