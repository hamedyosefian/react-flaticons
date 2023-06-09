import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SortDown = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M12 18a2.669 2.669 0 0 1-1.985-.886l-6.431-6.527c-.602-.658-.746-1.536-.401-2.318S4.273 7 5.127 7h13.746c.854 0 1.6.486 1.944 1.269s.2 1.66-.376 2.291l-6.487 6.589a2.648 2.648 0 0 1-1.954.852ZM5.127 9c-.026 0-.081 0-.114.074-.033.075.004.116.022.136l6.437 6.534c.204.227.417.256.528.256s.324-.029.497-.222l6.493-6.596s.058.03-.003-.108C18.954 9 18.899 9 18.873 9H5.127Z" />
    </svg>
  );
});

SortDown.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SortDown.displayName = 'SortDown';

export default SortDown;
