import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Inbox = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21 12h-3a2 2 0 0 0-2 2 2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2 2 2 0 0 0-2-2H3a3 3 0 0 0-3 3v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a3 3 0 0 0-3-3Zm1 7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1h3a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h3a1 1 0 0 1 1 1ZM3 10h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2ZM3 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2Z" />
    </svg>
  );
});

Inbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Inbox.displayName = 'Inbox';

export default Inbox;
