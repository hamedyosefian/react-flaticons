import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Jpg = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h11.343a4.968 4.968 0 0 0 3.535-1.465l2.658-2.656A4.968 4.968 0 0 0 24 16.343V5a5.006 5.006 0 0 0-5-5zM2 19V5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v10h-4a3 3 0 0 0-3 3v4H5a3 3 0 0 1-3-3zm16.464 2.121a3.02 3.02 0 0 1-1.464.8V18a1 1 0 0 1 1-1h3.922a2.978 2.978 0 0 1-.8 1.465zM14 9.084v-2.1A1.991 1.991 0 0 1 16 5a2.022 2.022 0 0 1 1.772 1.078.626.626 0 1 1-1.11.58A.779.779 0 0 0 16 6.25a.742.742 0 0 0-.749.75v2.068a.742.742 0 0 0 .749.751.759.759 0 0 0 .75-.735V9h-.25a.5.5 0 0 1 0-1h.75a.75.75 0 0 1 .75.75v.334a2 2 0 0 1-2 1.984 1.991 1.991 0 0 1-2-1.984zM8 5.65v3.356a2.069 2.069 0 0 1-2.079 2.063A2.109 2.109 0 0 1 4.072 9.9a.651.651 0 1 1 1.162-.587.818.818 0 0 0 .687.459.771.771 0 0 0 .779-.783v-3.34a.65.65 0 0 1 1.3 0zM11.09 5H10a1 1 0 0 0-1 1v4.444a.625.625 0 1 0 1.25 0V9.223h.84a2.11 2.11 0 1 0 0-4.223zm0 2.969h-.832l-.006-1.719h.838a.86.86 0 1 1 0 1.719z" />
    </svg>
  );
});

Jpg.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Jpg.displayName = 'Jpg';

export default Jpg;
