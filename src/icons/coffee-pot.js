import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CoffeePot = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.113 3.157A4.963 4.963 0 0 0 17.463 0H3a1.008 1.008 0 0 0-.929 1.372L3.88 5.893A30.518 30.518 0 0 0 .027 18.47 5.01 5.01 0 0 0 5 24h11a5.043 5.043 0 0 0 4.976-5.53A30.107 30.107 0 0 0 17 5.7V2a3.093 3.093 0 0 1 3.252 1.889A25.235 25.235 0 0 1 22 13a1 1 0 0 0 2 0 27.247 27.247 0 0 0-1.887-9.843Zm-3.89 17.85A2.964 2.964 0 0 1 16 22H5c-4.4-.266-2.719-5.4-2.176-8H15a1 1 0 0 0 0-2H3.387A24.194 24.194 0 0 1 5.55 7h9.9a29.109 29.109 0 0 1 3.533 11.677 3.02 3.02 0 0 1-.76 2.33ZM15 5H5.677l-1.2-3H15Z" />
    </svg>
  );
});

CoffeePot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CoffeePot.displayName = 'CoffeePot';

export default CoffeePot;
