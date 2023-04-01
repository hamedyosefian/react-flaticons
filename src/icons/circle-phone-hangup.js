import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CirclePhoneHangup = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12Zm0-22C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2Zm4.293 11.795 1.56.205c.605 0 1.095-.49 1.095-1.095l.053-1.038a2.69 2.69 0 0 0-.804-1.906c-2.517-2.517-9.681-2.711-12.391 0a2.686 2.686 0 0 0-.804 1.906l.053 1.038c0 .605.49 1.095 1.095 1.095l1.56-.205c.605 0 1.095-.49 1.095-1.095l.148-1.578c2.131-.91 4.16-.868 6.099 0L15.2 12.7c0 .605.49 1.095 1.095 1.095Z" />
    </svg>
  );
});

CirclePhoneHangup.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CirclePhoneHangup.displayName = 'CirclePhoneHangup';

export default CirclePhoneHangup;
