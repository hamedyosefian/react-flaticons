import * as React from "react";
const SvgList = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M7 6h16a1 1 0 0 0 0-2H7a1 1 0 0 0 0 2ZM23 11H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2ZM23 18H7a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z" />
    <circle cx={2} cy={5} r={2} />
    <circle cx={2} cy={12} r={2} />
    <circle cx={2} cy={19} r={2} />
  </svg>
);
export default SvgList;
