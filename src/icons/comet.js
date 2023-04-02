import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const Comet = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M8.5 24a8.45 8.45 0 0 1-6.011-2.489C-3.854 14.954 3.139 4.91 9.141 1.4a2.508 2.508 0 0 1 2.556-.092 2.5 2.5 0 0 1 1.304 2.196v.729c.443-.273.913-.568 1.395-.87C16.472 2.062 18.62.717 19.912.211a2.951 2.951 0 0 1 3.206.673 2.953 2.953 0 0 1 .673 3.206c-.506 1.292-1.852 3.438-3.152 5.516-.302.481-.597.951-.87 1.395h.729a2.504 2.504 0 0 1 2.103 3.86c-2.841 4.419-8.036 9.141-14.099 9.141Zm1.992-21a.498.498 0 0 0-.27.082C5.174 6.134-1.308 14.396 3.903 20.097c5.703 5.21 13.96-1.269 17.014-6.319.146-.229.062-.437.02-.516S20.765 13 20.496 13h-2.495c-.745.023-1.257-.862-.868-1.497.478-.834 1.125-1.866 1.811-2.96 1.193-1.905 2.547-4.064 2.984-5.183a.971.971 0 0 0-.225-1.062c-.108-.107-.505-.444-1.062-.226-1.118.438-3.277 1.792-5.183 2.985-1.094.686-2.126 1.333-2.96 1.811A1 1 0 0 1 11.001 6V3.505a.494.494 0 0 0-.262-.441.542.542 0 0 0-.246-.063ZM9 19c-5.275-.138-5.274-7.863 0-8 5.275.138 5.273 7.863 0 8Zm0-6c-2.628.047-2.628 3.953 0 4 2.628-.047 2.628-3.953 0-4Z" />
    </svg>
  );
});

Comet.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Comet.displayName = 'Comet';

export default Comet;
