import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BlindsRaised = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22 18.172V5c0-2.757-2.243-5-5-5H5C2.243 0 0 2.243 0 5v14c0 2.757 2.243 5 5 5h10a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3v-9h15a1 1 0 0 0 1-1V2.172c1.164.413 2 1.524 2 2.828v13.172A3.004 3.004 0 0 0 18 21c0 1.654 1.346 3 3 3s3-1.346 3-3a3.004 3.004 0 0 0-2-2.828ZM5 2h11v2H2.172A3.004 3.004 0 0 1 5 2ZM2 8V6h14v2H2Zm19 14a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2Z" />
    </svg>
  );
});

BlindsRaised.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BlindsRaised.displayName = 'BlindsRaised';

export default BlindsRaised;
