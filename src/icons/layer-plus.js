import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LayerPlus = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m.485 8.088 9.862 5.917a3.208 3.208 0 0 0 3.306 0l9.861-5.917a1 1 0 0 0 0-1.714L13.654.456a3.203 3.203 0 0 0-3.307 0L.485 6.373a1 1 0 0 0 0 1.714Zm10.891-5.917c.384-.23.863-.23 1.248 0l8.432 5.06-8.432 5.06c-.385.23-.864.23-1.249 0L2.944 7.23l8.432-5.059ZM24 20a1 1 0 0 1-1 1h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 1 1 2 0v2h2a1 1 0 0 1 1 1Zm-11.143 3.286a1 1 0 0 1-1.372.342l-11-6.599a1 1 0 1 1 1.029-1.715l11 6.6a1 1 0 0 1 .343 1.372Zm11-12.196a1 1 0 0 1-.343 1.372l-11 6.6a1 1 0 0 1-1.03 0l-10.999-6.6a1 1 0 1 1 1.029-1.715l10.485 6.291 10.485-6.291a1 1 0 0 1 1.372.343Z" />
    </svg>
  );
});

LayerPlus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayerPlus.displayName = 'LayerPlus';

export default LayerPlus;
