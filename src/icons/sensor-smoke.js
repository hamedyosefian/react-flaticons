import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SensorSmoke = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M5 24c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h14c2.757 0 5 2.243 5 5v7a1 1 0 0 1-2 0V5c0-1.654-1.346-3-3-3H5C3.346 2 2 3.346 2 5v14c0 1.654 1.346 3 3 3a1 1 0 1 1 0 2ZM5 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm4 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm10.43 19.977c.326-.007.659-.048.992-.123a4.613 4.613 0 0 0 3.453-3.444c.569-2.479-.889-4.935-3.318-5.59a4.257 4.257 0 0 0-.268-.057c-.33-.061-.658-.135-.736-.322a5.59 5.59 0 0 0-5.98-3.38c-2.187.318-4.013 1.995-4.543 4.174a5.322 5.322 0 0 0-.04 2.44c-1.508.647-2.297 2.283-1.874 3.891a3.272 3.272 0 0 0 3.08 2.411c.612.017 2.321.023 4.124.023 2.111 0 4.352-.01 5.112-.023Zm-1.725-8.769c.503 1.207 1.752 1.436 2.223 1.522l.113.021a2.68 2.68 0 0 1 1.885 3.21 2.634 2.634 0 0 1-2.533 2.014c-1.544.029-7.918.033-9.138 0a1.258 1.258 0 0 1-1.206-.921c-.2-.761.238-1.333.728-1.544.87-.372 1.361-1.299 1.167-2.204a3.543 3.543 0 0 1 .028-1.602c.339-1.394 1.5-2.465 2.888-2.667a3.584 3.584 0 0 1 3.845 2.168Z" />
    </svg>
  );
});

SensorSmoke.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SensorSmoke.displayName = 'SensorSmoke';

export default SensorSmoke;
