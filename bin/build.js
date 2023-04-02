/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable prefer-template */
const path = require('path');
const fs = require('fs');
const format = require('prettier-eslint');
const upperCamelCase = require('uppercamelcase');

const rootDir = path.join(__dirname, '..');

const svgDir = path.join(rootDir, 'src/svgs');
const iconDir = path.join(rootDir, 'src/icons');

if (!fs.existsSync(iconDir)) {
  fs.mkdirSync(iconDir);
}

const initialTypeDefinitions = `/// <reference types="react" />
import { FC, SVGAttributes , CSSProperties, Context} from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export interface IconContextInterface{
  color?: string;
  size?: string;
  className?: string;
  style?: CSSProperties;
  attr?: SVGAttributes<SVGElement>;
}

export type Icon = FC<IconProps>;
export const IconContext: Context<IconContextInterface>;
`;

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), `export { default as IconContext } from './context';\n`, 'utf-8');
fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

fs.readdirSync(svgDir).filter((f) => f !== '.DS_Store').forEach((file) => {
  const svg = fs.readFileSync(path.join(svgDir, file), 'utf-8');
  const iconName = path.parse(file).name;
  const location = path.join(iconDir, `${iconName}.js`);
  const ComponentName = upperCamelCase(iconName);

  const element = `
    import React, { forwardRef, useContext } from 'react';
    import PropTypes from 'prop-types';
    import IconContext  from '../context';
    
    const ${ComponentName} = forwardRef(({ color , size , ...rest }, ref) => {
      const iconContext = useContext(IconContext);

      const mergedProps = {
        color: color ?? iconContext.color ?? 'currentColor',
        size: size ?? iconContext.size ?? '20px',
        ...rest
      };
      return (
      <svg ref={ref} xmlns="http://www.w3.org/2000/svg" width={mergedProps.size} height={mergedProps.size} viewBox="0 0 24 24" fill={mergedProps.color} {...mergedProps}>
        ${svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)[1]}
      </svg>
    )});

    ${ComponentName}.propTypes = {
      color: PropTypes.string,
      size: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
      ]),
    }

    ${ComponentName}.displayName = '${ComponentName}'

    export default ${ComponentName};
  `;

  const component = format({
    text: element,
    eslintConfig: {
      extends: 'airbnb',
    },
    prettierOptions: {
      bracketSpacing: true,
      singleQuote: true,
      parser: 'flow',
    },
  });

  fs.writeFileSync(location, component, 'utf-8');

  console.log(`Successfully built ${ComponentName}`);

  const exportString = `export { default as ${ComponentName} } from './icons/${iconName}';\r\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.js'),
    exportString,
    'utf-8',
  );

  const exportTypeString = `export const ${ComponentName}: Icon;\n`;
  fs.appendFileSync(
    path.join(rootDir, 'src', 'index.d.ts'),
    exportTypeString,
    'utf-8',
  );
});
