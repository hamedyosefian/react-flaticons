import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const CodePullRequestDraft = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8 4c0-2.206-1.794-4-4-4S0 1.794 0 4a4.006 4.006 0 0 0 3 3.873v8.253a4.006 4.006 0 0 0-3 3.873c0 2.206 1.794 4 4 4s4-1.794 4-4a4.006 4.006 0 0 0-3-3.873V7.873A4.006 4.006 0 0 0 8 4ZM2 4c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm4 16c0 1.103-.897 2-2 2s-2-.897-2-2 .897-2 2-2 2 .897 2 2Zm14-4c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4Zm0 6c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2ZM18 4c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Zm0 7c0-1.103.897-2 2-2s2 .897 2 2-.897 2-2 2-2-.897-2-2Z" />
    </svg>
  );
});

CodePullRequestDraft.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CodePullRequestDraft.displayName = 'CodePullRequestDraft';

export default CodePullRequestDraft;
