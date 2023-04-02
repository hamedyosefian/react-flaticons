import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Snowflake = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m22.761 13.971-2.445.646a2.707 2.707 0 0 0-.981.492l-2.617-1.522a4.7 4.7 0 0 0 0-3.174l2.617-1.522a2.707 2.707 0 0 0 .981.492s2.617.679 2.7.679a1 1 0 0 0 .256-1.962l-2.444-.647a.715.715 0 0 1-.508-.873l.647-2.444a1 1 0 1 0-1.934-.512l-.646 2.444a2.687 2.687 0 0 0-.058 1.1l-2.616 1.516A4.978 4.978 0 0 0 13 7.1v-3a2.677 2.677 0 0 0 .919-.6l1.788-1.788A1 1 0 0 0 14.293.293l-1.788 1.788a.718.718 0 0 1-1.01 0L9.707.293a1 1 0 0 0-1.414 1.414L10.081 3.5a2.677 2.677 0 0 0 .919.6v3a4.978 4.978 0 0 0-2.713 1.584L5.671 7.162a2.687 2.687 0 0 0-.058-1.1L4.967 3.62a1 1 0 1 0-1.934.512l.647 2.444a.715.715 0 0 1-.508.873L.728 8.1a1 1 0 0 0 .254 1.966c.085 0 2.7-.679 2.7-.679a2.707 2.707 0 0 0 .981-.492l2.617 1.522a4.7 4.7 0 0 0 0 3.174l-2.615 1.518a2.707 2.707 0 0 0-.981-.492l-2.445-.646A1 1 0 0 0 .728 15.9l2.444.647a.715.715 0 0 1 .508.873l-.647 2.444a1 1 0 1 0 1.934.512l.646-2.444a2.687 2.687 0 0 0 .058-1.1l2.616-1.522A4.978 4.978 0 0 0 11 16.9v3a2.691 2.691 0 0 0-.919.6l-1.788 1.793a1 1 0 0 0 1.414 1.414l1.793-1.788a.718.718 0 0 1 1.01 0l1.788 1.788a1 1 0 0 0 1.414-1.414l-1.788-1.788A2.691 2.691 0 0 0 13 19.9v-3a4.978 4.978 0 0 0 2.713-1.583l2.616 1.522a2.687 2.687 0 0 0 .058 1.1l.646 2.444a1 1 0 0 0 1.934-.512l-.647-2.444a.715.715 0 0 1 .508-.873l2.444-.647a1 1 0 1 0-.511-1.933ZM12 15a3 3 0 0 1 0-6 3 3 0 0 1 0 6Z" />
    </svg>
  );
});

Snowflake.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Snowflake.displayName = 'Snowflake';

export default Snowflake;
