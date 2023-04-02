import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const FolderDownload = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 3h-6.528c-.154 0-.31-.036-.447-.105L8.869 1.317a3.017 3.017 0 0 0-1.341-.316H5A5.004 5.004 0 0 0 0 6v12c0 2.757 2.243 5 5 5h1a1 1 0 1 0 0-2H5c-1.654 0-3-1.346-3-3V9h20v9c0 1.654-1.346 3-3 3h-1a1 1 0 1 0 0 2h1c2.757 0 5-2.243 5-5V8c0-2.757-2.243-5-5-5ZM2 6c0-1.654 1.346-3 3-3h2.528c.154 0 .31.036.447.105l3.156 1.578c.415.207.878.316 1.341.316H19c1.302 0 2.402.839 2.816 2H2v-1Zm13.707 13.105a.999.999 0 0 1 0 1.414l-1.613 1.613c-.577.577-1.335.865-2.094.865s-1.516-.288-2.093-.865l-1.614-1.613a.999.999 0 1 1 1.414-1.414L11 20.398V13a1 1 0 1 1 2 0v7.398l1.293-1.293a.999.999 0 0 1 1.414 0Z" />
    </svg>
  );
});

FolderDownload.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FolderDownload.displayName = 'FolderDownload';

export default FolderDownload;
