import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';

const PlaneAlt = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
  <svg
    ref={ref}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...rest}
  >
    <path d="M10.689 24a2.688 2.688 0 0 1-2.546-3.547L10.083 15H6.158l-1.08 1.646A2.993 2.993 0 0 1 2.569 18a2.556 2.556 0 0 1-2.4-3.434L1.1 12 .159 9.44A2.555 2.555 0 0 1 .46 7.1a2.811 2.811 0 0 1 4.6.247L6.155 9h3.928L8.147 3.563a2.7 2.7 0 0 1 .359-2.442 2.883 2.883 0 0 1 4.817.442L17.58 9h3.313a3.084 3.084 0 0 1 3.067 2.5A3 3 0 0 1 21 15h-3.42l-4.267 7.454A2.989 2.989 0 0 1 10.689 24ZM5.618 13H11.5a1.006 1.006 0 0 1 .942 1.335l-2.41 6.773a.676.676 0 0 0 .1.605.9.9 0 0 0 1.437-.234l4.563-7.979A1 1 0 0 1 17 13h4a1 1 0 0 0 .985-1.175A1.083 1.083 0 0 0 20.893 11H17a1 1 0 0 1-.868-.5l-4.555-7.961a.894.894 0 0 0-1.447-.252.684.684 0 0 0-.093.621l2.4 6.757A1.006 1.006 0 0 1 11.5 11H5.618a1 1 0 0 1-.834-.448l-1.393-2.1c-.228-.421-1.034-.637-1.29-.21a.541.541 0 0 0-.065.51l1.072 2.906a1 1 0 0 1 0 .69l-1.066 2.91a.556.556 0 0 0 .522.742 1 1 0 0 0 .837-.452l1.376-2.1A1 1 0 0 1 5.618 13Z" />
  </svg>
));

PlaneAlt.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

PlaneAlt.displayName = 'PlaneAlt';

export default PlaneAlt;
