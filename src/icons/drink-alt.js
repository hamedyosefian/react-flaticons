import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DrinkAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.341 5.125A2.985 2.985 0 0 0 19 4h-4.327l.127-1.11a1 1 0 0 1 .99-.89H20a1 1 0 0 0 0-2h-4.21a3 3 0 0 0-2.981 2.669L12.661 4H5a3.02 3.02 0 0 0-2.944 3.556l1.512 12.066A5.008 5.008 0 0 0 8.529 24h6.941a5.01 5.01 0 0 0 4.962-4.379l1.5-11.968a2.982 2.982 0 0 0-.591-2.528ZM19 6a1 1 0 0 1 .781.375 1.068 1.068 0 0 1 .179.937L19.622 10h-5.616l.445-4Zm-14.779.374A1 1 0 0 1 5 6h7.437l-.445 4H4.374l-.35-2.784a.993.993 0 0 1 .197-.842Zm14.226 13A3.005 3.005 0 0 1 15.47 22H8.529a3 3 0 0 1-2.976-2.626L4.626 12h14.745Zm-5.009-4.264-.444 4a1 1 0 1 1-1.988-.22l.444-4a1.014 1.014 0 0 1 1.105-.884 1 1 0 0 1 .883 1.104Z" />
    </svg>
  );
});

DrinkAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DrinkAlt.displayName = 'DrinkAlt';

export default DrinkAlt;
