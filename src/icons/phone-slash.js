import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const PhoneSlash = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M23.7.307a1 1 0 0 0-1.413 0L10.093 12.494a14.192 14.192 0 0 1-2.112-3.409l1.158-1.454a3.1 3.1 0 0 0 .007-4.277S7.294.95 7.264.92A3.08 3.08 0 0 0 2.94.873l-1.149 1c-4.016 4.448-.638 10.714 3.549 15.371L.3 22.28a1 1 0 0 0 1.413 1.413L23.7 1.72a1 1 0 0 0 0-1.413ZM2.007 6.245a4.116 4.116 0 0 1 1.146-2.909l1.149-1a1.1 1.1 0 0 1 1.509-.039s1.841 2.389 1.871 2.419a1.094 1.094 0 0 1 0 1.547C7.656 6.289 6.048 8.3 6.048 8.3a1 1 0 0 0-.148 1 16.393 16.393 0 0 0 2.766 4.618l-1.914 1.915c-2.943-3.159-4.745-6.746-4.745-9.588Zm21.078 10.488a3.1 3.1 0 0 1 0 4.373l-.91 1.048C18.3 25.681 13.6 23.618 9.2 20.645a1 1 0 0 1 1.2-1.6c3.509 2.315 7.332 4.342 10.32 1.749l.911-1.049a1.118 1.118 0 0 0 .085-1.558s-2.392-1.84-2.422-1.87a1.1 1.1 0 0 0-1.548 0c-.027.027-2.043 1.633-2.043 1.633a.994.994 0 0 1-.964.157 15.425 15.425 0 0 1-1.912-.881 1 1 0 0 1 .932-1.763c.371.2.756.391 1.156.561l1.462-1.163a3.1 3.1 0 0 1 4.278-.006s2.399 1.845 2.43 1.878Z" />
    </svg>
  );
});

PhoneSlash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PhoneSlash.displayName = 'PhoneSlash';

export default PhoneSlash;
