import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const DiceD6 = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m20.572 4.312-6-3.6a4.987 4.987 0 0 0-5.145 0l-6 3.6A5.027 5.027 0 0 0 1 8.6v6.8a5.027 5.027 0 0 0 2.427 4.288l6 3.6a4.985 4.985 0 0 0 5.145 0l6-3.6A5.027 5.027 0 0 0 23 15.4V8.6a5.027 5.027 0 0 0-2.428-4.288ZM10.457 2.428a2.989 2.989 0 0 1 3.086 0l6 3.6a2.978 2.978 0 0 1 .46.341l-8 4.8-8-4.8a2.931 2.931 0 0 1 .46-.341Zm-6 15.545A3.015 3.015 0 0 1 3 15.4V8.6a2.881 2.881 0 0 1 .039-.475L11 12.9v8.928a3.022 3.022 0 0 1-.543-.257ZM21 15.4a3.017 3.017 0 0 1-1.457 2.573l-6 3.6a3.022 3.022 0 0 1-.543.257V12.9l7.961-4.776A2.881 2.881 0 0 1 21 8.6Z" />
    </svg>
  );
});

DiceD6.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DiceD6.displayName = 'DiceD6';

export default DiceD6;
