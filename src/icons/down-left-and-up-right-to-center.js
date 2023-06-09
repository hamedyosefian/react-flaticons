import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DownLeftAndUpRightToCenter = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.707 1.707-5.405 5.405 2.463 2.463c.506.506.139 1.378-.58 1.383L13.803 11a.795.795 0 0 1-.803-.803l.042-6.382c.005-.72.877-1.086 1.383-.58l2.463 2.463L22.293.293a.999.999 0 1 1 1.414 1.414ZM10.197 13l-6.382.042c-.72.005-1.086.877-.58 1.383l2.463 2.463-5.405 5.405a.999.999 0 1 0 1.414 1.414l5.405-5.405 2.463 2.463c.506.506 1.378.14 1.383-.58L11 13.803a.795.795 0 0 0-.803-.803Z" />
    </svg>
  );
});

DownLeftAndUpRightToCenter.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DownLeftAndUpRightToCenter.displayName = 'DownLeftAndUpRightToCenter';

export default DownLeftAndUpRightToCenter;
