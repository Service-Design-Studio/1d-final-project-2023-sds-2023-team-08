require('@babel/register')({
  presets: ['@babel/preset-env'],
});

module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}'`,
};
