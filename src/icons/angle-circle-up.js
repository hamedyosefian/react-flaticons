import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const AngleCircleUp = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24A12 12 0 1 0 0 12a12.013 12.013 0 0 0 12 12Zm0-22A10 10 0 1 1 2 12 10.011 10.011 0 0 1 12 2Z" />
      <path d="M12 8a2.993 2.993 0 0 1 1.987.752c.327.291.637.574.84.777l2.873 2.824a1 1 0 1 1-1.4 1.426l-2.88-2.829a20.855 20.855 0 0 0-.759-.7 1 1 0 0 0-1.323 0c-.29.258-.57.512-.752.693L7.7 13.779a1 1 0 0 1-1.4-1.426l2.878-2.829c.2-.2.507-.48.833-.769A2.99 2.99 0 0 1 12 8Z" />
    </svg>
  );
});

AngleCircleUp.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

AngleCircleUp.displayName = 'AngleCircleUp';

export default AngleCircleUp;
