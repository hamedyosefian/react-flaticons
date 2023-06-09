import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudHailMixed = forwardRef(({ color, size, ...rest }, ref) => {
  const iconContext = useContext(IconContext);

  const mergedProps = {
    color: color ?? iconContext.color ?? 'currentColor',
    size: size ?? iconContext.size ?? '20px',
    ...rest,
  };
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={mergedProps.size}
      height={mergedProps.size}
      viewBox="0 0 24 24"
      fill={mergedProps.color}
      {...mergedProps}
    >
      <path d="M9.817 24a1.025 1.025 0 0 1-.244-.03 1 1 0 0 1-.727-1.212l1.5-6a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-.969.758Zm4.934-3a1.025 1.025 0 0 1-.244-.03 1 1 0 0 1-.727-1.212l1.5-6a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-.969.758Zm-8 0a1.025 1.025 0 0 1-.244-.03 1 1 0 0 1-.727-1.212l1.5-6a1 1 0 1 1 1.94.484l-1.5 6a1 1 0 0 1-.969.758ZM19 19.5a1 1 0 0 1-.385-1.923c4.967-2.006 4.217-9.47-1.032-10.472a3.012 3.012 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.136 6.136 0 0 0 .024 2.18 3 3 0 0 1-.964 2.763 3.522 3.522 0 0 0 .411 5.5 1 1 0 1 1-1.114 1.662A5.537 5.537 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.945 7.945 0 0 1 8.5.138a8.053 8.053 0 0 1 8.735 4.438 1.033 1.033 0 0 0 .742.57c7.187 1.423 8.193 11.483 1.411 14.278A.991.991 0 0 1 19 19.5ZM11 14a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm-6 9a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm8 0a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

CloudHailMixed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudHailMixed.displayName = 'CloudHailMixed';

export default CloudHailMixed;
