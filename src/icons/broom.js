import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Broom = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.715 2.285a1.013 1.013 0 0 0-1.43 0l-4.764 4.764-.32-.313a5.008 5.008 0 0 0-6.429-.479 16.618 16.618 0 0 1-4.548 2.428l-2.074.608a5.036 5.036 0 0 0-3.113 2.635A4.973 4.973 0 0 0 .9 15.947a12.95 12.95 0 0 0 12.112 8.064h.924a1.011 1.011 0 0 0 .578-.182 15.288 15.288 0 0 0 6.71-10.209 5.029 5.029 0 0 0-1.453-4.374l-.8-.784 4.747-4.747a1.013 1.013 0 0 0-.003-1.43Zm-10.107 19.7h-.6a11.3 11.3 0 0 1-4.308-.847l.011-.006a11.546 11.546 0 0 0 4.351-3.8l.518-.761a1.01 1.01 0 0 0-1.67-1.138l-.518.761A9.535 9.535 0 0 1 7.8 19.327l-1.251.63a10.757 10.757 0 0 1-2.583-2.57 11.625 11.625 0 0 0 4.377-2.664 1.011 1.011 0 0 0-1.414-1.446 9.617 9.617 0 0 1-3.98 2.32c-.061-.135-.127-.267-.182-.406a2.906 2.906 0 0 1 .085-2.381 3.023 3.023 0 0 1 1.864-1.578l2.073-.608a15.364 15.364 0 0 0 3.426-1.588l7.915 7.712a14.192 14.192 0 0 1-4.522 5.241Zm5.62-8.683a12.421 12.421 0 0 1-.309 1.387L11.948 7.9a3.011 3.011 0 0 1 1.755-.566 2.973 2.973 0 0 1 2.084.849l2.569 2.509a3.01 3.01 0 0 1 .872 2.614Z" />
    </svg>
  );
});

Broom.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Broom.displayName = 'Broom';

export default Broom;
