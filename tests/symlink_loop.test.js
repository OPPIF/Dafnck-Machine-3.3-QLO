const fs = require('fs');
const path = require('path');
const os = require('os');
const assert = require('assert');

const { findMarkdownFiles } = require('../fix_documentation_paths');
const OutputArtifactsAuditor = require('../update_output_artifacts_checklist');

function setupTempDir() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'dm-test-'));
  const workflow = path.join(tmp, 'workflow');
  fs.mkdirSync(workflow);
  const sub = path.join(workflow, 'phase1');
  fs.mkdirSync(sub);
  fs.writeFileSync(path.join(sub, 'file1.md'), '# Test');
  // create symlink loop
  fs.symlinkSync(workflow, path.join(workflow, 'loop'));
  return { tmp, workflow };
}

function cleanup(dir) {
  fs.rmSync(dir, { recursive: true, force: true });
}

(function testSkipSymlink() {
  const { tmp, workflow } = setupTempDir();
  try {
    const files1 = findMarkdownFiles(workflow);
    assert.strictEqual(files1.length, 1, 'findMarkdownFiles should ignore symlinks');

    const auditor = new OutputArtifactsAuditor();
    auditor.workflowDir = workflow;
    const files2 = auditor.discoverWorkflowFiles();
    assert.strictEqual(files2.length, 1, 'discoverWorkflowFiles should ignore symlinks');

    console.log('Symlink loop test passed');
  } finally {
    cleanup(tmp);
  }
})();
