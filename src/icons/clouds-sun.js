import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudsSun = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M2.778 15.513a1.284 1.284 0 0 0-.729 1.543 1 1 0 0 1-.712 1.222 1.022 1.022 0 0 1-.256.033 1 1 0 0 1-.966-.745 3.285 3.285 0 0 1 1.874-3.891 5.312 5.312 0 0 1 .039-2.441 5.534 5.534 0 0 1 7.606-3.769 1 1 0 0 1-.8 1.832A3.6 3.6 0 0 0 6.86 9.04a3.58 3.58 0 0 0-2.917 4.269 1.964 1.964 0 0 1-1.165 2.204Zm17.1 4.9a4.618 4.618 0 0 1-3.453 3.445 4.948 4.948 0 0 1-.992.123c-1.381.027-7.8.036-9.236 0a3.458 3.458 0 0 1-.781-.113 3.285 3.285 0 0 1-.424-6.188 5.312 5.312 0 0 1 .039-2.441 5.548 5.548 0 0 1 10.524-.794c.078.187.407.263.737.323.108.02.2.038.268.056a4.671 4.671 0 0 1 3.315 5.585Zm-3.834-3.657a2.95 2.95 0 0 1-2.336-1.543A3.593 3.593 0 0 0 9.86 13.04a3.58 3.58 0 0 0-2.917 4.269 1.964 1.964 0 0 1-1.165 2.2 1.284 1.284 0 0 0-.729 1.543 1.259 1.259 0 0 0 .872.873 1.5 1.5 0 0 0 .328.048c1.213.033 7.671.028 9.144 0a2.889 2.889 0 0 0 .584-.073 2.637 2.637 0 0 0 1.949-1.943 2.679 2.679 0 0 0-1.885-3.205ZM23 9h-2.581a3.955 3.955 0 0 0-.048-.31 6.1 6.1 0 0 0-.324-1.09l2.225-1.313a1 1 0 1 0-1.017-1.722l-2.24 1.323a6.679 6.679 0 0 0-.943-.914l1.3-2.262a1 1 0 1 0-1.732-1l-1.3 2.258A6.737 6.737 0 0 0 15 3.6V1a1 1 0 0 0-2 0v2.564l-.048.007a5.263 5.263 0 0 0-1.257.338l-1.415-2.2A1 1 0 0 0 8.6 2.786l1.527 2.378a1.749 1.749 0 0 0 2.21.648 3.161 3.161 0 0 1 .905-.261 4.594 4.594 0 0 1 5.169 3.526 6.247 6.247 0 0 1-.293 2.681 1.894 1.894 0 0 0 .836 2.249l2.358 1.361a1 1 0 0 0 1-1.733l-2.274-1.312a8.686 8.686 0 0 0 .31-1.323H23a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

CloudsSun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudsSun.displayName = 'CloudsSun';

export default CloudsSun;
