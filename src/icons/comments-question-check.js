import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentsQuestionCheck = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M14.086 19.414c.392.392.905.586 1.418.586.509 0 1.017-.191 1.399-.575l2.793-2.707a1 1 0 1 0-1.393-1.435l-2.814 2.707-1.674-1.623c2.359-1.509 3.966-3.933 4.162-6.715A9.004 9.004 0 0 0 8.349.023C3.823.343 0 4.589 0 9.296v5.038A3.668 3.668 0 0 0 3.661 18h4.477a10.7 10.7 0 0 0 3.782-.685l2.166 2.099ZM3.661 16A1.665 1.665 0 0 1 2 14.334V9.296C2 5.6 4.972 2.267 8.489 2.018a7.006 7.006 0 0 1 5.46 2.033 7.015 7.015 0 0 1 2.033 5.46C15.729 13.089 12.21 16 8.137 16H3.661Zm8.292-9.534a3.013 3.013 0 0 1-1.506 3.163C10 9.875 10 9.947 10 10a1 1 0 1 1-2 0c0-1.308 1.038-1.879 1.481-2.123.289-.16.595-.535.502-1.065a1.003 1.003 0 0 0-.793-.794.978.978 0 0 0-.832.216.995.995 0 0 0-.358.767 1 1 0 1 1-2 0 2.996 2.996 0 0 1 3.536-2.952 3.021 3.021 0 0 1 2.417 2.418ZM10.25 13.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0ZM24 16v5a3 3 0 0 1-3 3h-5c-2.955 0-5.535-1.615-6.92-4.004a10.968 10.968 0 0 0 2.242-.248A5.988 5.988 0 0 0 16 22h5a1 1 0 0 0 1-1v-5a5.988 5.988 0 0 0-2.252-4.678c.156-.724.242-1.473.248-2.242C22.385 10.465 24 13.045 24 16Z" />
    </svg>
  );
});

CommentsQuestionCheck.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentsQuestionCheck.displayName = 'CommentsQuestionCheck';

export default CommentsQuestionCheck;
