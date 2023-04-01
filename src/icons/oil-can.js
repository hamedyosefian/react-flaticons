import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const OilCan = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M23.587 8.19a1.007 1.007 0 0 0-.9-.14l-5.83 1.911a.993.993 0 0 1-.911-.19A3.9 3.9 0 0 0 12.691 8H11V5h2a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2h2v3H5.973l-1.927-.811A3 3 0 0 0 0 10v1.465a4 4 0 0 0 2.671 3.772L4 15.708V16a4 4 0 0 0 4 4h5.149a4.991 4.991 0 0 0 3.812-1.764l6.8-8.01A1 1 0 0 0 24 9.578V9a1 1 0 0 0-.413-.81ZM3.335 13.353A2 2 0 0 1 2 11.467V10a.986.986 0 0 1 .429-.821.973.973 0 0 1 .88-.132L4 9.34v4.247Zm12.1 3.589A3 3 0 0 1 13.149 18H8a2 2 0 0 1-2-2v-6h6.691a1.885 1.885 0 0 1 1.616.923.984.984 0 0 0 .154.2 3.014 3.014 0 0 0 2.982.752l3.182-1.042Zm7.978-.345a2 2 0 1 1-2.828 0l.8-.9a.819.819 0 0 1 1.226 0Z" />
    </svg>
  );
});

OilCan.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

OilCan.displayName = 'OilCan';

export default OilCan;
