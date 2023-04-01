import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const CallMissed = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M3 7V3a2 2 0 0 1 2-2h4a1 1 0 0 1 0 2H6.439l5.906 5.926a.22.22 0 0 0 .157.065.218.218 0 0 0 .156-.064l6.884-6.884a1 1 0 0 1 1.414 1.414l-6.884 6.884a2.2 2.2 0 0 1-1.57.65 2.206 2.206 0 0 1-1.572-.653L5 4.389V7a1 1 0 0 1-2 0Zm21 13.107-.085 1.264a2.707 2.707 0 0 1-2.715 2.651c-.044 0-2.522-.322-2.522-.322a2.726 2.726 0 0 1-2.649-2.654l-.155-1.292A11.11 11.11 0 0 0 12 19a10.68 10.68 0 0 0-3.863.744l-.157 1.3A2.726 2.726 0 0 1 5.326 23.7s-2.478.322-2.522.322A2.724 2.724 0 0 1 .083 21.3L0 20.176A5.249 5.249 0 0 1 1.556 16.4c4.491-4.488 16.4-4.487 20.887 0A5.216 5.216 0 0 1 24 20.107Zm-2-.07a3.2 3.2 0 0 0-.974-2.22c-3.982-3.985-14.627-3.429-18.057 0A3.225 3.225 0 0 0 2 20.105l.081 1.127a.747.747 0 0 0 .671.789s2.458-.32 2.5-.32a.724.724 0 0 0 .722-.722c0-.04.239-2.05.239-2.05a1 1 0 0 1 .585-.794A12.532 12.532 0 0 1 11.942 17h.063a13.354 13.354 0 0 1 5.18 1.128 1 1 0 0 1 .6.8s.239 2.01.239 2.05a.724.724 0 0 0 .722.722c.044 0 2.5.32 2.5.32a.722.722 0 0 0 .669-.719Z" />
    </svg>
  );
});

CallMissed.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

CallMissed.displayName = 'CallMissed';

export default CallMissed;
