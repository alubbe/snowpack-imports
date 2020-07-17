const presets = [
  // ['@babel/preset-env', { forceAllTransforms: true }],
  // ['@babel/preset-env'],
  "@babel/preset-react",
  "@babel/preset-typescript"
]

const plugins = [
  '@babel/plugin-proposal-class-properties',
  '@babel/plugin-proposal-object-rest-spread',
  '@babel/plugin-syntax-dynamic-import',
  '@babel/plugin-syntax-import-meta'
];

module.exports = (api) => {
  api.cache(true);

  return {
    presets,
    plugins,
  };
};
