import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const ShieldExclamation = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 15a1 1 0 0 1-1-1V6a1 1 0 0 1 2 0v8a1 1 0 0 1-1 1zm.793 8.76C14.953 22.892 22 19.479 22 12.043V6.872a4.993 4.993 0 0 0-3.426-4.746L12.315.051a.985.985 0 0 0-.63 0L5.426 2.126A4.993 4.993 0 0 0 2 6.872v5.171c0 6.562 7.005 10.576 9.153 11.65A4.628 4.628 0 0 0 12 24a4.5 4.5 0 0 0 .793-.24zm5.151-19.736A3 3 0 0 1 20 6.872v5.171c0 6.183-6.087 9.111-7.953 9.861C10.159 20.96 4 17.459 4 12.043V6.872a3 3 0 0 1 2.056-2.848L12 2.054zM12 17a1 1 0 1 0 1 1 1 1 0 0 0-1-1z" />
    </svg>
  );
});

ShieldExclamation.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ShieldExclamation.displayName = 'ShieldExclamation';

export default ShieldExclamation;
