import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Democrat = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="m23.659 9.248-2.881-2.526A4.99 4.99 0 0 0 17.006 5h-5.672l-2.36-1.77c.017-.074.027-.151.027-.23V2a1 1 0 0 0-2 0v.101A3.46 3.46 0 0 0 6.171 2c-.057 0-.113.002-.17.004V2a1 1 0 0 0-2 0v.757c-.188.15-.362.319-.519.508L.975 6.318a3.338 3.338 0 0 0 0 4.712c.635.635 1.502.97 2.508.97.527 0 1.098-.205 1.793-.514l.723 3.613v3.904A3 3 0 0 0 8.996 22a2.98 2.98 0 0 0 2.123-.881A2.942 2.942 0 0 0 11.987 19l4.025.018C16.018 20.663 17.36 22 19.004 22s2.996-1.344 2.997-2.995l.005-8.547.335.294c.19.167.425.248.659.248a1 1 0 0 0 .659-1.752Zm-19.191.41c-.669.296-.904.341-.984.342-.323 0-.776-.067-1.094-.385-.519-.519-.519-1.364.064-1.955l2.569-3.122c.488-.588 1.429-.699 2.041-.241L10.4 6.799a1 1 0 0 0 .6.2h6.006a3.004 3.004 0 0 1 3 2.994l-.002 3.006H7.62l-.381-1.906a1.986 1.986 0 0 0-1.038-1.382 1.99 1.99 0 0 0-1.732-.053ZM19.005 20a1 1 0 0 1-.992-1.012A1.997 1.997 0 0 0 16.019 17h-4.032c-.534 0-1.036.208-1.413.586-.376.378-.583.88-.581 1.413a.998.998 0 1 1-1.994.004V15h12.003L20 19.004a.998.998 0 0 1-.997.996Zm-7.004-10a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm4 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Zm-8 0a1 1 0 1 1 2 0 1 1 0 0 1-2 0Z" />
    </svg>
  );
});

Democrat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Democrat.displayName = 'Democrat';

export default Democrat;
