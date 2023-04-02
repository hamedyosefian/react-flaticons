import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CarTilt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M1.673 13.937a9.876 9.876 0 0 0 1 3.2l.533 1.03A3.986 3.986 0 0 0 8.122 19.8l.145.239a1.987 1.987 0 1 0 3.405-2.05l-.066-.111 7.01-3.929.193.321a1.988 1.988 0 1 0 3.406-2.051l-.223-.37a3.957 3.957 0 0 0 .965-1.771 3.9 3.9 0 0 0-.422-2.955L22 6.091a7.241 7.241 0 0 0-2.51-2.582L15.2.688a4.955 4.955 0 0 0-4.94.052L3.388 4.357A4.984 4.984 0 0 0 .98 8.733c.001.037.693 5.204.693 5.204ZM20.79 8.094a1.982 1.982 0 0 1-.663 2.713l-12.49 7a1.973 1.973 0 0 1-1.5.226 1.946 1.946 0 0 1-1.187-.843l-.533-1.03a3.605 3.605 0 0 1-.253-.526l1.663-.947.5.808a1 1 0 1 0 1.7-1.047l-.462-.748 8.968-5.107.56.929a1 1 0 0 0 1.713-1.032l-.534-.89 1.7-.968c.1.139.2.283.286.431ZM4.369 6.1l6.872-3.617a2.96 2.96 0 0 1 2.925-.083l4.27 2.81-14.787 8.416-.67-4.99A2.962 2.962 0 0 1 4.369 6.1ZM24 23a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h22a1 1 0 0 1 1 1Z" />
    </svg>
  );
});

CarTilt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CarTilt.displayName = 'CarTilt';

export default CarTilt;
