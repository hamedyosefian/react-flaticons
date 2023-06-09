import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Dizzy = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.245 20 0a10.011 10.011 0 0 1-10 10Zm3-5a3 3 0 0 1-6 0 3 3 0 0 1 6 0Zm3.707-9.293L17.414 9l1.293 1.293a1 1 0 0 1-1.414 1.414L16 10.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L14.586 9l-1.293-1.293a1 1 0 0 1 1.414-1.414L16 7.586l1.293-1.293a1 1 0 0 1 1.414 1.414ZM8 10.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L6.586 9 5.293 7.707a1 1 0 0 1 1.414-1.414L8 7.586l1.293-1.293a1 1 0 0 1 1.414 1.414L9.414 9l1.293 1.293a1 1 0 0 1-1.414 1.414Z" />
    </svg>
  );
});

Dizzy.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Dizzy.displayName = 'Dizzy';

export default Dizzy;
