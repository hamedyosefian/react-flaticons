import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CodePullRequest = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M8 5c0-2.206-1.794-4-4-4S0 2.794 0 5a4.007 4.007 0 0 0 3 3.873v7.253a4.007 4.007 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.007 4.007 0 0 0-3-3.873V8.873A4.007 4.007 0 0 0 8 5ZM2 5c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm4 15c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm15-3.873V9c0-2.757-2.243-5-5-5h-3.471l2.196-2.311A1 1 0 0 0 13.276.311L10.88 2.833c-1.17 1.169-1.17 3.073-.03 4.212l2.415 2.631a.997.997 0 0 0 1.412.061 1 1 0 0 0 .061-1.413L12.605 6h3.397c1.654 0 3 1.346 3 3v7.127a4.006 4.006 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.006 4.006 0 0 0-3-3.873ZM20 22c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2Z" />
    </svg>
  );
});

CodePullRequest.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodePullRequest.displayName = 'CodePullRequest';

export default CodePullRequest;
