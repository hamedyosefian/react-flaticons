import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LifeRing = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.155 19.741a11.954 11.954 0 0 0 0-15.482l.86-.86A1 1 0 0 0 20.6 1.985l-.86.86a11.954 11.954 0 0 0-15.482 0l-.86-.86A1 1 0 0 0 1.985 3.4l.86.86a11.954 11.954 0 0 0 0 15.482l-.86.86A1 1 0 1 0 3.4 22.015l.86-.86a11.954 11.954 0 0 0 15.482 0l.86.86a1 1 0 0 0 1.413-1.415ZM22 12a9.949 9.949 0 0 1-2.262 6.324l-3.571-3.571a4.966 4.966 0 0 0 0-5.506l3.571-3.571A9.949 9.949 0 0 1 22 12ZM9 12a3 3 0 1 1 3 3 3 3 0 0 1-3-3Zm3-10a9.949 9.949 0 0 1 6.324 2.262l-3.571 3.571a4.966 4.966 0 0 0-5.506 0L5.676 4.262A9.949 9.949 0 0 1 12 2ZM2 12a9.949 9.949 0 0 1 2.262-6.324l3.571 3.571a4.966 4.966 0 0 0 0 5.506l-3.571 3.571A9.949 9.949 0 0 1 2 12Zm10 10a9.949 9.949 0 0 1-6.324-2.262l3.571-3.571a4.966 4.966 0 0 0 5.506 0l3.571 3.571A9.949 9.949 0 0 1 12 22Z" />
    </svg>
  );
});

LifeRing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LifeRing.displayName = 'LifeRing';

export default LifeRing;
