import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const S = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16.151 24H7.917A5.923 5.923 0 0 1 2 18.083V17c.005-1.308 1.995-1.307 2 0v1.083A3.921 3.921 0 0 0 7.917 22h8.234c4.441-.016 5.282-6.386 1.01-7.562L6.315 11.493C-.195 9.644 1.077.077 7.849 0h8.234A5.923 5.923 0 0 1 22 5.917V7c-.005 1.308-1.995 1.307-2 0V5.917A3.921 3.921 0 0 0 16.083 2H7.849c-4.441.016-5.282 6.386-1.01 7.562l10.846 2.945c6.511 1.848 5.238 11.415-1.533 11.492Z" />
    </svg>
  );
});

S.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

S.displayName = 'S';

export default S;
