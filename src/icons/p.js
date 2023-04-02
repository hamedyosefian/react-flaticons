import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const P = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M3 24a1 1 0 0 1-1-1V5c0-2.757 2.243-5 5-5h7.5c9.929.353 9.922 14.65 0 15H4v8a1 1 0 0 1-1 1Zm1-11h10.5c7.27-.232 7.265-10.77 0-11H7C5.346 2 4 3.346 4 5v8Z" />
    </svg>
  );
});

P.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

P.displayName = 'P';

export default P;
