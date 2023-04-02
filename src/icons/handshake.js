import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Handshake = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23 15h-.667c-.25 0-.498.019-.745.057l-7.046-5.284 1.688-1.616a1 1 0 1 0-1.383-1.445l-4.173 3.995a.997.997 0 0 1-1.527-.135c-.274-.38-.19-.975.168-1.334l4.703-4.429c.891-.837 2.284-1.042 3.374-.495l2.316 1.158c.69.345 1.464.527 2.235.527h1.056a1 1 0 1 0 0-2h-1.056c-.463 0-.928-.109-1.342-.316l-2.314-1.158c-1.824-.913-4.153-.574-5.641.828l-.618.582-.7-.638a4.991 4.991 0 0 0-3.39-1.298c-.771 0-1.54.182-2.227.525L3.397 3.682c-.415.207-.88.316-1.343.316H1a1 1 0 1 0 0 2h1.056c.771 0 1.545-.183 2.236-.527l2.316-1.158c1.022-.514 2.458-.375 3.374.462l.587.535-2.646 2.492c-1.073 1.072-1.244 2.767-.398 3.938.52.723 1.553 1.259 2.444 1.259.793 0 1.554-.312 2.104-.863l1.006-.963 6.346 4.759-6.198 4.646a2.005 2.005 0 0 1-2.47-.011l-6.091-4.568a5.028 5.028 0 0 0-3-1H.999a1 1 0 1 0 0 2h.667c.645 0 1.284.213 1.8.6l6.077 4.558a4.003 4.003 0 0 0 2.461.846c.862 0 1.723-.279 2.437-.835l6.093-4.568a3.013 3.013 0 0 1 1.799-.6H23a1 1 0 1 0 0-2Z" />
    </svg>
  );
});

Handshake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Handshake.displayName = 'Handshake';

export default Handshake;
