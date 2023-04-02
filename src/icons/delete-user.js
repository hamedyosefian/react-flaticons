import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DeleteUser = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9 12a6 6 0 1 0-6-6 6.006 6.006 0 0 0 6 6zM9 2a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm9 21a1 1 0 0 1-2 0 7 7 0 0 0-14 0 1 1 0 0 1-2 0 9 9 0 0 1 18 0zm5.707-8.707a1 1 0 1 1-1.414 1.414L20.5 13.914l-1.793 1.793a1 1 0 0 1-1.414-1.414l1.793-1.793-1.793-1.793a1 1 0 0 1 1.414-1.414l1.793 1.793 1.793-1.793a1 1 0 0 1 1.414 1.414L21.914 12.5z" />
    </svg>
  );
});

DeleteUser.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DeleteUser.displayName = 'DeleteUser';

export default DeleteUser;
