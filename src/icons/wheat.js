import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Wheat = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M21.832 7.793c1.293-1.293 1.878-3.666 2.142-5.427A2.068 2.068 0 0 0 21.632.024c-1.984.331-4.7.912-5.865 2.712-2.167-3.775-4.828-.624-5.591 2.416-2.314-.645-3.331 2.018-4 4C3.718 8.322 2.094 12.29 2 14.5a7.625 7.625 0 0 0 1.649 4.437L.291 22.293a1 1 0 0 0 1.414 1.414l3.356-3.356A7.628 7.628 0 0 0 9.5 22c2.168-.079 6.251-1.764 5.371-4.181 1.925-.654 4.709-1.738 4-4 3.049-.794 6.211-3.416 2.388-5.589a3.067 3.067 0 0 0 .573-.437Zm-4.214-4.214A7.872 7.872 0 0 1 22 2.07c-.646 3.757-1.289 5.265-4.971 4.9-.094-1.259.022-2.823.589-3.391ZM13.492 3c1.129 1.215 2.137 3.849.955 5.144l-1.524 1.519A7.868 7.868 0 0 0 12 7.127 6.055 6.055 0 0 1 13.492 3Zm-4 4c1.128 1.215 2.136 3.848.954 5.144l-1.523 1.519A7.876 7.876 0 0 0 8 11.127 6.05 6.05 0 0 1 9.492 7Zm-4 4c1.127 1.214 2.136 3.848.955 5.143L5.08 17.505A4.947 4.947 0 0 1 5.491 11ZM9.5 20a5.482 5.482 0 0 1-3.005-1.081l1.365-1.365c1.3-1.184 3.929-.168 5.146.938A6.181 6.181 0 0 1 9.5 20Zm4-4c-.134 0-.553-.011-.631 0a7.866 7.866 0 0 0-2.532-.922l1.524-1.523c1.294-1.184 3.928-.167 5.145.938A6.181 6.181 0 0 1 13.5 16Zm4-4c-.134 0-.553-.01-.63 0a7.873 7.873 0 0 0-2.533-.923l1.524-1.523c1.294-1.183 3.928-.167 5.145.938A6.181 6.181 0 0 1 17.5 12Z" />
    </svg>
  );
});

Wheat.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Wheat.displayName = 'Wheat';

export default Wheat;
