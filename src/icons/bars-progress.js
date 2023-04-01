import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const BarsProgress = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M4 11h16c2.206 0 4-1.794 4-4s-1.794-4-4-4H4C1.794 3 0 4.794 0 7s1.794 4 4 4Zm18-4c0 1.103-.897 2-2 2h-4V5h4c1.103 0 2 .897 2 2ZM4 5h10v4H4c-1.103 0-2-.897-2-2s.897-2 2-2Zm16 8H4c-2.206 0-4 1.794-4 4s1.794 4 4 4h16c2.206 0 4-1.794 4-4s-1.794-4-4-4ZM2 17c0-1.103.897-2 2-2h4v4H4c-1.103 0-2-.897-2-2Zm18 2H10v-4h10c1.103 0 2 .897 2 2s-.897 2-2 2Z" />
    </svg>
  );
});

BarsProgress.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BarsProgress.displayName = 'BarsProgress';

export default BarsProgress;
