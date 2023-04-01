import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PokerChip = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm10 12a10 10 0 0 1-.186 1.9l-1.932-.58a7.442 7.442 0 0 0 0-2.64l1.932-.58A10 10 0 0 1 22 12zm-.76-3.816-1.93.579a8.048 8.048 0 0 0-4.073-4.073l.579-1.93a10.058 10.058 0 0 1 5.424 5.424zM12 18a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6zm1.9-15.814-.58 1.932a7.442 7.442 0 0 0-2.64 0l-.58-1.932a9.8 9.8 0 0 1 3.8 0zm-5.716.574.579 1.93A8.048 8.048 0 0 0 4.69 8.763l-1.93-.579A10.058 10.058 0 0 1 8.184 2.76zM2 12a10 10 0 0 1 .186-1.9l1.932.58a7.442 7.442 0 0 0 0 2.64l-1.932.58A10 10 0 0 1 2 12zm.76 3.816 1.93-.579a8.048 8.048 0 0 0 4.073 4.073l-.579 1.93a10.058 10.058 0 0 1-5.424-5.424zm7.34 6 .58-1.932a7.442 7.442 0 0 0 2.64 0l.58 1.932a9.8 9.8 0 0 1-3.8 0zm5.716-.575-.579-1.929a8.048 8.048 0 0 0 4.073-4.073l1.93.579a10.053 10.053 0 0 1-5.424 5.421zm-1.185-10.349a1.848 1.848 0 0 1 0 2.216l-1.893 2.523a.922.922 0 0 1-1.476 0l-1.893-2.523a1.848 1.848 0 0 1 0-2.216l1.893-2.523a.922.922 0 0 1 1.476 0z" />
    </svg>
  );
});

PokerChip.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PokerChip.displayName = 'PokerChip';

export default PokerChip;
