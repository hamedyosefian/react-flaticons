import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleCircleRight = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M0 12A12 12 0 1 0 12 0 12.013 12.013 0 0 0 0 12Zm22 0A10 10 0 1 1 12 2a10.011 10.011 0 0 1 10 10Z" />
      <path d="M16 12a2.993 2.993 0 0 1-.752 1.987c-.291.327-.574.637-.777.84L11.647 17.7a1 1 0 1 1-1.426-1.4l2.829-2.88c.187-.188.441-.468.7-.759a1 1 0 0 0 0-1.323 20.85 20.85 0 0 0-.693-.752L10.221 7.7a1 1 0 1 1 1.426-1.4l2.829 2.879c.2.2.48.507.769.833A2.99 2.99 0 0 1 16 12Z" />
    </svg>
  );
});

AngleCircleRight.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleCircleRight.displayName = 'AngleCircleRight';

export default AngleCircleRight;
