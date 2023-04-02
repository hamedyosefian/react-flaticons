import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Sun = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 11h-4.08a6.924 6.924 0 0 0-.429-1.607l3.527-2.044a1 1 0 1 0-1-1.731l-3.53 2.047a7.062 7.062 0 0 0-1.149-1.15l2.046-3.531a1 1 0 0 0-1.731-1l-2.047 3.525A6.9 6.9 0 0 0 13 5.08V1a1 1 0 0 0-2 0v4.08a6.9 6.9 0 0 0-1.607.429L7.349 1.982a1 1 0 0 0-1.731 1l2.046 3.533a7.062 7.062 0 0 0-1.149 1.15l-3.53-2.047a1 1 0 1 0-1 1.731l3.524 2.044A6.924 6.924 0 0 0 5.08 11H1a1 1 0 0 0 0 2h4.08a6.924 6.924 0 0 0 .429 1.607l-3.527 2.044a1 1 0 1 0 1 1.731l3.53-2.047a7.062 7.062 0 0 0 1.149 1.15l-2.043 3.531a1 1 0 0 0 1.731 1l2.044-3.527A6.947 6.947 0 0 0 11 18.92V23a1 1 0 0 0 2 0v-4.08a6.947 6.947 0 0 0 1.607-.429l2.044 3.527a1 1 0 0 0 1.731-1l-2.046-3.531a7.062 7.062 0 0 0 1.149-1.15l3.53 2.047a1 1 0 1 0 1-1.731l-3.527-2.044A6.924 6.924 0 0 0 18.92 13H23a1 1 0 0 0 0-2Zm-11 6c-6.608-.21-6.606-9.791 0-10 6.608.21 6.606 9.791 0 10Z" />
    </svg>
  );
});

Sun.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sun.displayName = 'Sun';

export default Sun;
