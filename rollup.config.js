// TODO:
// -create postinstall script to copy files out of dist (excluding helpers.js) and into the root of the module
// -Add to GitHub
// -Finish JSDocs
// -Add unit tests

import cleaner from 'rollup-plugin-cleaner';
import resolve from '@rollup/plugin-node-resolve';
import {babel} from '@rollup/plugin-babel';
import replace from '@rollup/plugin-replace';
import path from 'path';

import pkg from './package.json';

import getFilesInDir from './funcs/getFilesInDir';
import upperCaseFirst from './funcs/upperCaseFirst';

//Consts
const externalsCheck = id => ['@babel/runtime'].some(exclude => id.includes(exclude));

const babelPlugin = babel({
  exclude: 'node_modules/**',
  babelrc: true,
  babelHelpers: 'runtime'
});

// List named exports - only constants are allowed, method should be moved into their
// own modules
const namedExports = {};//Do I actually need this?

// Dynamically generated imports for UMD build - all files and folders in the src
// directory that do not start with an _ will be imported using a standard naming
// scheme
const indexImports = getFilesInDir('./src/')
  .map(file => {
    const {dir, root, base, name, ext} = path.parse(file);

    const directory = dir.replace(/\\/g, '/');//convert from windows to posix (if necessary)

    const packageName = `${directory.split('/').pop()}${name.split('-').map(upperCaseFirst).join('')}`;
    const packagePath = `./${directory.slice(4)}/${name}`;//e.g. ./array/add
    const packages = [`default as ${packageName}`, ...(namedExports[packageName] || [])];

    return `export {${packages.join(', ')}} from "${packagePath}";`;
  })
  .join("\n");


const replacePlugin = replace({
  values: {
    "process.env.NODE_ENV": JSON.stringify("development"),
    "indexToReplaceWithImports": indexImports
  },
  preventAssignment: true
});

//Export the config
export default [
  ////////////////////////////////
	// browser-friendly UMD build //
  ////////////////////////////////
  {
		input: ['src/_index.js'],
    external: externalsCheck,
		output: {
			name: 'helpers',
			file: pkg.main,
      format: 'umd',
      globals: {},
		},
		plugins: [
      cleaner({
        targets: [
          './dist/'
        ]
      }),
      replacePlugin,
			resolve({browser: true}),
      babelPlugin,
		]
	},

  /////////
  // CJS //
  /////////

  {
    // Dynamically generated input files for CJS build - all files and folders in the src
    // directory that do not start with an _ will be added as an input
		input: getFilesInDir('./src/'),
    external: externalsCheck,
		output: {
			name: 'helpers',
      exports: 'auto',
      dir: 'dist',
			format: 'cjs',
      preserveModules: true,
      preserveModulesRoot: 'src'
		},
		plugins: [
      replacePlugin,
      resolve(),
      babelPlugin,
		]
	},
];
