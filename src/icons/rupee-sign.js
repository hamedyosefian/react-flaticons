import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RupeeSign = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M15 7.5C15 3.364 11.636 0 7.5 0H5C2.243 0 0 2.243 0 5v18a1 1 0 1 0 2 0v-8h5.412l4.714 8.485a1 1 0 1 0 1.748-.97l-4.332-7.797C12.688 13.827 15 10.929 15 7.501ZM7.5 13H2V5c0-1.654 1.346-3 3-3h2.5C10.533 2 13 4.468 13 7.5S10.533 13 7.5 13ZM24 21c0 1.654-1.346 3-3 3h-2.268a3.01 3.01 0 0 1-2.598-1.499 1 1 0 1 1 1.73-1.002c.179.31.511.501.867.501h2.268a1 1 0 0 0 1-1 .77.77 0 0 0-.644-.76l-3.041-.507A2.763 2.763 0 0 1 15.999 17c0-1.654 1.346-3 3-3h2.268a3.01 3.01 0 0 1 2.598 1.499 1 1 0 1 1-1.73 1.002 1.003 1.003 0 0 0-.867-.501H19a1 1 0 0 0-1 1 .77.77 0 0 0 .645.761l3.04.507A2.76 2.76 0 0 1 24 21Z" />
    </svg>
  );
});

RupeeSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RupeeSign.displayName = 'RupeeSign';

export default RupeeSign;
