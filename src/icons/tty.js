import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const Tty = forwardRef(({ color = 'currentColor', size = 24, ...rest }, ref) => {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      {...rest}
    >
      <path d="M19 21a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1ZM6 18a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm-4 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm9 1a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm13-7.915-.085 1.264C23.917 11.78 22.696 13 21.196 13c-.044 0-2.522-.322-2.522-.322a2.725 2.725 0 0 1-2.648-2.654l-.155-1.292c-1.309-.494-2.609-.748-3.875-.754a10.612 10.612 0 0 0-3.864.744l-.157 1.302a2.725 2.725 0 0 1-2.648 2.654S2.848 13 2.804 13a2.724 2.724 0 0 1-2.721-2.721L.002 9.153a5.241 5.241 0 0 1 1.554-3.772c4.49-4.489 16.398-4.489 20.887 0C23.448 6.387 24.001 7.702 24 9.085Zm-1.998-.07c0-.779-.346-1.593-.974-2.22-3.983-3.983-14.625-3.431-18.057 0-.627.627-.972 1.44-.971 2.288l.08 1.127c.002.446.298.762.672.788 0 0 2.458-.319 2.502-.319a.723.723 0 0 0 .721-.722c0-.04.24-2.051.24-2.051.042-.349.264-.65.584-.794a12.827 12.827 0 0 1 5.206-1.135c1.704.009 3.447.388 5.179 1.128.329.141.558.445.601.801 0 0 .239 2.011.239 2.051 0 .397.324.722.722.722.044 0 2.502.319 2.502.319a.722.722 0 0 0 .669-.719l.085-1.265ZM15 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0Zm7-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm0 4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Zm-4-4a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z" />
    </svg>
  );
});

Tty.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Tty.displayName = 'Tty';

export default Tty;
