import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const RulerVertical = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M13 0h-2C8.794 0 7 1.794 7 4v16c0 2.206 1.794 4 4 4h2c2.206 0 4-1.794 4-4V4c0-2.206-1.794-4-4-4Zm0 22h-2c-1.103 0-2-.897-2-2V4c0-1.103.897-2 2-2h2c1.103 0 2 .897 2 2v1h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v2h-2a1 1 0 1 0 0 2h2v1c0 1.103-.897 2-2 2Z" />
    </svg>
  );
});

RulerVertical.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

RulerVertical.displayName = 'RulerVertical';

export default RulerVertical;
