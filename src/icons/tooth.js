import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Tooth = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15.909 24A2.912 2.912 0 0 1 13 21.091V15a1 1 0 0 0-2 0v6.091a2.91 2.91 0 0 1-5.418 1.476C3.186 18.463 0 12.279 0 6a5.785 5.785 0 0 1 6-6 12.8 12.8 0 0 1 3.915.615A7.037 7.037 0 0 0 12 1a7.037 7.037 0 0 0 2.085-.385A12.792 12.792 0 0 1 18 0a5.785 5.785 0 0 1 6 6c0 6.278-3.186 12.462-5.582 16.567A2.911 2.911 0 0 1 15.909 24ZM12 12a3 3 0 0 1 3 3v6.091a.911.911 0 0 0 1.691.469C18.97 17.654 22 11.793 22 6a3.85 3.85 0 0 0-4-4 10.752 10.752 0 0 0-3.358.536A8.959 8.959 0 0 1 12 3a8.953 8.953 0 0 1-2.642-.464A10.758 10.758 0 0 0 6 2C2.045 2 2 5.837 2 6c0 5.794 3.03 11.655 5.31 15.56A.91.91 0 0 0 9 21.091V15a3 3 0 0 1 3-3Z" />
    </svg>
  );
});

Tooth.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tooth.displayName = 'Tooth';

export default Tooth;
