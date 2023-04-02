import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Egg = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24A10.011 10.011 0 0 1 2 14C2 8.493 6.294 0 12 0s10 8.493 10 14a10.011 10.011 0 0 1-10 10Zm0-22C7.739 2 4 9.479 4 14a8 8 0 0 0 16 0c0-4.521-3.739-12-8-12Zm2 9.5a1.5 1.5 0 0 0 3 0 1.5 1.5 0 0 0-3 0ZM13 7a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

Egg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Egg.displayName = 'Egg';

export default Egg;
