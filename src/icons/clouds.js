import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Clouds = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M3 21.123a1 1 0 0 1-.567-.177 5.37 5.37 0 0 1 .51-9.3 7.648 7.648 0 0 1-.8-5.179 8 8 0 0 1 15.49-.841 1.085 1.085 0 0 0 .722.733 7.982 7.982 0 0 1 5.312 5.354 1 1 0 0 1-1.916.572 5.988 5.988 0 0 0-3.983-4.014 3.1 3.1 0 0 1-2.044-2.051 6 6 0 1 0-11.06 4.512 1.994 1.994 0 0 1-.792 2.687 3.37 3.37 0 0 0-.3 5.881A1 1 0 0 1 3 21.123ZM19.1 24a5.322 5.322 0 0 0 1.062-.158 4.946 4.946 0 0 0 3.7-3.7 5.012 5.012 0 0 0-3.557-6s-.629-.145-.766-.471a6 6 0 0 0-11.367.856 6.38 6.38 0 0 0-.057 2.732 3.5 3.5 0 0 0 .451 6.589A3.8 3.8 0 0 0 9.4 24Zm-1.4-9.556a2.647 2.647 0 0 0 2.088 1.633 3.02 3.02 0 0 1 2.132 3.62 2.978 2.978 0 0 1-2.2 2.194 3.27 3.27 0 0 1-.655.082c-1.665.033-8.271.038-9.6 0a1.709 1.709 0 0 1-.379-.055A1.471 1.471 0 0 1 8.057 20.9a1.493 1.493 0 0 1 .85-1.795 2.017 2.017 0 0 0 1.18-2.305 3.991 3.991 0 0 1 .031-1.792 4 4 0 0 1 7.577-.562Z" />
    </svg>
  );
});

Clouds.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Clouds.displayName = 'Clouds';

export default Clouds;
