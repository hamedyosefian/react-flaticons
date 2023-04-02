import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CirclePhone = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm2.747 11.971-1.069.851c-2.071-.791-3.599-2.256-4.5-4.5l.851-1.069a1.143 1.143 0 0 0 0-1.616l-1-1.302a1.143 1.143 0 0 0-1.616 0l-.6.522a2.804 2.804 0 0 0-.813 2c0 4 5.429 9.143 9.143 9.143.723 0 1.449-.261 2-.813l.522-.6a1.143 1.143 0 0 0 0-1.616l-1.302-1a1.143 1.143 0 0 0-1.616 0Z" />
    </svg>
  );
});

CirclePhone.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CirclePhone.displayName = 'CirclePhone';

export default CirclePhone;
