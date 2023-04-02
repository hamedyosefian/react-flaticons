import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Mailbox = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 3H6C2.691 3 0 5.691 0 9v9c0 1.654 1.346 3 3 3h18c1.654 0 3-1.346 3-3V9c0-3.309-2.691-6-6-6ZM2 18V9c0-2.206 1.794-4 4-4s4 1.794 4 4v9c0 .552-.449 1-1 1H3c-.551 0-1-.448-1-1Zm20 0a1 1 0 0 1-1 1h-9.172c.111-.313.172-.649.172-1V9c0-1.535-.58-2.938-1.532-4H18c2.206 0 4 1.794 4 4v9Zm-2-8v2a1 1 0 1 1-2 0v-1h-3a1 1 0 1 1 0-2h4a1 1 0 0 1 1 1ZM8 10a1 1 0 0 1-1 1H5a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

Mailbox.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Mailbox.displayName = 'Mailbox';

export default Mailbox;
