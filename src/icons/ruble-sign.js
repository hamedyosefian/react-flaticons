import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RubleSign = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M14.5 15c4.136 0 7.5-3.364 7.5-7.5S18.636 0 14.5 0H10C7.243 0 5 2.243 5 5v8H3a1 1 0 1 0 0 2h2v2H3a1 1 0 1 0 0 2h2v4a1 1 0 1 0 2 0v-4h8a1 1 0 1 0 0-2H7v-2h7.5ZM7 5c0-1.654 1.346-3 3-3h4.5C17.533 2 20 4.468 20 7.5S17.533 13 14.5 13H7V5Z" />
    </svg>
  );
});

RubleSign.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RubleSign.displayName = 'RubleSign';

export default RubleSign;
