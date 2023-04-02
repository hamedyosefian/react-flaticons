import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Butterfly = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.5 12.932A8.184 8.184 0 0 0 24 7.284c0-5.654-2.767-6.264-3.956-6.264-2.968 0-5.884 2.9-8.041 5.521C9.862 3.942 6.937 1.02 3.961 1.02-.188.76-1.706 9.091 2.506 12.933c.176.174.359.337.544.49a6.554 6.554 0 0 0-1.72 6.687 4.02 4.02 0 0 0 2.3 2.574 3.914 3.914 0 0 0 3.355-.131A16.382 16.382 0 0 0 11 19.621V22a1 1 0 0 0 2 0v-2.379a16.351 16.351 0 0 0 4.018 2.931 3.911 3.911 0 0 0 3.355.132 4.021 4.021 0 0 0 2.3-2.573A6.567 6.567 0 0 0 21 13.384c.171-.142.338-.292.5-.452ZM11 15.636c0 1.478-2.08 3.642-4.947 5.146a1.891 1.891 0 0 1-1.647.06 2.027 2.027 0 0 1-1.158-1.3 4.6 4.6 0 0 1 1.566-5.038A6.25 6.25 0 0 0 7.206 15 9.811 9.811 0 0 0 11 14.293Zm0-3.651A6.3 6.3 0 0 1 7.18 13a4.559 4.559 0 0 1-3.27-1.49 6.234 6.234 0 0 1-1.9-4.225c0-2.71.713-4.264 1.955-4.264C5.746 3.02 8.106 4.858 11 8.491ZM13 8.5c2.88-3.63 5.252-5.48 7.044-5.48C21.287 3.02 22 4.574 22 7.284a6.236 6.236 0 0 1-1.9 4.225A4.691 4.691 0 0 1 16.87 13 6.435 6.435 0 0 1 13 11.98Zm7.752 11.048a2.025 2.025 0 0 1-1.158 1.3 1.892 1.892 0 0 1-1.647-.061C15.08 19.278 13 17.114 13 15.636v-1.345a9.812 9.812 0 0 0 3.8.709 6.094 6.094 0 0 0 2.424-.51 4.535 4.535 0 0 1 1.528 5.054ZM10 2a2 2 0 0 1 4 0 2 2 0 0 1-4 0Z" />
    </svg>
  );
});

Butterfly.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Butterfly.displayName = 'Butterfly';

export default Butterfly;
