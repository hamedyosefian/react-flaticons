import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleDoubleLeft = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24a1 1 0 0 1-.71-.29l-8.17-8.17a5 5 0 0 1 0-7.08L11.29.29a1 1 0 1 1 1.42 1.42L4.54 9.88a3 3 0 0 0 0 4.24l8.17 8.17a1 1 0 0 1 0 1.42A1 1 0 0 1 12 24Z" />
      <path d="M22 24a1 1 0 0 1-.71-.29l-9.58-9.59a3 3 0 0 1 0-4.24L21.29.29a1 1 0 1 1 1.42 1.42l-9.59 9.58a1 1 0 0 0 0 1.42l9.59 9.58a1 1 0 0 1 0 1.42A1 1 0 0 1 22 24Z" />
    </svg>
  );
});

AngleDoubleLeft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleDoubleLeft.displayName = 'AngleDoubleLeft';

export default AngleDoubleLeft;
