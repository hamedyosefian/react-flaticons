import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentsQuestion = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M9 11a1 1 0 0 1-1-1c0-1.308 1.038-1.879 1.481-2.123.29-.159.595-.535.502-1.066a1.003 1.003 0 0 0-.793-.793.992.992 0 0 0-.832.216.995.995 0 0 0-.358.767 1 1 0 1 1-2 0 2.996 2.996 0 0 1 3.535-2.952 3.023 3.023 0 0 1 2.417 2.417 3.016 3.016 0 0 1-1.506 3.164c-.447.246-.447.318-.447.371a1 1 0 0 1-1 1Zm0 1a1.25 1.25 0 1 0 0 2.5A1.25 1.25 0 0 0 9 12Zm10.996-2.92a10.968 10.968 0 0 1-.248 2.242A5.988 5.988 0 0 1 22 16v5a1 1 0 0 1-1 1h-5a5.988 5.988 0 0 1-4.678-2.252c-.724.156-1.473.242-2.242.248C10.465 22.385 13.045 24 16 24h5a3 3 0 0 0 3-3v-5c0-2.955-1.615-5.535-4.004-6.92Zm-2.019.571c.185-2.613-.768-5.17-2.613-7.016S10.964-.167 8.349.023C3.823.343 0 4.589 0 9.296v5.038A3.668 3.668 0 0 0 3.661 18h4.477c5.187 0 9.509-3.667 9.839-8.349ZM13.95 4.05a7.015 7.015 0 0 1 2.033 5.46c-.253 3.578-3.772 6.489-7.845 6.489H3.661A1.665 1.665 0 0 1 2 14.333V9.295c0-3.696 2.972-7.029 6.49-7.278a7.005 7.005 0 0 1 5.46 2.033Z" />
  </svg>
));

CommentsQuestion.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentsQuestion.displayName = 'CommentsQuestion';

export default CommentsQuestion;
