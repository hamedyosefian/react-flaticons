import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Mug = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.5 6H19V3a1 1 0 0 0 0-2H1a1 1 0 0 0 0 2v15a5.006 5.006 0 0 0 5 5h8a5.17 5.17 0 0 0 5-6h1.5a3.5 3.5 0 0 0 3.5-3.5v-4A3.5 3.5 0 0 0 20.5 6ZM14 21H6a3 3 0 0 1-3-3V8h11a1 1 0 0 0 0-2H3V3h14v15a3 3 0 0 1-3 3Zm8-7.5a1.5 1.5 0 0 1-1.5 1.5H19V8h1.5A1.5 1.5 0 0 1 22 9.5Z" />
    </svg>
  );
});

Mug.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mug.displayName = 'Mug';

export default Mug;
