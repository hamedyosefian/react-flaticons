import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Rhombus = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 23.928a4.99 4.99 0 0 1-3.536-1.462l-6.93-6.931a5 5 0 0 1 0-7.07l6.93-6.931a5.008 5.008 0 0 1 7.072 0l6.93 6.931a5 5 0 0 1 0 7.07l-6.93 6.931A4.99 4.99 0 0 1 12 23.928Zm0-21.857a2.992 2.992 0 0 0-2.122.877l-6.93 6.931a3 3 0 0 0 0 4.242l6.93 6.931a3 3 0 0 0 4.244 0l6.93-6.931a3 3 0 0 0 0-4.242l-6.93-6.931A2.992 2.992 0 0 0 12 2.071Z" />
    </svg>
  );
});

Rhombus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Rhombus.displayName = 'Rhombus';

export default Rhombus;
