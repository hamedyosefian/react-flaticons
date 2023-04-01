import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Recycle = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m10.357 2.921-1.416 2.3a1 1 0 0 1-1.7-1.048l1.416-2.3a3.948 3.948 0 0 1 6.692 0l4.2 6.834.441-2.365a1 1 0 0 1 1.967.366l-.5 2.67a3 3 0 0 1-2.942 2.451c-.195 0-3.217-.576-3.217-.576a1 1 0 0 1 .386-1.962l2.133.421-4.174-6.791a1.934 1.934 0 0 0-3.286 0ZM23.409 14.98l-.968-1.572a1 1 0 1 0-1.7 1.048l.968 1.572a1.934 1.934 0 0 1 .041 1.98 1.91 1.91 0 0 1-1.688.992h-7.386l1.271-1.269a1 1 0 0 0-1.412-1.416L10.843 18A2.86 2.86 0 0 0 10 19.98s0 .01 0 .014v.02a2.884 2.884 0 0 0 .855 2.071l1.682 1.652a1 1 0 1 0 1.4-1.427L12.609 21h7.453a3.948 3.948 0 0 0 3.347-6.02ZM6.78 7.213a2.984 2.984 0 0 0-2.263-.46l-2.629.518a1 1 0 1 0 .386 1.962l2.108-.415L.591 14.98A3.948 3.948 0 0 0 3.937 21H7.08a1 1 0 0 0 0-2H3.937a1.91 1.91 0 0 1-1.684-.992 1.934 1.934 0 0 1 .041-1.98L6.132 9.79l.446 2.394a1 1 0 0 0 1.967-.368l-.5-2.67A2.985 2.985 0 0 0 6.78 7.213Z" />
    </svg>
  );
});

Recycle.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Recycle.displayName = 'Recycle';

export default Recycle;
