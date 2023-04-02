import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Smog = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-6 0H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Zm10-4H11a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2ZM7 20H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm12-4h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm-6 0H1a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2Zm3-4a5 5 0 0 1-2.336-.579 6.271 6.271 0 0 1-5.536-.152.587.587 0 0 0-.571.028A5 5 0 0 1 .134 5.829a4.95 4.95 0 0 1 3.677-3.691 5.092 5.092 0 0 1 2.374 0 .277.277 0 0 0 .283-.074 6.033 6.033 0 0 1 8.8-.287c.065.065.217.219.734.219a4.978 4.978 0 0 1 3.9 1.875.4.4 0 0 0 .193.148 3.579 3.579 0 0 1 1.438.129 3.443 3.443 0 0 1 2.348 2.433 3.5 3.5 0 0 1-4.341 4.282c-.274-.079-.333-.032-.358-.011A4.932 4.932 0 0 1 16 12Zm-2.386-2.591a2.108 2.108 0 0 1 .986.245 3.041 3.041 0 0 0 3.294-.327 2.266 2.266 0 0 1 2.2-.384 1.5 1.5 0 0 0 1.857-1.858 1.455 1.455 0 0 0-.978-1.014 1.6 1.6 0 0 0-.642-.06 2.231 2.231 0 0 1-1.984-.885c-1.04-1.6-3.361-.663-4.5-1.937a4.022 4.022 0 0 0-5.866.191 2.271 2.271 0 0 1-2.266.706 3.09 3.09 0 0 0-1.447 0 3 3 0 0 0-1.617 4.781 3.067 3.067 0 0 0 3.882.712 2.584 2.584 0 0 1 2.554-.065 4.06 4.06 0 0 0 3.638.1 2.055 2.055 0 0 1 .889-.205Z" />
    </svg>
  );
});

Smog.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Smog.displayName = 'Smog';

export default Smog;
