import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const UndoAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.535 8.46A4.965 4.965 0 0 0 19 7H2.8l4.3-4.3a1 1 0 0 0-1.418-1.412L.732 6.237a2.5 2.5 0 0 0 0 3.535l4.95 4.951A1 1 0 1 0 7.1 13.309L2.788 9H19a3 3 0 0 1 3 3v7a3 3 0 0 1-3 3H5a1 1 0 0 0 0 2h14a5.006 5.006 0 0 0 5-5v-7a4.969 4.969 0 0 0-1.465-3.54Z" />
    </svg>
  );
});

UndoAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

UndoAlt.displayName = 'UndoAlt';

export default UndoAlt;
