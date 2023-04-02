import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const W = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M6.843 24.013a3.65 3.65 0 0 1-.294-.012 3.495 3.495 0 0 1-3.221-2.953L.014 1.164A.999.999 0 0 1 .835.014a.992.992 0 0 1 1.151.822L5.3 20.72c.146.88.822 1.242 1.405 1.288.578.038 1.307-.207 1.589-1.054l2.757-8.271c.266-.895 1.632-.895 1.897 0l2.756 8.271c.282.846.997 1.093 1.589 1.054.583-.046 1.259-.408 1.405-1.288L22.014.836a1 1 0 1 1 1.972.328l-3.314 19.884a3.495 3.495 0 0 1-3.221 2.953 3.507 3.507 0 0 1-3.643-2.414l-1.809-5.425-1.808 5.425c-.493 1.479-1.817 2.426-3.349 2.426Z" />
  </svg>
));

W.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

W.displayName = 'W';

export default W;
