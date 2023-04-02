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
import { FC, SVGAttributes } from 'react';

export interface IconProps extends SVGAttributes<SVGElement> {
  color?: string;
  size?: string | number;
}

export type Icon = FC<IconProps>;
`;

fs.writeFileSync(path.join(rootDir, 'src', 'index.js'), '', 'utf-8');
fs.writeFileSync(
  path.join(rootDir, 'src', 'index.d.ts'),
  initialTypeDefinitions,
  'utf-8',
);

const attrsToString = (attrs) => Object.keys(attrs).map((key) => {
  if (['width', 'height', 'stroke'].includes(key)) {
    return `${key}={${attrs[key]}}`;
  }
  if (key === 'rest') {
    return '{...rest}';
  }
  return `${key}="${attrs[key]}"`;
}).join(' ');

fs.readdirSync(svgDir).filter((f) => f !== '.DS_Store').forEach((file) => {
  const svg = fs.readFileSync(path.join(svgDir, file), 'utf-8');
  const iconName = path.parse(file).name;
  const location = path.join(iconDir, `${iconName}.js`);
  const ComponentName = upperCamelCase(iconName);

  const defaultAttrs = {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 'size',
    height: 'size',
    viewBox: '0 0 24 24',
    fill: 'currentColor',
    rest: '...rest',
  };

  const element = `
    import React, { forwardRef } from 'react';
    import PropTypes from 'prop-types';

    const ${ComponentName} = forwardRef(({ color = 'currentColor', size = '20px', ...rest }, ref) => (
      <svg ref={ref} ${attrsToString(defaultAttrs)}>
        ${svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i)[1]}
      </svg>
    ));

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
