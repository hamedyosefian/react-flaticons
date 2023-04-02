import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Aubergine = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.427 4.378a6.552 6.552 0 0 0 1.128-.546 1 1 0 0 0-1.1-1.668A6.508 6.508 0 0 1 20 2.931V1a1 1 0 0 0-2 0v1.931a6.526 6.526 0 0 1-2.451-.767 1 1 0 0 0-1.1 1.668 6.552 6.552 0 0 0 1.128.546 4.968 4.968 0 0 0-1.534 2.994c-.524 2.77-3.486 2.6-6.388 2.63C-2.04 9.608-2.68 23.567 7 24c10.327 0 17-6.28 17-16a4.973 4.973 0 0 0-1.573-3.622ZM7 22c-7.021-.328-6.38-10.473.642-10 3.542.151 7.836-.36 8.381-4.38A3 3 0 0 1 18 5.178c.094.917-.436 2.767 1 2.822 1.434-.054.907-1.9 1-2.816A3 3 0 0 1 22 8c0 8.636-5.748 14-15 14Z" />
    </svg>
  );
});

Aubergine.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Aubergine.displayName = 'Aubergine';

export default Aubergine;
