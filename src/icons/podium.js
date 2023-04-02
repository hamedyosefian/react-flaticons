import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Podium = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 10H4V7c0-1.654 1.346-3 3-3h.172A3.004 3.004 0 0 0 10 6h3c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3a3.004 3.004 0 0 0-2.828 2H7C4.243 2 2 4.243 2 7v3H1a1 1 0 0 0 0 2h1.153l1.304 7.821A4.984 4.984 0 0 0 8.389 24h7.223a4.983 4.983 0 0 0 4.932-4.179L21.848 12h1.153a1 1 0 0 0 0-2ZM10 2h3c.551 0 1 .449 1 1s-.449 1-1 1h-3c-.551 0-1-.449-1-1s.449-1 1-1Zm8.571 17.493A2.991 2.991 0 0 1 15.612 22H8.389a2.99 2.99 0 0 1-2.959-2.507L4.181 12H19.82l-1.249 7.493Z" />
    </svg>
  );
});

Podium.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Podium.displayName = 'Podium';

export default Podium;
