import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const LayerMinus = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 14.464a3.208 3.208 0 0 1-1.653-.459L.485 8.088a1 1 0 0 1 0-1.714L10.347.456a3.203 3.203 0 0 1 3.307 0l9.861 5.917a1 1 0 0 1 0 1.714l-9.861 5.917a3.22 3.22 0 0 1-1.653.459ZM2.944 7.23l8.432 5.06c.385.23.864.23 1.249 0l8.432-5.06-8.433-5.059a1.215 1.215 0 0 0-1.248 0L2.944 7.23ZM24 20a1 1 0 0 0-1-1h-6a1 1 0 1 0 0 2h6a1 1 0 0 0 1-1Zm-11.143 3.286a1 1 0 0 0-.343-1.372l-10.999-6.6a1 1 0 1 0-1.029 1.715l11 6.6a.998.998 0 0 0 1.372-.342Zm-.343-4.225 11-6.6a1 1 0 1 0-1.029-1.715L12 17.037l-10.485-6.29a1 1 0 1 0-1.029 1.715l11 6.6a1 1 0 0 0 1.03 0Z" />
    </svg>
  );
});

LayerMinus.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

LayerMinus.displayName = 'LayerMinus';

export default LayerMinus;
