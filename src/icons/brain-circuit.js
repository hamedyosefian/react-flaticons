import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BrainCircuit = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 11c0-1.568-.752-3.04-2-3.979V7a4.007 4.007 0 0 0-3.102-3.898A4.008 4.008 0 0 0 15 0a3.992 3.992 0 0 0-3 1.357A3.989 3.989 0 0 0 9 0a4.007 4.007 0 0 0-3.898 3.102A4.008 4.008 0 0 0 2 7v.021A4.99 4.99 0 0 0 0 11c0 .886.235 1.737.686 2.5A4.89 4.89 0 0 0 0 16c0 1.686.858 3.244 2.267 4.166A5.466 5.466 0 0 0 7.5 24a5.495 5.495 0 0 0 4.5-2.342A5.498 5.498 0 0 0 16.5 24a5.465 5.465 0 0 0 5.233-3.834A4.981 4.981 0 0 0 24 16a4.88 4.88 0 0 0-.686-2.5A4.89 4.89 0 0 0 24 11ZM7.5 22a3.477 3.477 0 0 1-3.401-2.712 1 1 0 0 0-.502-.656A2.992 2.992 0 0 1 2 16.001c0-.675.234-1.322.679-1.872a1 1 0 0 0 0-1.257A2.955 2.955 0 0 1 2 11c0-1.07.591-2.067 1.543-2.603a.999.999 0 0 0 .494-1.045A2.039 2.039 0 0 1 4 7c0-1.103.897-2 2-2a1 1 0 0 0 1-1c0-1.103.897-2 2-2s2 .897 2 2v4H8.732A1.999 1.999 0 0 0 5 9a2 2 0 0 0 3.732 1H11v5H8.732A1.999 1.999 0 0 0 5 16a2 2 0 0 0 3.732 1H11v1.5c0 1.93-1.57 3.5-3.5 3.5Zm13.821-7.872c.444.549.679 1.196.679 1.872a2.988 2.988 0 0 1-1.597 2.631 1 1 0 0 0-.502.656 3.478 3.478 0 0 1-3.401 2.712c-1.93 0-3.5-1.57-3.5-3.5v-4.5h2c1.654 0 3-1.346 3-3v-.268a1.999 1.999 0 0 0-1-3.732 2 2 0 0 0-1 3.732v.268c0 .551-.448 1-1 1h-2V4c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 0 0 1 1c1.103 0 2 .897 2 2 0 .121-.018.237-.037.352a.999.999 0 0 0 .494 1.045A3 3 0 0 1 22 11c0 .675-.234 1.322-.679 1.872a1 1 0 0 0 0 1.257Z" />
    </svg>
  );
});

BrainCircuit.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BrainCircuit.displayName = 'BrainCircuit';

export default BrainCircuit;
