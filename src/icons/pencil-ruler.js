import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const PencilRuler = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M24 18.586a3.973 3.973 0 0 1-1.172 2.828l-1.414 1.414c-.755.756-1.76 1.172-2.828 1.172s-2.073-.416-2.829-1.172l-2.69-2.69a.999.999 0 1 1 1.414-1.414l2.69 2.69c.756.756 2.073.756 2.829 0L21.414 20c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.931-1.932-1.415 1.414a.999.999 0 1 1-1.414-1.414l2.122-2.121a.999.999 0 0 1 1.414 0l2.638 2.639A3.97 3.97 0 0 1 24 18.586ZM3.862 10.933a.997.997 0 0 0 1.414 0 .999.999 0 0 0 0-1.414l-2.69-2.69C2.208 6.451 2 5.949 2 5.415s.208-1.036.586-1.414L4 2.587c.756-.756 2.073-.756 2.829 0l1.932 1.932-1.415 1.414A.999.999 0 1 0 8.76 7.347l2.122-2.121a.997.997 0 0 0 0-1.414L8.243 1.173C6.732-.34 4.097-.34 2.586 1.172L1.172 2.586C.416 3.342 0 4.346 0 5.414s.416 2.073 1.172 2.828l2.69 2.69Zm19.063-4.664L6.95 22.242A5.954 5.954 0 0 1 2.708 24H1a1 1 0 0 1-1-1v-1.708c0-1.603.624-3.109 1.757-4.242L17.731 1.075a3.676 3.676 0 0 1 5.193 0 3.677 3.677 0 0 1 0 5.193Zm-5.2 2.371L15.36 6.275 3.171 18.464A3.976 3.976 0 0 0 2 21.292V22h.708a3.97 3.97 0 0 0 2.828-1.172l12.19-12.189Zm3.785-6.15a1.675 1.675 0 0 0-2.365 0l-2.371 2.371 2.365 2.365 2.371-2.371a1.676 1.676 0 0 0 0-2.365Z" />
    </svg>
  );
});

PencilRuler.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PencilRuler.displayName = 'PencilRuler';

export default PencilRuler;
