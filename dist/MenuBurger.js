import * as React from "react";
const SvgMenuBurger = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width={24} height={2} y={11} rx={1} />
    <rect width={24} height={2} y={4} rx={1} />
    <rect width={24} height={2} y={18} rx={1} />
  </svg>
);
export default SvgMenuBurger;
