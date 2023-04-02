import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GameBoardAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm-6 22v-1.586L20.414 13H22v1.586L14.586 22Zm0-9h4.586L13 17.586Zm9-8v6h-9V2h6a3 3 0 0 1 3 3ZM2 11V9.414L9.414 2H11v1.586L3.586 11Zm9-4.586V11H6.414ZM5 2h1.586L2 6.586V5a3 3 0 0 1 3-3ZM2 19v-6h9v9H5a3 3 0 0 1-3-3Zm17 3h-1.586L22 17.414V19a3 3 0 0 1-3 3Z" />
    </svg>
  );
});

GameBoardAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GameBoardAlt.displayName = 'GameBoardAlt';

export default GameBoardAlt;
