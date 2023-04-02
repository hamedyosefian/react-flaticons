import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Lettuce = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.566 9.8a4 4 0 0 0-4.973-5.526 4.669 4.669 0 0 0-2.4-1.2.652.652 0 0 1-.421-.409 4 4 0 0 0-7.542 0 .668.668 0 0 1-.4.4 4.715 4.715 0 0 0-2.421 1.2A4 4 0 0 0 .434 9.8 1.53 1.53 0 0 1 .4 11.062a4.972 4.972 0 0 0 1.315 5.682A3.213 3.213 0 0 1 2 17a5.019 5.019 0 0 0 7.11 4.524c3.376 3.326 2.412 3.311 5.78 0A5.013 5.013 0 0 0 22 17c.019-.029.295-.252.295-.252a4.974 4.974 0 0 0 1.305-5.686 1.53 1.53 0 0 1-.034-1.262ZM7 20a3 3 0 0 1-3-3 2.17 2.17 0 0 0-.975-1.764A2.931 2.931 0 0 1 2 13c.15-1.407 1.03-2.8.213-4.114a2 2 0 0 1 2.043-2.86 4.428 4.428 0 0 0 .757 4.3 1.276 1.276 0 0 1 .219 1.186A5.032 5.032 0 0 0 7 17a4.966 4.966 0 0 0 .9 2.848A3.012 3.012 0 0 1 7 20Zm8-3a3 3 0 0 1-2 2.816V9a1 1 0 0 0-2 0v10.816A3 3 0 0 1 9 17a2.408 2.408 0 0 0-.975-1.764 2.938 2.938 0 0 1-.888-3.113 3.249 3.249 0 0 0-.578-3.064 2.459 2.459 0 0 1-.531-1.942A2.546 2.546 0 0 1 8.174 5.04a2.644 2.644 0 0 0 1.939-1.7 2 2 0 0 1 3.774 0 2.646 2.646 0 0 0 1.942 1.706 2.544 2.544 0 0 1 2.143 2.076 2.459 2.459 0 0 1-.531 1.942C16.393 10.193 16.773 11.646 17 13a2.937 2.937 0 0 1-1.03 2.241A2.4 2.4 0 0 0 15 17Zm5.909-1.71A2.1 2.1 0 0 0 20 17a3 3 0 0 1-3.892 2.851 4.834 4.834 0 0 0 .883-2.79 5.188 5.188 0 0 0 1.777-5.547 1.276 1.276 0 0 1 .219-1.186 4.429 4.429 0 0 0 .757-4.3 2 2 0 0 1 2.042 2.861C20.97 10.2 21.85 11.592 22 13a2.972 2.972 0 0 1-1.091 2.29Z" />
    </svg>
  );
});

Lettuce.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Lettuce.displayName = 'Lettuce';

export default Lettuce;
