import * as React from "react";
const SvgCircle = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path d="M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10 10 0 0 1-10 10Z" />
  </svg>
);
export default SvgCircle;
