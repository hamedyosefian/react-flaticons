import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CloudRain = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16 24a2.978 2.978 0 0 1-2.121-.879c-1.942-1.813-.137-4.486 1-5.639a1.557 1.557 0 0 1 2.208-.041C17.561 17.953 19 19.613 19 21a3.015 3.015 0 0 1-3 3Zm0-4.759c-.73 1.054-1.39 1.669-.706 2.466A1.01 1.01 0 0 0 17 21a4.473 4.473 0 0 0-1-1.759ZM8 24a2.98 2.98 0 0 1-2.122-.879c-1.941-1.812-.136-4.486 1-5.639a1.573 1.573 0 0 1 2.208-.04c1.171 1.169 2.987 3.847 1.037 5.679A2.983 2.983 0 0 1 8 24Zm0-4.759A4.6 4.6 0 0 0 7 21a1.01 1.01 0 0 0 1.707.707c.693-.792.001-1.461-.707-2.466Zm-5 0a.99.99 0 0 1-.555-.169A5.535 5.535 0 0 1 1.8 10.43a1 1 0 0 0 .345-.9 8.147 8.147 0 0 1-.033-2.889A7.946 7.946 0 0 1 8.5.137a8.056 8.056 0 0 1 8.734 4.44 1.04 1.04 0 0 0 .743.569c5.824 1.035 8.091 8.769 3.718 12.766a1 1 0 1 1-1.384-1.444 5.538 5.538 0 0 0-2.725-9.362 3.011 3.011 0 0 1-2.158-1.672A6 6 0 0 0 4.086 6.967a6.142 6.142 0 0 0 .024 2.181 3.005 3.005 0 0 1-.964 2.762 3.523 3.523 0 0 0 .41 5.5A1 1 0 0 1 3 19.242ZM12 17a2.978 2.978 0 0 1-2.121-.879c-1.942-1.812-.137-4.486 1-5.639a1.573 1.573 0 0 1 2.209-.04C13.561 10.953 15 12.613 15 14a3.014 3.014 0 0 1-3 3Zm0-4.759c-.732 1.054-1.39 1.669-.708 2.466A1.01 1.01 0 0 0 13 14a4.487 4.487 0 0 0-1-1.759Z" />
    </svg>
  );
});

CloudRain.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CloudRain.displayName = 'CloudRain';

export default CloudRain;
