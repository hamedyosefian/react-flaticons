import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ExchangeAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M0 7a1 1 0 0 1 1-1h17V2.639a.792.792 0 0 1 1.35-.552l4.418 4.361a.773.773 0 0 1 0 1.1l-4.418 4.365a.792.792 0 0 1-1.35-.552V8H1a1 1 0 0 1-1-1Zm23 9H6v-3.361a.792.792 0 0 0-1.35-.552L.232 16.448a.773.773 0 0 0 0 1.1l4.418 4.365A.792.792 0 0 0 6 21.361V18h17a1 1 0 0 0 0-2Z" />
    </svg>
  );
});

ExchangeAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ExchangeAlt.displayName = 'ExchangeAlt';

export default ExchangeAlt;
