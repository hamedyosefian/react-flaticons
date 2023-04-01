import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PhonePause = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19.981 7.023v-6a1 1 0 0 1 2 0v6a1 1 0 0 1-2 0Zm-3 1a1 1 0 0 0 1-1v-6a1 1 0 0 0-2 0v6a1 1 0 0 0 1 1Zm6.095 13.116-.912 1.05c-8.19 7.84-28.12-12.084-20.4-20.3l1.15-1A3.08 3.08 0 0 1 7.242.93c.031.03 1.882 2.437 1.882 2.437a3.1 3.1 0 0 1-.005 4.281L7.959 9.1a12.783 12.783 0 0 0 6.932 6.947l1.464-1.165a3.1 3.1 0 0 1 4.282-.007s2.407 1.853 2.438 1.884a3.1 3.1 0 0 1 .001 4.38ZM21.7 18.216s-2.4-1.842-2.425-1.872a1.121 1.121 0 0 0-1.549 0 471.44 471.44 0 0 1-2.044 1.635 1 1 0 0 1-.979.151A15 15 0 0 1 5.88 9.318a1 1 0 0 1 .146-.995s1.607-2.017 1.635-2.044a1.1 1.1 0 0 0 0-1.55C7.629 4.7 5.788 2.306 5.788 2.306a1.1 1.1 0 0 0-1.51.038L3.127 3.349c-5.64 6.779 11.631 23.093 17.573 17.477l.912-1.05a1.122 1.122 0 0 0 .088-1.56Z" />
    </svg>
  );
});

PhonePause.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhonePause.displayName = 'PhonePause';

export default PhonePause;
