module.exports = {
  'env': {
      'browser': true,
      'meteor': true,
      'node': true,
      'es6': true
  },
  "extends": "airbnb",
  'plugins': ['react'],
  "rules": {
    "semi": [2,"never"],
    "max-len":[1,200,2],
    "linebreak-style": [ 0, "windows" ],
    "react/prefer-stateless-function":[ 0, { "ignorePureComponents": true} ],
    "react/jsx-filename-extension": [0],
    "react/jsx-wrap-multilines": [0],
    "function-paren-newline": [0],
    "jsx-a11y/anchor-is-valid": [0],
    "object-curly-newline": [0]
  }
}
