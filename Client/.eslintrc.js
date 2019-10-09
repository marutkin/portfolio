
"use strict";

module.exports = {
  "parser": "babel-eslint",
  "parserOptions": {
    "sourceType": "module",
    "ecmaVersion": 9
  },
  "env": {
    "es6": true,
    "node": true
  },
  "plugins": ["promise", "import"],
  "extends": [
    "eslint:recommended",
    "plugin:import/recommended",
    "plugin:import/stage-0",
    "plugin:promise/recommended",
  ],
  "rules": {

    // Possible Errors
    // ---------------
    // Most rules in this section are already enabled with <eslint:recommended> ruleset

    "no-extra-parens": ["error", "all", { "conditionalAssign": false, "returnAssign": false, "ignoreJSX": "all" }],
    "no-template-curly-in-string": "error",

    // console.log is disallowed, cause it's most commonly used for quick debug
    // and can be easily forgotten. Want console messages? Pick message level explicitly
    "no-console": ["error", { "allow": ["warn", "error", "info", "debug", "count"] }],


    // Best Practicies
    // ---------------

    "curly": ["error", "multi-line"],
    "dot-notation": ["error", { "allowKeywords": true }],
    "eqeqeq": "error",
    "guard-for-in": "error",
    "no-alert": "error",
    "no-eval": "error",
    "no-extend-native": "error",
    "no-extra-bind": "error",
    "no-extra-label": "error",
    "no-implied-eval": "error",
    "no-iterator": "error",
    "no-labels": "error",
    "no-lone-blocks": "error",
    "no-loop-func": "error",
    "no-multi-spaces": 1,
    "no-multi-str": "error",
    "no-multiple-empty-lines": 1,
    "no-new": "error",
    "no-new-func": "error",
    "no-new-object": "error",
    "no-new-symbol": "error",
    "no-new-wrappers": "error",
    "no-octal-escape": "error",
    "no-proto": "error",
    "no-return-assign": "error",
    "no-script-url": "error",
    "no-sequences": "error",
    "no-unused-vars": ["error", { "ignoreRestSiblings": true }],
    "no-unused-expressions": "error",
    "no-var": "error",
    "no-with": "error",


    // Strict Mode
    // -----------

    "strict": ["error", "global"],


    // Variables
    // ---------

    "no-catch-shadow": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-use-before-define": "error",
    "no-multi-assign": "error",


    // Node.js related rules
    // ---------------------

    "callback-return": "off",
    "handle-callback-err": "error",
    "no-buffer-constructor": "error",
    "no-mixed-requires": "error",
    "no-new-require": "error",
    "no-path-concat": "error",
    "no-process-exit": "error",


    // ES6 related rules
    // -----------------

    // "arrow-body-style": ["error", "as-needed"],
    "arrow-parens": ["error", "always"],
    "arrow-spacing": "error",
    "no-duplicate-imports":"error",
    "no-var": "error",
    "object-shorthand": 1,
    "prefer-arrow-callback": "error",
    "prefer-const": ["error", {"destructuring": "all"}],
    "prefer-destructuring": "error",
    "prefer-rest-params": "error",
    "prefer-template": 1,
    "rest-spread-spacing": ["error", "never"],
    "template-curly-spacing": ["error", "never"],


    // Stylistic Issues
    // ----------------

    "array-bracket-newline": ["error", "consistent"],
    "array-bracket-spacing": ["error", "always", { "objectsInArrays": false, "arraysInArrays": false }],
    "brace-style": ["error", "1tbs", { "allowSingleLine": false }],
    "camelcase": "error",
    "comma-dangle": ["error", "only-multiline"],
    "comma-spacing": ["error", { "before": false, "after": true }],
    "comma-style": "error",
    "computed-property-spacing": ["error", "never"],
    "eol-last": 1,
    "func-call-spacing": ["error", "never"],
    "func-style": ["error", "declaration", { allowArrowFunctions: true }],
    "indent": ["error", 2, { "SwitchCase": 1, "MemberExpression": 1 }],
    "jsx-quotes": ["error", "prefer-double"],
    "key-spacing": ["error", { "beforeColon": false, "afterColon": true }],
    "keyword-spacing": "error",
    "lines-between-class-members": ["error", "always"],
    "max-len": ["error", { "code": 120, "ignoreStrings": true }],
    "new-cap": "error",
    "new-parens": "error",
    "no-array-constructor": "error",
    "no-new-object": "error",
    "no-tabs": "error",
    "no-trailing-spaces": 1,
    "no-underscore-dangle": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": ["error", { "consistent": true }],
    "object-curly-spacing": ["error", "always", { "arraysInObjects": false, "objectsInObjects": false }],
    "quotes": [1, "double"],
    "semi": ["error", "always"],
    "semi-spacing": ["error", {"before": false, "after": true}],
    "space-before-blocks": "error",
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never"}],
    "space-in-parens": ["error", "never"],
    "space-infix-ops": 1,
    "space-unary-ops": [1, { "words": true, "nonwords": false }],

    // Promise plugin
    // --------------

    "promise/no-callback-in-promise": 0,
    "promise/always-return": 0,

    // Import plugin
    // -------------

    "import/first": "error",
    // "import/prefer-default-export": "error",
    "import/no-mutable-exports": "error",
    "import/no-webpack-loader-syntax": "error",
    // "import/extensions": [2, "always", {"ignorePackages": true} ],

    // Own
    // ---

    "max-depth": ["error", 4],

  }
}
