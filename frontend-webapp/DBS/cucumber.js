module.exports = {
  default: `--format-options '{"snippetInterface": "synchronous"}'`,
  features: ['features/*.feature'], // Update the glob pattern to match your feature file location
  step_definitions: ['step_definitions/*.cjs'], // Update the glob pattern to match your step definition file location
};
