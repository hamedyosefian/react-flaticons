import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DiceAlt = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 24h-5a5.006 5.006 0 0 1-5-5v-5a5.006 5.006 0 0 1 5-5h5a5.006 5.006 0 0 1 5 5v5a5.006 5.006 0 0 1-5 5Zm-5-13a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h5a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3Zm0 2a1 1 0 1 0 1 1 1 1 0 0 0-1-1Zm5 5a1 1 0 1 0 1 1 1 1 0 0 0-1-1ZM9 7a1 1 0 1 0-1-1 1 1 0 0 0 1 1ZM7 9a1 1 0 1 0-1 1 1 1 0 0 0 1-1Zm-.22 6.826a1 1 0 0 0-.154-1.405 3.15 3.15 0 0 1-.251-.228l-3.511-3.559a3.005 3.005 0 0 1 .029-4.243l3.56-3.511a2.98 2.98 0 0 1 2.106-.864h.022a2.981 2.981 0 0 1 2.115.893L14.2 6.465c.057.058.111.117.163.179A1 1 0 1 0 15.9 5.356c-.083-.1-.17-.194-.266-.292L12.12 1.505a5 5 0 0 0-7.071-.049l-3.56 3.511a5.007 5.007 0 0 0-.049 7.071L4.951 15.6a4.865 4.865 0 0 0 .423.381 1 1 0 0 0 1.406-.153Z" />
    </svg>
  );
});

DiceAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceAlt.displayName = 'DiceAlt';

export default DiceAlt;
