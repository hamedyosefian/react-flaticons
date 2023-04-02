import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DiceD12 = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.287 7.535-1.915-3.192a5.026 5.026 0 0 0-1.715-1.715L16.465.713A5 5 0 0 0 13.892 0h-3.784a5 5 0 0 0-2.573.713L4.343 2.628a5.026 5.026 0 0 0-1.715 1.715L.713 7.535A5 5 0 0 0 0 10.108v3.784a5 5 0 0 0 .713 2.573l1.915 3.192a5.026 5.026 0 0 0 1.715 1.715l3.192 1.915a5 5 0 0 0 2.573.713h3.784a5 5 0 0 0 2.573-.713l3.192-1.915a5.026 5.026 0 0 0 1.715-1.715l1.915-3.192A5 5 0 0 0 24 13.892v-3.784a5 5 0 0 0-.713-2.573Zm-1.715 1.029a3.2 3.2 0 0 1 .186.364l-4.02 4.823L13 11.382v-4.6l6.511-1.629c.052.071.1.145.146.22ZM8.564 2.428A3 3 0 0 1 10.108 2h3.784a3 3 0 0 1 1.544.428l1.98 1.188L12 4.97 6.584 3.616ZM4.343 5.372a2.89 2.89 0 0 1 .146-.22L11 6.78v4.6l-4.738 2.371-4.02-4.823a3.2 3.2 0 0 1 .186-.364Zm0 13.256-1.915-3.192A3 3 0 0 1 2 13.892v-2.129l3.123 3.748 1.934 5.157-1.685-1.011a3.016 3.016 0 0 1-1.029-1.029Zm5.339 3.341-2.429-6.477L12 13.118l4.748 2.374-2.43 6.477c-.141.02-4.495.02-4.636 0Zm11.89-6.533-1.915 3.192a3.016 3.016 0 0 1-1.029 1.029l-1.685 1.011 1.934-5.157L22 11.763v2.129a3 3 0 0 1-.428 1.544Z" />
    </svg>
  );
});

DiceD12.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceD12.displayName = 'DiceD12';

export default DiceD12;
