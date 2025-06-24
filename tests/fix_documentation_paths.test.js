const { updateFilePaths } = require('../fix_documentation_paths.js');

test('replaces old documentation paths', () => {
  const input = 'See 01_Machine/04_Documentation/Doc/file.md for details.';
  const output = updateFilePaths(input);
  expect(output).toBe('See 01_Machine/04_Documentation/vision/file.md for details.');
});
