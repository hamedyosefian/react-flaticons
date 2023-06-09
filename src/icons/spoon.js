import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Spoon = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.918 1.082c-2.58-2.58-8.743-.04-11.1 2.316a6.2 6.2 0 0 0-.635 8L.294 22.292a1 1 0 1 0 1.414 1.414L12.6 12.816a6.179 6.179 0 0 0 8-.635c2.358-2.357 4.9-8.519 2.318-11.099Zm-3.73 9.685C15.16 14.59 9.411 8.84 13.233 4.812 14.91 3.28 19.283.956 21.5 2.5c1.451 1.443-.461 6.415-2.312 8.267Z" />
    </svg>
  );
});

Spoon.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Spoon.displayName = 'Spoon';

export default Spoon;
