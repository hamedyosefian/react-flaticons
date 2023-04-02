import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MoneyBillWaveAlt = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M16.998 21c-1.634 0-3.098-.399-4.513-.785-1.347-.368-2.619-.715-3.985-.715-1.571 0-2.563.101-3.42.349a3.932 3.932 0 0 1-3.481-.644A3.979 3.979 0 0 1 0 16V8.452a5.04 5.04 0 0 1 3.233-4.681C4.574 3.259 5.841 3 7.001 3c1.634 0 3.098.399 4.513.785 1.349.368 2.621.715 3.987.715 1.57 0 2.561-.101 3.418-.349a3.933 3.933 0 0 1 3.481.644A3.977 3.977 0 0 1 24 8v7.548c0 2.063-1.3 3.944-3.234 4.681-1.341.512-2.608.771-3.768.771ZM8.5 17.5c1.634 0 3.098.399 4.513.785 1.347.368 2.619.715 3.985.715.914 0 1.942-.215 3.056-.64A2.99 2.99 0 0 0 22 15.548V8c0-.637-.293-1.223-.803-1.606a1.95 1.95 0 0 0-1.725-.321c-1.051.303-2.202.427-3.973.427-1.634 0-3.098-.399-4.513-.785C9.637 5.347 8.365 5 6.999 5c-.914 0-1.942.215-3.056.64a2.99 2.99 0 0 0-1.946 2.812V16c0 .637.293 1.223.803 1.606.5.376 1.128.495 1.725.321 1.051-.303 2.202-.427 3.975-.427ZM14 15V9a1 1 0 0 0-1.707-.707l-2 2a.999.999 0 1 0 1.414 1.414l.293-.293V15a1 1 0 1 0 2 0ZM5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Z" />
    </svg>
  );
});

MoneyBillWaveAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoneyBillWaveAlt.displayName = 'MoneyBillWaveAlt';

export default MoneyBillWaveAlt;
