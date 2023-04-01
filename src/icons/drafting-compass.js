import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const DraftingCompass = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="m23.854 22.479-4.545-7.437a14.594 14.594 0 0 0 2.352-1.674 1 1 0 1 0-1.32-1.503c-.65.57-1.347 1.055-2.075 1.47l-3.045-4.983c.485-.662.78-1.47.78-2.351 0-1.858-1.279-3.411-3-3.858V1a1 1 0 1 0-2 0v1.142c-1.721.447-3 2-3 3.858 0 .881.295 1.689.78 2.351l-3.045 4.982a12.477 12.477 0 0 1-2.075-1.47 1 1 0 1 0-1.32 1.504 14.445 14.445 0 0 0 2.352 1.674L.146 22.479a1 1 0 1 0 1.707 1.042l4.648-7.606c1.76.71 3.627 1.077 5.498 1.077s3.738-.367 5.498-1.077l4.648 7.606a.999.999 0 0 0 1.375.333 1 1 0 0 0 .332-1.375ZM12 4c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2ZM7.555 14.191l2.787-4.561c.506.232 1.064.37 1.657.37s1.151-.138 1.657-.37l2.788 4.562a12.742 12.742 0 0 1-8.889 0Z" />
    </svg>
  );
});

DraftingCompass.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DraftingCompass.displayName = 'DraftingCompass';

export default DraftingCompass;
