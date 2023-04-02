import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MobileNotch = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15.045 0h-6.09A5.006 5.006 0 0 0 4 4.999v14c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V5a5.007 5.007 0 0 0-4.955-5ZM18 18.999c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V5a3.006 3.006 0 0 1 2.411-2.942l.694 1.389A1 1 0 0 0 10 4h4c.379 0 .725-.214.895-.553l.694-1.389A3.005 3.005 0 0 1 18 5v14Zm-5 1h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
    </svg>
  );
});

MobileNotch.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MobileNotch.displayName = 'MobileNotch';

export default MobileNotch;
