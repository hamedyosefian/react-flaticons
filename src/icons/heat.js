import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Heat = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20.016 24a1 1 0 0 1-.964-1.269c.116-.419.247-.808.377-1.191 1.285-2.684.18-6.683-1.256-8.554a12.313 12.313 0 0 1-.814-12.41 1 1 0 0 1 1.811.848 10.307 10.307 0 0 0 .686 10.483c1.675 2.137 2.986 7.113 1.467 10.271a21.67 21.67 0 0 0-.345 1.091 1 1 0 0 1-.962.731Zm-7 0a1 1 0 0 1-.964-1.269c.116-.419.247-.808.377-1.191 1.285-2.684.18-6.683-1.256-8.554a12.313 12.313 0 0 1-.814-12.41 1 1 0 0 1 1.811.848 10.307 10.307 0 0 0 .686 10.483c1.675 2.137 2.986 7.113 1.467 10.271a21.67 21.67 0 0 0-.345 1.091 1 1 0 0 1-.962.731Zm-7 0a1 1 0 0 1-.964-1.269c.116-.419.247-.808.377-1.191 1.285-2.684.18-6.683-1.256-8.554A12.313 12.313 0 0 1 3.359.576a1 1 0 0 1 1.811.848 10.307 10.307 0 0 0 .686 10.483c1.675 2.137 2.986 7.113 1.467 10.271a21.67 21.67 0 0 0-.345 1.091 1 1 0 0 1-.962.731Z" />
    </svg>
  );
});

Heat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Heat.displayName = 'Heat';

export default Heat;
