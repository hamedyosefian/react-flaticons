import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BoxBallot = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 8V4c0-2.206-1.794-4-4-4H9C6.794 0 5 1.794 5 4v4c-2.757 0-5 2.243-5 5v6c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-6c0-2.757-2.243-5-5-5ZM7 4c0-1.103.897-2 2-2h6c1.103 0 2 .897 2 2v8H7V4Zm-2 6v3a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-3c1.654 0 3 1.346 3 3v4H2v-4c0-1.654 1.346-3 3-3Zm14 12H5c-1.654 0-3-1.346-3-3h20c0 1.654-1.346 3-3 3Z" />
    </svg>
  );
});

BoxBallot.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BoxBallot.displayName = 'BoxBallot';

export default BoxBallot;
