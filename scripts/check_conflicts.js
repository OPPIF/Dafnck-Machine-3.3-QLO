const fs = require('fs');
const path = require('path');

const WORKFLOW_DIR = path.join('01_Machine', '01_Workflow');
const MARKERS = ['<<<<<<<', '=======', '>>>>>>>'];

function findMarkdownFiles(dir) {
  const results = [];
  const items = fs.readdirSync(dir);
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      results.push(...findMarkdownFiles(fullPath));
    } else if (item.endsWith('.md')) {
      results.push(fullPath);
    }
  }
  return results;
}

function checkFile(filePath) {
  const lines = fs.readFileSync(filePath, 'utf8').split(/\r?\n/);
  const matches = [];
  for (let i = 0; i < lines.length; i++) {
    for (const marker of MARKERS) {
      if (lines[i].includes(marker)) {
        matches.push({ line: i + 1, marker });
      }
    }
  }
  return matches;
}

function main() {
  const files = findMarkdownFiles(WORKFLOW_DIR);
  let hasConflicts = false;

  for (const file of files) {
    const conflicts = checkFile(file);
    if (conflicts.length > 0) {
      hasConflicts = true;
      console.log(`\nConflict markers found in ${file}:`);
      for (const c of conflicts) {
        console.log(`  Line ${c.line}: ${c.marker}`);
      }
    }
  }

  if (!hasConflicts) {
    console.log('No conflict markers found.');
  }

  if (hasConflicts) {
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}
