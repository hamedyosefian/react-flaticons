import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Curling = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m19.854 10.293-.316-1.263A3.994 3.994 0 0 0 15.657 6H7.136l.144-.65A2.983 2.983 0 0 1 10.209 3H17a1 1 0 0 0 0-2h-6.791a4.973 4.973 0 0 0-4.882 3.916L4.131 10.3A6.012 6.012 0 0 0 0 16v2a6.006 6.006 0 0 0 6 6h12a6.006 6.006 0 0 0 6-6v-2a6.011 6.011 0 0 0-4.146-5.707ZM15.657 8A2 2 0 0 1 17.6 9.515l.12.485H6.247l.444-2ZM6 12h12a4 4 0 0 1 4 4H2a4 4 0 0 1 4-4Zm12 10H6a4 4 0 0 1-4-4h20a4 4 0 0 1-4 4Z" />
    </svg>
  );
});

Curling.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Curling.displayName = 'Curling';

export default Curling;
