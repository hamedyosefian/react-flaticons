import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChessKnight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 22V10c0-.091-.109-9.093-9.572-9.987a2.838 2.838 0 0 0-2.881 1.8c-.992 2.47-2.886 3.583-5.424 4.5A3.235 3.235 0 0 0 2 9.355 2.649 2.649 0 0 0 4.645 12H9.82c-1.244 5.927-6.032 9.308-7.1 10H2a1 1 0 0 0 0 2h20a1 1 0 0 0 0-2ZM11.992 11.124A1 1 0 0 0 11 10H4.645A.645.645 0 0 1 4 9.355a1.231 1.231 0 0 1 .8-1.164c2.51-.9 5.256-2.275 6.6-5.631a.858.858 0 0 1 .839-.56A8.1 8.1 0 0 1 20 10v12H6.012a17.517 17.517 0 0 0 5.98-10.876Z" />
    </svg>
  );
});

ChessKnight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChessKnight.displayName = 'ChessKnight';

export default ChessKnight;
