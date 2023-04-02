import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Pot = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 4H13V2h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2h2v2H1a1 1 0 0 0 0 2h1v13a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V6h1a1 1 0 0 0 0-2Zm-3 15a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V6h16Z" />
    </svg>
  );
});

Pot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Pot.displayName = 'Pot';

export default Pot;
