import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Cube = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.527 4.217 14.5.737a5.015 5.015 0 0 0-5 0l-6.027 3.48a5.014 5.014 0 0 0-2.5 4.33v6.96a5.016 5.016 0 0 0 2.5 4.331L9.5 23.317a5.012 5.012 0 0 0 5 0l6.027-3.479a5.016 5.016 0 0 0 2.5-4.331v-6.96a5.014 5.014 0 0 0-2.5-4.33ZM10.5 2.47a3 3 0 0 1 3 0l6.027 3.479a2.945 2.945 0 0 1 .429.33l-6.193 3.575a3.53 3.53 0 0 1-3.526 0L4.044 6.279a2.945 2.945 0 0 1 .429-.33ZM4.473 18.105a3.008 3.008 0 0 1-1.5-2.6V8.547a2.893 2.893 0 0 1 .071-.535l6.193 3.575a5.491 5.491 0 0 0 1.763.635v9.569a2.892 2.892 0 0 1-.5-.206Zm16.554-2.6a3.008 3.008 0 0 1-1.5 2.6l-6.027 3.48a2.892 2.892 0 0 1-.5.206v-9.569a5.491 5.491 0 0 0 1.763-.635l6.193-3.575a2.893 2.893 0 0 1 .071.535Z" />
    </svg>
  );
});

Cube.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Cube.displayName = 'Cube';

export default Cube;
