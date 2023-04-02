import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SnowBlowing = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M11.5 24a3.705 3.705 0 0 1-3.443-2.334A1 1 0 1 1 9.943 21c.559 1.477 3.073 1.249 3.057-.5a1.5 1.5 0 0 0-1.5-1.5H1a1 1 0 0 1 0-2h10.5a3.5 3.5 0 0 1 0 7Zm8.5-5a4.24 4.24 0 0 1-3.943-2.667 1 1 0 0 1 1.886-.666c.777 1.982 4.048 1.67 4.057-.667a2 2 0 0 0-2-2h-3a1 1 0 0 1 0-2h3c5.276.139 5.272 7.863 0 8ZM9.76 15a1 1 0 0 1-.707-.293L8 13.65l-1.081 1.057a1 1 0 0 1-1.414-1.414l1.057-1.057A2.029 2.029 0 0 1 7 11.9v-1.046a3.5 3.5 0 0 1-1.342-.754l-.958.557a2.017 2.017 0 0 1-.067.53l-.383 1.444a1 1 0 1 1-1.933-.512l.383-1.445-1.454-.4a1 1 0 1 1 .51-1.933l1.444.383a1.993 1.993 0 0 1 .493.2l.921-.536a3.536 3.536 0 0 1 .01-1.821l-.931-.542a1.964 1.964 0 0 1-.492.2l-1.447.382a1 1 0 1 1-.51-1.933L2.69 4.3l-.373-1.462a1 1 0 1 1 1.933-.512l.383 1.445A2.017 2.017 0 0 1 4.7 4.3l.987.574A3.489 3.489 0 0 1 7 4.146V3.1a2 2 0 0 1-.438-.333l-1.057-1.06A1 1 0 0 1 6.919.293L7.977 1.35 9.053.293a1 1 0 1 1 1.414 1.414L9.41 2.764a2.009 2.009 0 0 1-.41.317v1.065a3.489 3.489 0 0 1 1.313.729L11.3 4.3a2.017 2.017 0 0 1 .067-.53l.383-1.445a1 1 0 1 1 1.933.512L13.3 4.283l1.454.4a1 1 0 1 1-.51 1.933L12.8 6.233a1.955 1.955 0 0 1-.493-.2l-.931.542a3.536 3.536 0 0 1 .01 1.821l.921.536a2 2 0 0 1 .492-.2l1.447-.382a1 1 0 1 1 .51 1.933l-1.445.382.373 1.462a1 1 0 1 1-1.933.512l-.383-1.445a2.017 2.017 0 0 1-.067-.53l-.958-.557A3.5 3.5 0 0 1 9 10.854v1.065a2.08 2.08 0 0 1 .411.317l1.056 1.057A1 1 0 0 1 9.76 15ZM8 6a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3Zm12.5 3H18a1 1 0 0 1 0-2h2.5A1.5 1.5 0 0 0 22 5.5a1.585 1.585 0 0 0-2.846-.867 1 1 0 0 1-1.549-1.266C19.616.79 24.044 2.139 24 5.5A3.5 3.5 0 0 1 20.5 9Z" />
    </svg>
  );
});

SnowBlowing.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SnowBlowing.displayName = 'SnowBlowing';

export default SnowBlowing;
