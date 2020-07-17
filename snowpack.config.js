const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
const {babel} = require('@rollup/plugin-babel')
const nodePolyfills = require("rollup-plugin-node-polyfills");
const alias =require('@rollup/plugin-alias');
const path = require('path')
const includePaths = require('rollup-plugin-includepaths')
const projectRootDir = path.resolve(__dirname) + '/src';

module.exports = {
  "extends": "@snowpack/app-scripts-react",
  "scripts": {},
  "plugins": [],
  // devOptions: {
  //   open: 'none'
  // },
  // build: {
  //   baseUrl: process.env.PUBLIC_URL,
  // },
  installOptions: {
    rollup: {
      plugins: [
        // alias({
        //   entries: [
        //     {
        //       find: 'foo',
        //       replacement: './foo'
        //       // OR place `customResolver` here. See explanation below.
        //     }
        //   ],
        // }),
        // includePaths({
        //   include: {},
        //   paths: ['src'],
        //   external: [],
        //   extensions: ['.js', '.jsx', '.json', '.html']
        // }),
        // commonjs(), nodePolyfills(),
        nodeResolve({
          customResolveOptions: {
            paths: [`${__dirname}/src`],
          }
        })
      ]
    }
  }
}
// plugins: [nodeResolve({
//   extensions: ['.js', '.jsx', '.mjs', '.json', '.node'],
// }), commonjs(), nodePolyfills(), babel('bundled')]
// }
