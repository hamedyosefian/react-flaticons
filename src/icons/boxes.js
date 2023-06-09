import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Boxes = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.5 16a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1Zm4.5-1v5c0 2.206-1.794 4-4 4H4c-2.206 0-4-1.794-4-4v-5c0-2.206 1.794-4 4-4h1V4c0-2.206 1.794-4 4-4h6c2.206 0 4 1.794 4 4v7h1c2.206 0 4 1.794 4 4ZM7 11h10V4c0-1.103-.897-2-2-2H9c-1.103 0-2 .897-2 2v7ZM4 22h7v-9H4c-1.103 0-2 .897-2 2v5c0 1.103.897 2 2 2Zm18-7c0-1.103-.897-2-2-2h-7v9h7c1.103 0 2-.897 2-2v-5ZM7.5 15h-2a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2ZM14 5a1 1 0 0 0-1-1h-2a1 1 0 1 0 0 2h2a1 1 0 0 0 1-1Z" />
    </svg>
  );
});

Boxes.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Boxes.displayName = 'Boxes';

export default Boxes;
