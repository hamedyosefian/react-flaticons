import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CommentSms = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M19 24h-5.917C6.082 24 .47 19.208.03 12.854a12.024 12.024 0 0 1 3.479-9.333A12.038 12.038 0 0 1 12.836.028C19.096.454 24 5.861 24 12.34V19c0 2.757-2.243 5-5 5ZM12.016 2.001a10.018 10.018 0 0 0-7.092 2.934 10.024 10.024 0 0 0-2.899 7.781C2.398 18.096 7.049 22 13.084 22h5.917c1.654 0 3-1.346 3-3v-6.66c0-5.431-4.084-9.962-9.299-10.315a9.836 9.836 0 0 0-.685-.023ZM15 9.625A.626.626 0 0 0 14.375 9c-.399 0-.78.173-1.042.474L12 11l-1.352-1.548C10.397 9.165 10.07 9 9.625 9A.625.625 0 0 0 9 9.625v4.75a.625.625 0 0 0 1.25 0l.002-3.269 1.282 1.389a.634.634 0 0 0 .932 0l1.281-1.388v3.267h.003a.625.625 0 0 0 1.25 0l-.003-.016L15 9.624Zm-8.53 1.843c-.658-.243-1.257-.506-1.272-.506a.303.303 0 0 1-.13-.302c.012-.079.069-.273.362-.361.119-.035.236-.049.349-.047.509.008.926.324.946.34.11.095.249.158.405.158.345 0 .625-.28.625-.625a.616.616 0 0 0-.239-.48C7.479 9.614 6.743 8.997 5.75 9c-.216 0-.445.03-.68.101-.671.202-1.146.731-1.239 1.38-.087.61.178 1.197.777 1.579 0 0 .678.303 1.43.58.159.059.672.276.61.621-.046.256-.361.521-.81.521-.468 0-.919-.187-1.206-.503a.617.617 0 0 0-.458-.206.625.625 0 0 0-.625.625c0 .161.065.304.164.414.527.566 1.309.92 2.124.92 1.021 0 1.88-.653 2.04-1.552.121-.678-.186-1.562-1.408-2.014Zm12.558 0c-.658-.243-1.257-.506-1.272-.506a.303.303 0 0 1-.13-.302c.012-.079.069-.273.362-.361.119-.035.236-.049.349-.047.509.008.926.324.946.34.11.095.249.158.405.158.345 0 .625-.28.625-.625a.616.616 0 0 0-.239-.48c-.037-.031-.773-.648-1.766-.645-.216 0-.445.03-.68.101-.671.202-1.146.731-1.239 1.38-.087.61.178 1.197.777 1.579 0 0 .678.303 1.43.58.159.059.672.276.61.621-.046.256-.361.521-.81.521-.468 0-.919-.187-1.206-.503a.617.617 0 0 0-.458-.206.625.625 0 0 0-.625.625c0 .161.065.304.164.414.527.566 1.309.92 2.124.92 1.021 0 1.88-.653 2.04-1.552.121-.678-.186-1.562-1.408-2.014Z" />
  </svg>
));

CommentSms.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CommentSms.displayName = 'CommentSms';

export default CommentSms;