import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BlindsOpen = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm1 6h16a1 1 0 1 0 0-2H1a1 1 0 1 0 0 2Zm16 3H1a1 1 0 1 0 0 2h16a1 1 0 1 0 0-2Zm-2 5H1a1 1 0 1 0 0 2h14a1 1 0 1 0 0-2Zm9 1c0 1.654-1.346 3-3 3s-3-1.346-3-3c0-1.304.836-2.415 2-2.828V5c0-1.654-1.346-3-3-3H1a1 1 0 1 1 0-2h16c2.757 0 5 2.243 5 5v13.172c1.164.413 2 1.524 2 2.828Zm-2 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0Z" />
    </svg>
  );
});

BlindsOpen.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BlindsOpen.displayName = 'BlindsOpen';

export default BlindsOpen;
