import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Ticket = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 0h-.13a2.02 2.02 0 0 0-1.941 1.532 2 2 0 0 1-3.858 0A2.02 2.02 0 0 0 8.13 0H8a5.006 5.006 0 0 0-5 5v16a3 3 0 0 0 3 3h2.13a2.02 2.02 0 0 0 1.941-1.532 2 2 0 0 1 3.858 0A2.02 2.02 0 0 0 15.87 24H18a3 3 0 0 0 3-3V5a5.006 5.006 0 0 0-5-5Zm2 22-2.143-.063A4 4 0 0 0 8.13 22H6a1 1 0 0 1-1-1v-4h2a1 1 0 0 0 0-2H5V5a3 3 0 0 1 3-3l.143.063A4.01 4.01 0 0 0 12 5a4.071 4.071 0 0 0 3.893-3H16a3 3 0 0 1 3 3v10h-2a1 1 0 0 0 0 2h2v4a1 1 0 0 1-1 1Z" />
      <path d="M13 15h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

Ticket.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Ticket.displayName = 'Ticket';

export default Ticket;
