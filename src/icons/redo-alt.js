import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RedoAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16.9 14.723a1 1 0 0 0 1.414 0l4.949-4.95a2.5 2.5 0 0 0 0-3.536l-4.95-4.949A1 1 0 0 0 16.9 2.7L21.2 7H5a5 5 0 0 0-5 5v7a5.006 5.006 0 0 0 5 5h14a1 1 0 0 0 0-2H5a3 3 0 0 1-3-3v-7a3 3 0 0 1 3-3h16.212L16.9 13.309a1 1 0 0 0 0 1.414Z" />
    </svg>
  );
});

RedoAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RedoAlt.displayName = 'RedoAlt';

export default RedoAlt;
