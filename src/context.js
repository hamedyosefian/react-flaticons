import React from 'react';

const MyContext = React.createContext({
  color: undefined,
  size: undefined,
  className: undefined,
  style: undefined,
  attr: undefined,
});
//
export default MyContext;
// import React from 'react';
//
// const MyContext = React.createContext('5px');
//
// export default MyContext;


// import * as React from "react";
//
// export interface IconContext {
//   color?: string;
//   size?: string;
//   // size?: number | string;
//   className?: string;
//   style?: React.CSSProperties;
//   attr?: React.SVGAttributes<SVGElement>;
// }
//
// export const DefaultContext: IconContext = {
//   color: undefined,
//   size: undefined,
//   className: undefined,
//   style: undefined,
//   attr: undefined,
//   // attr: {},
// };



// export const IconContext = React.createContext<IconContext>(DefaultContext);

// export default IconContext;

// export default React.createContext<IconContext>(DefaultContext);
// export const MyContext = React.createContext<IconContext>(DefaultContext);
//
// export const MyContext: React.Context<IconContext> =
//   React.createContext && React.createContext(DefaultContext);
