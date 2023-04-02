import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MobileButton = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 24H9c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5v14c0 2.757-2.243 5-5 5ZM9 2C7.346 2 6 3.346 6 5v14c0 1.654 1.346 3 3 3h6c1.654 0 3-1.346 3-3V5c0-1.654-1.346-3-3-3H9Zm5 17a1 1 0 0 0-1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 1-1Z" />
    </svg>
  );
});

MobileButton.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MobileButton.displayName = 'MobileButton';

export default MobileButton;
