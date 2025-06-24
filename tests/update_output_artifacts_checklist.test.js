const fs = require('fs');
const path = require('path');
const os = require('os');
const OutputArtifactsAuditor = require('../update_output_artifacts_checklist.js');

test('adds missing checklist based on output artifacts', async () => {
  const tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), 'audit-'));
  const filePath = path.join(tmpDir, 'step.md');
  const fileContent = `---\n\n# Step\n\n## Output Artifacts\n[Example](mdc:03_Project/file.md): Example`;

  fs.writeFileSync(filePath, fileContent);

  const auditor = new OutputArtifactsAuditor();
  auditor.workflowDir = tmpDir;
  await auditor.run();

  const updated = fs.readFileSync(filePath, 'utf8');
  expect(updated).toMatch(/## Output Artifacts Checklist/);
  expect(updated).toMatch(/03_Project\/file.md/);
});
