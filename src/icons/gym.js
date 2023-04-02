import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Gym = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.942 6.837 20.76 4.654l.947-.947a1 1 0 1 0-1.414-1.414l-.947.947-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-5.894 5.894-2.183-2.182a3.7 3.7 0 0 0-5.105 0 3.609 3.609 0 0 0 0 5.106l2.182 2.182-.947.947a1 1 0 1 0 1.414 1.414l.947-.947 2.183 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105L9.76 15.655l5.9-5.895 2.182 2.182a3.609 3.609 0 0 0 5.105 0 3.608 3.608 0 0 0 0-5.105zM11 20.39a1.6 1.6 0 0 1-.472 1.138 1.647 1.647 0 0 1-2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779A1.6 1.6 0 0 1 11 20.39zm10.528-9.862a1.647 1.647 0 0 1-2.277 0l-5.779-5.779a1.61 1.61 0 1 1 2.277-2.277l5.779 5.779a1.609 1.609 0 0 1 0 2.277z" />
    </svg>
  );
});

Gym.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gym.displayName = 'Gym';

export default Gym;
