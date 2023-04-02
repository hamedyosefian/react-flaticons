import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const PiggyBank = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M18 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM7 5a1 1 0 0 0 1-1c0-1.103.897-2 2-2s2 .897 2 2a1 1 0 1 0 2 0c0-2.206-1.794-4-4-4S6 1.794 6 4a1 1 0 0 0 1 1Zm17 8v2c0 1.106-.748 1.779-1.568 1.954A8.021 8.021 0 0 1 19 20.908V21c0 1.654-1.346 3-3 3a3.006 3.006 0 0 1-2.829-2h-2.343a3.006 3.006 0 0 1-2.829 2c-1.654 0-3-1.346-3-3v-.079a7.967 7.967 0 0 1-3.983-7.451c.063-.978.31-1.907.705-2.756A3.004 3.004 0 0 1-.002 8c0-1.654 1.346-3 3-3a1 1 0 1 1 0 2 1 1 0 0 0-.177 1.984A8.38 8.38 0 0 1 9.264 6h5.363c.733-1.478 2.102-2.512 3.927-2.946a1.97 1.97 0 0 1 1.681.374 2 2 0 0 1 .764 1.576v3.715a8.055 8.055 0 0 1 1.432 2.327c.821.175 1.568.848 1.568 1.954Zm-2 0h-.294a1 1 0 0 1-.958-.715 6.038 6.038 0 0 0-1.463-2.477A.999.999 0 0 1 19 9.11V5.004c-.975.232-2.265.83-2.764 2.335-.141.423-.553.714-.99.684-.068-.003-5.98-.022-5.98-.022-3.303 0-6.05 2.459-6.253 5.599a5.98 5.98 0 0 0 3.417 5.815 1 1 0 0 1 .57.903v.683c0 .552.449 1 1 1s1-.448 1-1 .448-1 1-1h4c.552 0 1 .447 1 1a1 1 0 0 0 2 0v-.694a1 1 0 0 1 .569-.902 6.01 6.01 0 0 0 3.179-3.688 1 1 0 0 1 .958-.715H22v-2Z" />
    </svg>
  );
});

PiggyBank.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PiggyBank.displayName = 'PiggyBank';

export default PiggyBank;
