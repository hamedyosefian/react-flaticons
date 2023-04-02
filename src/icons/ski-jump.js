import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SkiJump = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.757 12.266a3.976 3.976 0 0 1-2.067 2.257L1.418 23.908a1 1 0 0 1-.84-1.816l4.429-2.05C5.006 20.027 5 20.015 5 20v-6.734a5.957 5.957 0 0 1 1.756-4.242L9.78 6H2a1 1 0 0 1 0-2h8.507a4.008 4.008 0 0 1 2.566.931l.948.792a3 3 0 0 1 .1 4.338l-3.427 3.427a1 1 0 0 1-1.414-1.414l3.427-3.428a1 1 0 0 0-.017-1.431l-.707-.589-3.813 3.812A3.973 3.973 0 0 0 7 13.266v5.854l13.849-6.411a2 2 0 0 0 .963-2.656 1 1 0 1 1 1.812-.846 3.975 3.975 0 0 1 .133 3.059ZM16.5 4.982a2.5 2.5 0 1 0-2.5-2.5 2.5 2.5 0 0 0 2.5 2.5Z" />
    </svg>
  );
});

SkiJump.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SkiJump.displayName = 'SkiJump';

export default SkiJump;
