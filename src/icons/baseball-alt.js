import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const BaseballAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.712 7.5A4.4 4.4 0 0 0 19.6 0a4.363 4.363 0 0 0-3.1 1.288l-2.68 2.676a33.868 33.868 0 0 0-4.868 6.146 21.946 21.946 0 0 1-2.647 3.44l-4.17 4.171-.428-.428a1 1 0 1 0-1.414 1.414l5 5a1 1 0 1 0 1.414-1.414l-.389-.393 4.094-4.093a26.185 26.185 0 0 1 3.688-2.832 33.73 33.73 0 0 0 5.793-4.65ZM4.9 20.49l-1.351-1.355 4.17-4.171c.161-.161.343-.357.54-.58l1.4 1.4c-.266.229-.493.437-.664.608Zm8.124-7.2c-.591.374-1.212.81-1.794 1.246l-1.709-1.717c.395-.531.787-1.1 1.133-1.658a31.86 31.86 0 0 1 4.58-5.783L17.911 2.7a2.451 2.451 0 0 1 3.387 0 2.394 2.394 0 0 1 0 3.387l-2.821 2.824a31.737 31.737 0 0 1-5.449 4.374Zm7.476 3.689a3.5 3.5 0 1 0 3.5 3.5 3.5 3.5 0 0 0-3.5-3.5Zm0 5a1.5 1.5 0 1 1 1.5-1.5 1.5 1.5 0 0 1-1.5 1.5Z" />
    </svg>
  );
});

BaseballAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

BaseballAlt.displayName = 'BaseballAlt';

export default BaseballAlt;
