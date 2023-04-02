import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const FerrisWheel = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 11a3 3 0 0 0-2.841-2.984 9.918 9.918 0 0 0-5.175-5.175A3 3 0 0 0 13 0h-2a3 3 0 0 0-2.984 2.841 9.921 9.921 0 0 0-5.175 5.175 2.985 2.985 0 0 0-.659 5.856 9.964 9.964 0 0 0 5.332 7.069l-.48 1.8a1 1 0 0 0 .708 1.224A1.011 1.011 0 0 0 8 24a1 1 0 0 0 .966-.742l.434-1.606a9.928 9.928 0 0 0 5.211 0l.428 1.606a1 1 0 0 0 1.932-.516l-.48-1.8a9.974 9.974 0 0 0 5.333-7.07A2.994 2.994 0 0 0 24 11ZM11 2h2a1 1 0 0 1 0 2h-2a1 1 0 0 1 0-2Zm-8 8h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9 10a8.021 8.021 0 0 1-2.09-.28l1.7-6.364a.407.407 0 0 1 .787 0l1.7 6.364A8.034 8.034 0 0 1 12 20Zm3.955-1.049-1.63-6.11A2.38 2.38 0 0 0 12 11.054a2.38 2.38 0 0 0-2.326 1.787l-1.629 6.11A7.962 7.962 0 0 1 4.26 14H5a3 3 0 0 0 .081-5.992 8.1 8.1 0 0 1 3.507-3.241A2.989 2.989 0 0 0 11 6h2a2.988 2.988 0 0 0 2.412-1.233 8.094 8.094 0 0 1 3.506 3.241A3 3 0 0 0 19 14h.74a7.968 7.968 0 0 1-3.785 4.951ZM21 12h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
    </svg>
  );
});

FerrisWheel.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

FerrisWheel.displayName = 'FerrisWheel';

export default FerrisWheel;
