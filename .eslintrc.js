module.exports = {
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": "eslint:recommended",
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "globals": {
    "React": true
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "prefer-arrow-callback": "error",
    "indent": [
      "error",
      2,
      {"SwitchCase": 1}
    ],
    "complexity": [
      "error",
      3
    ],
    "linebreak-style": [
      "error",
      "unix"
    ],
    "no-console": 0,
    "semi": [
      "error",
      "always"
    ],
    "max-statements": [
      "error",
      15
    ],
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "max-lines": [
      "error",
      {
        "max": 150,
        "skipComments": true
      }
    ]
  }
};
