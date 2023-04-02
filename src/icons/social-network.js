import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const SocialNetwork = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M22.773 7.721A4.994 4.994 0 0 0 19 6h-3.989l.336-2.041a3.037 3.037 0 0 0-5.721-1.837L7.712 6H5a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5h13.3a5.024 5.024 0 0 0 4.951-4.3l.705-5a5 5 0 0 0-1.183-3.979ZM2 16v-5a3 3 0 0 1 3-3h2v11H5a3 3 0 0 1-3-3Zm19.971-4.581-.706 5A3.012 3.012 0 0 1 18.3 19H9V7.734a1 1 0 0 0 .23-.292l2.189-4.435a1.07 1.07 0 0 1 1.722-.207 1.024 1.024 0 0 1 .233.84l-.528 3.2A1 1 0 0 0 13.833 8H19a3 3 0 0 1 2.971 3.419Z" />
    </svg>
  );
});

SocialNetwork.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

SocialNetwork.displayName = 'SocialNetwork';

export default SocialNetwork;
