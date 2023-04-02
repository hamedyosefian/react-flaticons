import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CrystalBall = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m20.839 18.131-.273-.227a10.93 10.93 0 0 0 2.435-6.903c0-.372-.019-.738-.055-1.101-.056-.55-.537-.936-1.096-.895-.549.056-.95.546-.895 1.096A8.946 8.946 0 0 1 18.708 17H5.292A8.947 8.947 0 0 1 3 11c0-4.963 4.037-9 9-9a9 9 0 0 1 2.7.412 1.001 1.001 0 0 0 .6-1.908A11 11 0 0 0 12 0C5.935 0 1 4.935 1 11c0 2.538.857 4.952 2.435 6.903l-.274.228a6.38 6.38 0 0 0-2.105 3.393 2 2 0 0 0 .377 1.715c.383.484.955.762 1.571.762h17.992a1.99 1.99 0 0 0 1.571-.762 2.004 2.004 0 0 0 .377-1.716 6.39 6.39 0 0 0-2.105-3.392ZM3.001 21.989a4.374 4.374 0 0 1 1.44-2.321L5.244 19h13.512l.802.668A4.327 4.327 0 0 1 20.996 22l-17.995-.011ZM14.824 9.176l1.418.354a1 1 0 0 1 0 1.94l-1.418.354-.354 1.418a1 1 0 0 1-1.94 0l-.357-1.43-1.433-.385a1 1 0 0 1 .034-1.94l1.404-.324.352-1.405a1 1 0 0 1 1.94 0l.354 1.418Zm8.547-6.105-1.744-.698-.698-1.744a1 1 0 0 0-1.858 0l-.694 1.734-1.731.655a.999.999 0 0 0-.035 1.857l1.758.74.702 1.755a1 1 0 0 0 1.858 0l.698-1.744 1.744-.698a1 1 0 0 0 0-1.858Z" />
    </svg>
  );
});

CrystalBall.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CrystalBall.displayName = 'CrystalBall';

export default CrystalBall;
