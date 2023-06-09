import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Road = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.46 4.134A4.992 4.992 0 0 0 16.536 0H7.451a4.992 4.992 0 0 0-4.926 4.138l-2.449 14A5 5 0 0 0 5 24h14a5 5 0 0 0 4.925-5.866Zm-.16 16.795A3 3 0 0 1 19 22H5a3 3 0 0 1-2.955-3.518l2.449-14A3 3 0 0 1 7.451 2h9.085a3 3 0 0 1 2.954 2.48l2.463 14a3 3 0 0 1-.653 2.449ZM13 5v2a1 1 0 0 1-2 0V5a1 1 0 0 1 2 0Zm0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Zm0 6v2a1 1 0 0 1-2 0v-2a1 1 0 0 1 2 0Z" />
    </svg>
  );
});

Road.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Road.displayName = 'Road';

export default Road;
