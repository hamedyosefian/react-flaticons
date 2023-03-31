import * as React from "react";
const SvgMenuDots = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx={2} cy={12} r={2} />
    <circle cx={12} cy={12} r={2} />
    <circle cx={22} cy={12} r={2} />
  </svg>
);
export default SvgMenuDots;
