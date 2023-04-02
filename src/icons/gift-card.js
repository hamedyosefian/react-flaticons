import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const GiftCard = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 6h-1.226c1.413-1.38 1.629-3.195.545-4.64A3.37 3.37 0 0 0 16.08.034a3.367 3.367 0 0 0-2.521.646c-.678.508-1.178 1.155-1.547 1.813-.369-.659-.869-1.305-1.547-1.813a3.364 3.364 0 0 0-2.52-.646A3.374 3.374 0 0 0 5.706 1.36C4.628 2.797 4.836 4.6 6.253 6H5c-2.757 0-5 2.243-5 5v8c0 2.757 2.243 5 5 5h14c2.757 0 5-2.243 5-5v-8c0-2.757-2.243-5-5-5Zm-4.24-3.72c.245-.184.537-.28.837-.28.403 0 .898.261 1.123.56.641.854.043 1.644-.343 2.013C14.816 5.958 13.16 6 13.019 6.001h-.013a.986.986 0 0 0 .017-.283l-.002-.021c.089-.598.461-2.458 1.739-3.416ZM7.676 4.596c-.414-.395-1.011-1.182-.37-2.037.225-.299.552-.493.922-.546.373-.048.739.043 1.038.267 1.279.959 1.651 2.822 1.74 3.416l-.002.021a.986.986 0 0 0 .017.283h-.013c-.141 0-1.797-.042-3.332-1.403ZM5 7.999h5.824c-.751 1.951-3.666 1.999-3.826 2a1 1 0 0 0 .001 2c1.417 0 3.697-.488 5-2.056 1.303 1.569 3.583 2.056 5 2.056a1 1 0 1 0 0-2c-.142 0-3.078-.026-3.827-2h5.827c1.654 0 3 1.346 3 3v6H2v-6c0-1.654 1.346-3 3-3Zm14 14H5c-1.654 0-3-1.346-3-3h20c0 1.654-1.346 3-3 3Z" />
    </svg>
  );
});

GiftCard.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

GiftCard.displayName = 'GiftCard';

export default GiftCard;
