import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiagramProject = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M21 1h-2c-1.654 0-3 1.346-3 3H8c0-1.654-1.346-3-3-3H3C1.346 1 0 2.346 0 4v2c0 1.654 1.346 3 3 3h2c.297 0 .583-.044.854-.125l4.517 7.68A2.978 2.978 0 0 0 9.999 18v2c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3v-2c0-1.654-1.346-3-3-3h-2c-.388 0-.758.075-1.099.209l-4.422-7.52A2.985 2.985 0 0 0 8 6h8c0 1.654 1.346 3 3 3h2c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3ZM3 7c-.552 0-1-.449-1-1V4c0-.551.448-1 1-1h2c.552 0 1 .449 1 1v2c0 .551-.448 1-1 1H3Zm12 10a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h2Zm7-11c0 .551-.448 1-1 1h-2c-.552 0-1-.449-1-1V4c0-.551.448-1 1-1h2c.552 0 1 .449 1 1v2Z" />
    </svg>
  );
});

DiagramProject.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiagramProject.displayName = 'DiagramProject';

export default DiagramProject;
