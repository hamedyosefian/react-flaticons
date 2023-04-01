import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const HandHoldingHeart = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M8.965 24H4a4 4 0 0 1-4-4v-5a4 4 0 0 1 4-4h8.857a3.144 3.144 0 0 1 2.69 1.519l3.217-3.535a3.01 3.01 0 0 1 4.254-.2 3.022 3.022 0 0 1 .217 4.23l-6.8 7.637A10.012 10.012 0 0 1 8.965 24ZM4 13a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h4.965a8.005 8.005 0 0 0 5.972-2.678l6.805-7.638a1.015 1.015 0 0 0-.072-1.421 1.029 1.029 0 0 0-.728-.263 1 1 0 0 0-.7.329L15.816 15.2a3.158 3.158 0 0 1-2.516 2.052l-5.161.738a1 1 0 0 1-.284-1.98l5.162-.737a1.142 1.142 0 0 0-.16-2.273Zm7-3.926a1.986 1.986 0 0 1-1.247-.436C8.041 7.264 6 5.2 6 3.2A3.109 3.109 0 0 1 9 0a2.884 2.884 0 0 1 2 .817A2.884 2.884 0 0 1 13 0a3.109 3.109 0 0 1 3 3.2c0 2-2.041 4.064-3.754 5.439A1.986 1.986 0 0 1 11 9.074ZM9 2a1.115 1.115 0 0 0-1 1.2c0 .9 1.151 2.39 3.006 3.879C12.849 5.59 14 4.1 14 3.2A1.115 1.115 0 0 0 13 2a1.115 1.115 0 0 0-1 1.2 1 1 0 0 1-2 0A1.115 1.115 0 0 0 9 2Z" />
    </svg>
  );
});

HandHoldingHeart.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

HandHoldingHeart.displayName = 'HandHoldingHeart';

export default HandHoldingHeart;
