import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChessKing = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.328 10.222a5.038 5.038 0 0 0-3.27-2.389A40.142 40.142 0 0 0 13 7.014V5h2a1 1 0 0 0 0-2h-2V1a1 1 0 0 0-2 0v2H9a1 1 0 0 0 0 2h2v2.014a40.142 40.142 0 0 0-7.058.819A5 5 0 0 0 .249 14.27L3.089 22H3a1 1 0 0 0 0 2h18a1 1 0 0 0 0-2h-.089l2.856-7.774a5.011 5.011 0 0 0-.439-4.004Zm-1.453 3.358L18.781 22H5.219l-3.078-8.376a3 3 0 0 1 2.231-3.838A38.169 38.169 0 0 1 12 9a38.169 38.169 0 0 1 7.628.786 2.992 2.992 0 0 1 1.972 1.437 2.947 2.947 0 0 1 .275 2.357Z" />
    </svg>
  );
});

ChessKing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessKing.displayName = 'ChessKing';

export default ChessKing;
