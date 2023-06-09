import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Hand = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.951 12.3-.705-5A5.024 5.024 0 0 0 18.3 3H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h2.712l1.914 3.878a3.037 3.037 0 0 0 5.721-1.837L15.011 18H19a5 5 0 0 0 4.951-5.7ZM5 5h2v11H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3Zm16.264 9.968A3 3 0 0 1 19 16h-5.167a1 1 0 0 0-.987 1.162l.528 3.2a1.024 1.024 0 0 1-.233.84 1.07 1.07 0 0 1-1.722-.212L9.23 16.558a1 1 0 0 0-.23-.292V5h9.3a3.012 3.012 0 0 1 2.97 2.581l.706 5a3 3 0 0 1-.712 2.387Z" />
    </svg>
  );
});

Hand.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Hand.displayName = 'Hand';

export default Hand;
