import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Sword = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.414.587a2.022 2.022 0 0 0-1.941-.513 16.461 16.461 0 0 0-6.479 3.983l-9.476 9.475a14.58 14.58 0 0 0-4.376-1.522 1 1 0 0 0-.286 1.979 12.632 12.632 0 0 1 5.353 2.387L2.5 20.086l-.793-.793a1 1 0 1 0-1.414 1.414l3 3a1 1 0 1 0 1.414-1.414l-.793-.793 3.709-3.71a12.609 12.609 0 0 1 2.387 5.354A1 1 0 0 0 11 24a.881.881 0 0 0 .144-.011 1 1 0 0 0 .847-1.13 14.515 14.515 0 0 0-1.522-4.376l9.475-9.476a16.52 16.52 0 0 0 4.01-6.574 1.994 1.994 0 0 0-.54-1.846zm-4.885 7.005L9.362 16.76a11.15 11.15 0 0 0-.988-1.134 11.36 11.36 0 0 0-1.133-.988l9.167-9.167a14.384 14.384 0 0 1 5.584-3.464 14.453 14.453 0 0 1-3.463 5.585z" />
    </svg>
  );
});

Sword.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sword.displayName = 'Sword';

export default Sword;
