import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const PhotoVideo = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M17 16a1 1 0 0 0-1 1v1h-2v-1a1 1 0 0 0-2 0v5H6V11a1 1 0 0 0-1-1h-.5A4.505 4.505 0 0 0 0 14.5v5C0 21.981 2.019 24 4.5 24h9c2.481 0 4.5-2.019 4.5-4.5V17a1 1 0 0 0-1-1ZM4 16v2H2v-2h2Zm0-3.95V14H2.055c.2-.977.968-1.75 1.945-1.95ZM2.055 20H4v1.95A2.503 2.503 0 0 1 2.055 20ZM14 21.949V20h1.949A2.505 2.505 0 0 1 14 21.949ZM19 0h-6c-2.757 0-5 2.243-5 5v4c0 2.757 2.243 5 5 5h6c2.757 0 5-2.243 5-5V5c0-2.757-2.243-5-5-5Zm-9 5c0-1.654 1.346-3 3-3h6a2.99 2.99 0 0 1 2.638 1.602l-3.457 3.464-.475-.48a1.992 1.992 0 0 0-2.705-.113l-4.621 3.961a2.963 2.963 0 0 1-.381-1.433V5Zm9 7h-6a2.97 2.97 0 0 1-1.117-.221l4.406-3.784.475.48c.779.78 2.049.781 2.829 0l2.408-2.408v2.932c0 1.654-1.346 3-3 3Zm-8-7.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11 4.5Z" />
    </svg>
  );
});

PhotoVideo.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhotoVideo.displayName = 'PhotoVideo';

export default PhotoVideo;
