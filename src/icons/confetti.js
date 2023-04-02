import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Confetti = forwardRef(({ color, size, ...rest }, ref) => {
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
      <circle cx="5" cy="13" r="1" />
      <circle cx="1" cy="9" r="1" />
      <circle cx="5" cy="5" r="1" />
      <circle cx="1" cy="1" r="1" />
      <circle cx="23" cy="13" r="1" />
      <circle cx="19" cy="9" r="1" />
      <circle cx="23" cy="5" r="1" />
      <circle cx="19" cy="1" r="1" />
      <circle cx="14" cy="23" r="1" />
      <circle cx="10" cy="19" r="1" />
      <circle cx="14" cy="15" r="1" />
      <circle cx="10" cy="11" r="1" />
      <path d="M15 3a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM7 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2ZM23 19a2 2 0 0 1-2-2 1 1 0 0 0-2 0 2 2 0 0 1-2 2 1 1 0 0 0 0 2 2 2 0 0 1 2 2 1 1 0 0 0 2 0 2 2 0 0 1 2-2 1 1 0 0 0 0-2Z" />
    </svg>
  );
});

Confetti.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Confetti.displayName = 'Confetti';

export default Confetti;
