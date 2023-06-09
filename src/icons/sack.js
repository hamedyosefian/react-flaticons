import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Sack = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14.648 5.493c.872-.701 1.772-1.643 2.227-2.788a1.948 1.948 0 0 0-.203-1.816A2.017 2.017 0 0 0 15 0H9a2.02 2.02 0 0 0-1.672.889 1.948 1.948 0 0 0-.204 1.814c.456 1.146 1.355 2.089 2.228 2.789C4.695 7.221 1 13.159 1 18c0 3.309 2.691 6 6 6h10c3.309 0 6-2.691 6-6 0-4.841-3.695-10.779-8.352-12.507Zm.368-3.528c-.515 1.296-2.094 2.393-3.018 2.91-.923-.513-2.495-1.6-2.999-2.875l6.017-.035ZM16.999 22H7c-2.206 0-4-1.794-4-4 0-5.243 4.71-11 9-11s9 5.757 9 11c0 2.206-1.794 4-4 4Z" />
    </svg>
  );
});

Sack.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sack.displayName = 'Sack';

export default Sack;
