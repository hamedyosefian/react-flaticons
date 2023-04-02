import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DiceD8 = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m21.8 8.759-6.806-7.422A4 4 0 0 0 12-.011a4 4 0 0 0-2.987 1.34L2.169 8.784a5 5 0 0 0 .031 6.464l6.823 7.422a4 4 0 0 0 3 1.349h.006a4 4 0 0 0 2.985-1.344l6.828-7.466a5.005 5.005 0 0 0-.042-6.45Zm-8.3-6.083 6.791 7.4a3.017 3.017 0 0 1 .624 1.244L13 13.662V2.257a2.052 2.052 0 0 1 .508.419Zm-3.018 0 .012-.013a2.031 2.031 0 0 1 .5-.408v11.407L3.07 11.32a2.9 2.9 0 0 1 .6-1.217Zm.019 18.655L3.7 13.928a3.093 3.093 0 0 1-.3-.424l7.6 2.243v5.993a2.085 2.085 0 0 1-.491-.41Zm3.012.01a2.035 2.035 0 0 1-.521.423v-6.017l7.615-2.247a2.9 2.9 0 0 1-.275.394Z" />
    </svg>
  );
});

DiceD8.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceD8.displayName = 'DiceD8';

export default DiceD8;
