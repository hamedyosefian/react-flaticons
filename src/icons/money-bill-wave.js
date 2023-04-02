import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const MoneyBillWave = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 16c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4Zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2ZM5 7a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0ZM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm13 3a1 1 0 1 0 2 0 1 1 0 0 0-2 0Zm-1.001 5c-1.634 0-3.098-.399-4.513-.785-1.348-.368-2.62-.715-3.986-.715-1.571 0-2.562.101-3.419.349a3.932 3.932 0 0 1-3.48-.644A3.977 3.977 0 0 1 .001 16V8.452a5.04 5.04 0 0 1 3.233-4.681C4.575 3.259 5.843 3 7.002 3c1.634 0 3.097.399 4.513.785 1.348.368 2.62.715 3.986.715 1.57 0 2.562-.101 3.419-.349a3.932 3.932 0 0 1 3.481.644A3.977 3.977 0 0 1 24.001 8v7.548c0 2.063-1.3 3.944-3.234 4.681-1.341.512-2.608.771-3.768.771ZM8.5 17.5c1.634 0 3.097.399 4.513.785 1.348.368 2.62.715 3.986.715.914 0 1.942-.215 3.056-.64a2.99 2.99 0 0 0 1.946-2.812V8c0-.637-.293-1.223-.803-1.606a1.95 1.95 0 0 0-1.725-.321c-1.051.303-2.202.427-3.974.427-1.634 0-3.097-.399-4.513-.785C9.638 5.347 8.366 5 7 5c-.915 0-1.942.215-3.056.64a2.99 2.99 0 0 0-1.946 2.812V16c0 .637.293 1.223.803 1.606a1.945 1.945 0 0 0 1.724.32c1.051-.303 2.203-.427 3.974-.427Z" />
    </svg>
  );
});

MoneyBillWave.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

MoneyBillWave.displayName = 'MoneyBillWave';

export default MoneyBillWave;
