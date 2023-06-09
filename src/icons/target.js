import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Target = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0zm1 21.949V20a1 1 0 0 0-2 0v1.949A10.015 10.015 0 0 1 2.051 13H4a1 1 0 0 0 0-2H2.051A10.015 10.015 0 0 1 11 2.051V4a1 1 0 0 0 2 0V2.051A10.015 10.015 0 0 1 21.949 11H20a1 1 0 0 0 0 2h1.949A10.015 10.015 0 0 1 13 21.949zM16 12a1 1 0 0 1-1 1h-2v2a1 1 0 0 1-2 0v-2H9a1 1 0 0 1 0-2h2V9a1 1 0 0 1 2 0v2h2a1 1 0 0 1 1 1z" />
    </svg>
  );
});

Target.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Target.displayName = 'Target';

export default Target;
