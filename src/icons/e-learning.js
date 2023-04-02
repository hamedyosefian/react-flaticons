import React, { forwardRef, useContext } from 'react';
import PropTypes from 'prop-types';
import IconContext from '../context';

const ELearning = forwardRef(({ color, size, ...rest }, ref) => {
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
      <path d="M19.9 3.091a4 4 0 0 0-5-2.938l-1.724.493A2.981 2.981 0 0 0 12 1.3a2.981 2.981 0 0 0-1.176-.654L9.1.153a4 4 0 0 0-4.995 2.938A5 5 0 0 0 0 8v7a5.006 5.006 0 0 0 5 5h6v2H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2h-3v-2h6a5.006 5.006 0 0 0 5-5V8a5 5 0 0 0-4.1-4.909Zm-6.9.44a1 1 0 0 1 .725-.961l1.725-.493A2 2 0 0 1 18 4v3.938a2.006 2.006 0 0 1-1.45 1.921L13 10.873ZM6.8 2.4a1.993 1.993 0 0 1 1.75-.323l1.725.493a1 1 0 0 1 .725.961v7.342L7.45 9.859A2.006 2.006 0 0 1 6 7.938V4a1.987 1.987 0 0 1 .8-1.6ZM22 15a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 2-2.816v2.754a4.014 4.014 0 0 0 2.9 3.845l3.451.987a6.019 6.019 0 0 0 3.3 0l3.451-.987A4.014 4.014 0 0 0 20 7.938V5.184A3 3 0 0 1 22 8Z" />
    </svg>
  );
});

ELearning.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

ELearning.displayName = 'ELearning';

export default ELearning;
