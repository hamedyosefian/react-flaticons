import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Cloud = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17.792 7.212A8 8 0 0 0 2 9a7.915 7.915 0 0 0 .9 3.671A5.49 5.49 0 0 0 5.5 23H16a8 8 0 0 0 1.792-15.788ZM16 21H5.5a3.491 3.491 0 0 1-.872-6.874 1 1 0 0 0 .554-1.564A5.936 5.936 0 0 1 4 9a6 6 0 0 1 11.94-.8 1 1 0 0 0 .858.86A6 6 0 0 1 16 21Z" />
    </svg>
  );
});

Cloud.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cloud.displayName = 'Cloud';

export default Cloud;
