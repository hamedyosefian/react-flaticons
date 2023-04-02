import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RoomService = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 19v-2A11.01 11.01 0 0 0 13 6.051V4.723a2 2 0 1 0-2 0v1.328A11.01 11.01 0 0 0 1 17v2a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM3 17c.473-11.934 17.531-11.925 18 0v2H3Z" />
    </svg>
  );
});

RoomService.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RoomService.displayName = 'RoomService';

export default RoomService;
