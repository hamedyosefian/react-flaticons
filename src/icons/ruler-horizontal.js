import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RulerHorizontal = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M20 6.96H4c-2.206 0-4 1.794-4 4V13c0 2.206 1.794 4 4 4h16c2.206 0 4-1.794 4-4v-2.04c0-2.206-1.794-4-4-4ZM22 13c0 1.103-.897 2-2 2h-1v-2.015a1 1 0 1 0-2 0V15h-2v-2.015a1 1 0 1 0-2 0V15h-2v-2.015a1 1 0 1 0-2 0V15H7.024v-2.015a1 1 0 1 0-2 0V15H4c-1.103 0-2-.897-2-2v-2.04c0-1.103.897-2 2-2h16c1.103 0 2 .897 2 2V13Z" />
    </svg>
  );
});

RulerHorizontal.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RulerHorizontal.displayName = 'RulerHorizontal';

export default RulerHorizontal;
