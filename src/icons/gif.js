import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Gif = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.969 4.969 0 0 0 3.536-1.465l2.656-2.656A4.969 4.969 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5ZM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3Zm16.465 2.121a2.98 2.98 0 0 1-1.465.8V18a1 1 0 0 1 1-1h3.922a2.98 2.98 0 0 1-.8 1.465ZM8 8.75v.334a2 2 0 0 1-2 1.984 1.991 1.991 0 0 1-2-1.984v-2.1A1.991 1.991 0 0 1 6 5a2.022 2.022 0 0 1 1.772 1.079.626.626 0 1 1-1.11.58A.779.779 0 0 0 6 6.25a.742.742 0 0 0-.749.75v2.068A.742.742 0 0 0 6 9.819a.759.759 0 0 0 .75-.735V9H6.5a.5.5 0 0 1 0-1h.75a.75.75 0 0 1 .75.75Zm6-.112v1.8a.625.625 0 0 1-1.25 0V5.625A.625.625 0 0 1 13.375 5h2.013a.625.625 0 0 1 0 1.25H14v1.138h1.239a.625.625 0 0 1 0 1.25Zm-3-3.013v4.819a.625.625 0 1 1-1.25 0V5.625a.625.625 0 0 1 1.25 0Z" />
    </svg>
  );
});

Gif.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Gif.displayName = 'Gif';

export default Gif;
