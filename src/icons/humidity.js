import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Humidity = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M10 17a1 1 0 0 1-.831-1.555l4-6a1 1 0 0 1 1.664 1.11l-4 6A1 1 0 0 1 10 17Zm9.779 3.778c6.858-7.336 1.519-14.521-4.565-19.6a4.947 4.947 0 0 0-6.426 0C2.706 6.231-2.63 13.491 4.222 20.778a11 11 0 0 0 15.556 0ZM13.919 2.7C18.7 6.777 24.43 12.966 18.364 19.364a9.043 9.043 0 0 1-12.728 0c-6.071-6.4-.325-12.6 4.445-16.662a2.958 2.958 0 0 1 3.838 0ZM8 10a1 1 0 0 0 2 0 1 1 0 0 0-2 0Zm6 6a1 1 0 0 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

Humidity.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Humidity.displayName = 'Humidity';

export default Humidity;
