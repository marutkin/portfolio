module.exports = function (api) {
  api.cache(true);

  return {
    presets: [
      "@babel/plugin-proposal-object-rest-spread"
    ],
    plugins: [
      [ "@babel/plugin-proposal-optional-chaining" ],
      [ "@babel/plugin-proposal-nullish-coalescing-operator" ]
    ]
  };
};
