import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Avocado = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 20c-6.14.017-4.438-10.17 0-10 4.44-.169 6.139 10.018 0 10Zm0-8c-1.93-.094-3.339 6.106 0 6 3.339.105 1.93-6.093 0-6Zm0 12c-5.514 0-10-4.119-10-9.182C1.981 2.592 13.721-5.417 17.589 4.355c.905 3.763 4.787 6.352 4.411 10.463C22 19.881 17.514 24 12 24Zm0-22c-6.37.261-14.267 18.97 0 20 6.356.142 10.443-6.863 6.445-11.68a16.967 16.967 0 0 1-2.772-5.39A3.779 3.779 0 0 0 12 2Z" />
    </svg>
  );
});

Avocado.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Avocado.displayName = 'Avocado';

export default Avocado;
