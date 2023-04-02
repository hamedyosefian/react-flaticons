import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MoneyCheck = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 22H5c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v10c0 2.757-2.243 5-5 5ZM5 4C3.346 4 2 5.346 2 7v10c0 1.654 1.346 3 3 3h14c1.654 0 3-1.346 3-3V7c0-1.654-1.346-3-3-3H5Zm13 9h-4c-1.103 0-2-.897-2-2V9c0-1.103.897-2 2-2h4c1.103 0 2 .897 2 2v2c0 1.103-.897 2-2 2Zm-4-4v2h4.001V9H14Zm-4 3a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h4a1 1 0 0 0 1-1Zm10 4a1 1 0 0 0-1-1H5a1 1 0 0 0 0 2h14a1 1 0 0 0 1-1Z" />
    </svg>
  );
});

MoneyCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoneyCheck.displayName = 'MoneyCheck';

export default MoneyCheck;
