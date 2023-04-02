import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Resources = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 3H13a1 1 0 0 0-1 1v3.27L9.6 3.11a2 2 0 0 0-3.47 0l-6 10.39a1 1 0 0 0 0 1A1 1 0 0 0 1 15h4.29A6.91 6.91 0 0 0 5 17a7 7 0 0 0 14 0 6.91 6.91 0 0 0-.29-2H23a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1ZM2.73 13l5.13-8.89L11.29 10a7 7 0 0 0-5 3ZM12 22a5 5 0 1 1 5-5 5 5 0 0 1-5 5Zm10-9h-4.26A7.07 7.07 0 0 0 14 10.29V5h8Z" />
    </svg>
  );
});

Resources.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Resources.displayName = 'Resources';

export default Resources;
