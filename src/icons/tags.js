import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Tags = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M7.707 9.256a.999.999 0 1 1-1.414 1.414.999.999 0 1 1 1.414-1.414Zm13.852 6.085-.565.565a4.977 4.977 0 0 1-1.435 3.399l-3.167 3.208A4.965 4.965 0 0 1 12.849 24h-.017c-1.335 0-2.59-.52-3.534-1.464l-7.416-7.353a2.987 2.987 0 0 1-.864-2.453l.765-6.916a1 1 0 0 1 .858-.881l6.889-.942a3.018 3.018 0 0 1 2.528.851l7.475 7.412c.387.387.697.823.931 1.288a3.01 3.01 0 0 0-.342-3.835l-7.591-7.405a1.009 1.009 0 0 0-.851-.292l-6.889.942a1.001 1.001 0 0 1-1.127-.855A1.001 1.001 0 0 1 4.519.971l6.89-.943a3 3 0 0 1 2.528.852l7.589 7.405c1.946 1.945 1.957 5.107.032 7.057Zm-3.438-1.67-7.475-7.412a1.016 1.016 0 0 0-.847-.287l-6.115.837-.679 6.14a.994.994 0 0 0 .287.816l7.416 7.353c.569.57 1.322.881 2.123.881h.01a2.972 2.972 0 0 0 2.126-.893l3.167-3.208a3.006 3.006 0 0 0-.014-4.229Z" />
    </svg>
  );
});

Tags.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tags.displayName = 'Tags';

export default Tags;
