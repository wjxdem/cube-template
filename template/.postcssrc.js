// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {}{{#rem}},
    "postcss-px2rem": {
      "remUnit": 37.5
    }{{/rem}}
  }
}
