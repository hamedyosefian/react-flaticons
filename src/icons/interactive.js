import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Interactive = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.707 22.293-1.077-1.077-1.73-1.727 2.789-2.789a1 1 0 0 0-.365-1.646L14.355 11.8a2 2 0 0 0-2.561 2.56l3.263 8.969a1 1 0 0 0 .722.635 1.007 1.007 0 0 0 .217.023 1 1 0 0 0 .707-.293l2.786-2.794 1.727 1.727 1.077 1.077a1 1 0 0 0 1.414-1.414ZM16.4 21.165l-2.724-7.49 7.49 2.724Z" />
      <path d="M10 20a10 10 0 1 1 10-10 1 1 0 0 1-2 0 8 8 0 1 0-8 8 1 1 0 0 1 0 2Z" />
      <path d="M8.084 15.62a1 1 0 0 1-.383-.076 6 6 0 1 1 7.846-7.834 1 1 0 1 1-1.848.764A4 4 0 1 0 8.468 13.7a1 1 0 0 1-.384 1.924Z" />
    </svg>
  );
});

Interactive.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Interactive.displayName = 'Interactive';

export default Interactive;
