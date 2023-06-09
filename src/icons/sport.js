import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Sport = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12.014 24H6a6.006 6.006 0 0 1-6-6v-2.838a6 6 0 0 1 7.236-5.871L20.01 11.98 21.881.835a1 1 0 1 1 1.973.331L21.4 15.8a9.335 9.335 0 0 1-.667 2.511A9.518 9.518 0 0 1 12.014 24Zm-6.02-12.839a4 4 0 0 0-3.994 4V18a4 4 0 0 0 4 4h6.014a7.518 7.518 0 0 0 6.886-4.492 7.515 7.515 0 0 0 .521-2.01l.259-1.544-12.856-2.706a4.035 4.035 0 0 0-.83-.087Z" />
      <path d="M14.517 17.058a1.029 1.029 0 0 1-.206-.021L5.8 15.252a1 1 0 1 1 .41-1.952l8.511 1.785a1 1 0 0 1-.2 1.978ZM10 20.279a.987.987 0 0 1-.208-.022l-4.962-1.05a1 1 0 0 1 .414-1.957l4.963 1.05A1 1 0 0 1 10 20.279Z" />
    </svg>
  );
});

Sport.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Sport.displayName = 'Sport';

export default Sport;
