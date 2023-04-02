import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ChartSetTheory = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M424.802 182.898v-1.54c0-93.189-75.545-168.734-168.734-168.734S87.334 88.169 87.334 181.358v1.54C5.755 227.943-23.862 330.592 21.183 412.171s147.694 111.196 229.273 66.152a169.027 169.027 0 0 0 5.613-3.241c79.789 48.144 183.5 22.491 231.644-57.298 48.144-79.789 22.491-183.5-57.298-231.644a168.31 168.31 0 0 0-5.613-3.242zM256.068 423.344a126.418 126.418 0 0 1-41.171-78.229 169.286 169.286 0 0 0 82.258 0 126.422 126.422 0 0 1-41.087 78.124v.105zm0-115.435a126.243 126.243 0 0 1-39.21-6.222 126.74 126.74 0 0 1 39.21-66.924 126.74 126.74 0 0 1 39.21 66.924 126.243 126.243 0 0 1-39.21 6.222zm-77.491-26.576a126.742 126.742 0 0 1-46.085-72.555 126.55 126.55 0 0 1 86.75 3.058 168.907 168.907 0 0 0-40.665 69.497zm114.317-69.603a126.55 126.55 0 0 1 86.75-3.058 126.746 126.746 0 0 1-46.085 72.661 168.908 168.908 0 0 0-40.665-69.603zM256.068 54.808c63.672.082 117.4 47.391 125.538 110.542a168.737 168.737 0 0 0-125.538 17.569A168.732 168.732 0 0 0 130.53 165.35c8.138-63.15 61.866-110.46 125.538-110.542zM45.151 329a126.425 126.425 0 0 1 49.059-99.975 169.474 169.474 0 0 0 77.491 98.435V329a168.187 168.187 0 0 0 47.541 117.27c-64.773 26.256-138.566-4.968-164.822-69.74A126.55 126.55 0 0 1 45.151 329zm295.284 126.551a125.97 125.97 0 0 1-47.541-9.28 168.187 168.187 0 0 0 47.541-117.27v-1.54a169.475 169.475 0 0 0 77.512-98.435c55.215 42.851 65.237 122.349 22.386 177.564a126.555 126.555 0 0 1-99.898 48.961z" />
    </svg>
  );
});

ChartSetTheory.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ChartSetTheory.displayName = 'ChartSetTheory';

export default ChartSetTheory;
