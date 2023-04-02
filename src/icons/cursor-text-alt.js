import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CursorTextAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 17.351V6.649A3.492 3.492 0 1 0 17.351 2H6.649A3.492 3.492 0 1 0 2 6.649v10.7A3.492 3.492 0 1 0 6.649 22h10.7A3.492 3.492 0 1 0 22 17.351ZM17.051 20H6.949A3.485 3.485 0 0 0 4 17.051V6.949A3.485 3.485 0 0 0 6.949 4h10.1A3.485 3.485 0 0 0 20 6.949v10.1A3.485 3.485 0 0 0 17.051 20ZM20.5 2A1.5 1.5 0 1 1 19 3.5 1.5 1.5 0 0 1 20.5 2Zm-17 0A1.5 1.5 0 1 1 2 3.5 1.5 1.5 0 0 1 3.5 2Zm0 20A1.5 1.5 0 1 1 5 20.5 1.5 1.5 0 0 1 3.5 22Zm17 0a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5ZM13 9v3h1a1 1 0 0 1 0 2h-1v1a1 1 0 0 0 1 1 1 1 0 0 1 0 2 2.981 2.981 0 0 1-2-.78 2.981 2.981 0 0 1-2 .78 1 1 0 0 1 0-2 1 1 0 0 0 1-1v-1h-1a1 1 0 0 1 0-2h1V9a1 1 0 0 0-1-1 1 1 0 0 1 0-2 2.981 2.981 0 0 1 2 .78A2.981 2.981 0 0 1 14 6a1 1 0 0 1 0 2 1 1 0 0 0-1 1Z" />
    </svg>
  );
});

CursorTextAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CursorTextAlt.displayName = 'CursorTextAlt';

export default CursorTextAlt;
