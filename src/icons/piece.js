import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Piece = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 22a5.006 5.006 0 0 1-5-5v-3h2a1 1 0 0 0 0-2h-2.107a7 7 0 1 0-9.786 0H5a1 1 0 0 0 0 2h2v3a5.006 5.006 0 0 1-5 5 1 1 0 0 0 0 2h20a1 1 0 0 0 0-2ZM7 7a5 5 0 1 1 5 5 5.006 5.006 0 0 1-5-5Zm-.1 15A6.98 6.98 0 0 0 9 17v-3h6v3a6.98 6.98 0 0 0 2.105 5Z" />
    </svg>
  );
});

Piece.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Piece.displayName = 'Piece';

export default Piece;
