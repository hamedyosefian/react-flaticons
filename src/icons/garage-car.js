import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GarageCar = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m21.8 5.579-7-4.724a4.981 4.981 0 0 0-5.6 0l-7 4.724A4.992 4.992 0 0 0 0 9.724V19a5.006 5.006 0 0 0 5 5 1 1 0 0 0 1-1V13a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a1 1 0 0 0 1 1 5.006 5.006 0 0 0 5-5V9.724a4.993 4.993 0 0 0-2.2-4.145ZM22 19a3.006 3.006 0 0 1-2 2.829V13a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v8.829A3.006 3.006 0 0 1 2 19V9.724a3 3 0 0 1 1.322-2.487l7-4.723a2.979 2.979 0 0 1 3.356 0l7 4.723A3 3 0 0 1 22 9.724Zm-6.1-2.907A2.99 2.99 0 0 0 13.036 14h-2.072A2.99 2.99 0 0 0 8.1 16.093l-.672 2.119C7.205 19.31 6.256 21.814 8 22v1a1 1 0 0 0 2 0v-1h4v1a1 1 0 0 0 2 0v-1c1.744-.188.8-2.688.568-3.789ZM10.964 16h2.072a1 1 0 0 1 .953.7L14.4 18H9.6l.414-1.3a1 1 0 0 1 .95-.7Z" />
    </svg>
  );
});

GarageCar.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GarageCar.displayName = 'GarageCar';

export default GarageCar;
