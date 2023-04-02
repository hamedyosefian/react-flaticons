import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SpaceShuttle = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M464.933 193.233a183.232 183.232 0 0 0-89.804-22.456h-86.075L224.093 54.789C205.233 21.175 169.701.354 131.158.332h-24.629c-35.3 0-63.917 28.617-63.917 63.917v42.611c0 11.767 9.539 21.306 21.306 21.306s21.306-9.539 21.306-21.306V64.249c0-11.767 9.539-21.306 21.306-21.306h24.629a63.918 63.918 0 0 1 55.757 32.683l53.307 95.151H63.917C28.617 170.777 0 199.394 0 234.694v42.611c0 35.3 28.617 63.917 63.917 63.917h176.305l-53.264 95.151a63.917 63.917 0 0 1-55.8 32.683h-24.629c-11.767 0-21.306-9.539-21.306-21.306v-42.61c0-11.767-9.539-21.306-21.306-21.306s-21.306 9.539-21.306 21.306v42.611c0 35.3 28.617 63.917 63.917 63.917h24.629c38.544-.022 74.076-20.843 92.935-54.457l64.961-115.988h86.075a183.238 183.238 0 0 0 89.804-22.456c62.725-37.2 62.789-88.334.001-125.534zM356.402 298.611H127.834v-85.223H356.38c23.536 11.467 33.321 39.842 21.854 63.379a47.399 47.399 0 0 1-21.832 21.844zM42.611 277.306v-42.611c0-11.767 9.539-21.306 21.306-21.306h21.306v85.223H63.917c-11.767-.001-21.306-9.539-21.306-21.306zm401.442 4.261a126.956 126.956 0 0 1-26.419 11.015 85.22 85.22 0 0 0 0-73.292 126.934 126.934 0 0 1 26.419 11.015c32.577 18.813 32.577 32.577 0 51.262z" />
    </svg>
  );
});

SpaceShuttle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SpaceShuttle.displayName = 'SpaceShuttle';

export default SpaceShuttle;
