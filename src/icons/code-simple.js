import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CodeSimple = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M9 22a1 1 0 0 1-.692-.278l-7.121-6.828a4.009 4.009 0 0 1-.015-5.672l7.131-6.939a.999.999 0 1 1 1.394 1.434l-7.121 6.929a2 2 0 0 0 .01 2.819l7.106 6.813A1 1 0 0 1 9 22Zm6.698-.284 7.112-6.94a4.01 4.01 0 0 0-.014-5.671l-7.103-6.826a1 1 0 0 0-1.386 1.442l7.089 6.811c.779.78.779 2.049.009 2.82l-7.104 6.932a1 1 0 1 0 1.396 1.432Z" />
    </svg>
  );
});

CodeSimple.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodeSimple.displayName = 'CodeSimple';

export default CodeSimple;
