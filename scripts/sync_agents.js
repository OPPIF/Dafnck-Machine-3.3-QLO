#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const fsp = fs.promises;

const AGENTS_DIR = path.join(__dirname, '..', '01_Machine', '02_Agents');
const DNA_PATH = path.join(__dirname, '..', '01_Machine', '03_Brain', 'DNA.json');

async function loadJSON(file) {
  try {
    const data = await fsp.readFile(file, 'utf8');
    return JSON.parse(data);
  } catch (err) {
    console.error(`Error reading ${file}:`, err.message);
    return null;
  }
}

async function saveJSON(file, data) {
  await fsp.writeFile(file, JSON.stringify(data, null, 2));
}

async function syncAgents() {
  const dna = await loadJSON(DNA_PATH);
  if (!dna) return;

  if (!dna.agents) dna.agents = {};

  const agentFiles = (await fsp.readdir(AGENTS_DIR)).filter(f => f.endsWith('.json'));
  const additions = [];

  for (const file of agentFiles) {
    const data = await loadJSON(path.join(AGENTS_DIR, file));
    if (!data) continue;

    const mode = (data.customModes && data.customModes[0]) || {};
    const slug = mode.slug || path.basename(file, '.json');
    const name = mode.name || slug;

    if (!dna.agents[slug]) {
      dna.agents[slug] = {
        id: slug.toUpperCase().replace(/[^A-Z0-9]+/g, '_'),
        name,
        capabilities: []
      };
      additions.push(slug);
    }
  }

  if (additions.length) {
    await saveJSON(DNA_PATH, dna);
    console.log(`✅ Added ${additions.length} missing agent${additions.length === 1 ? '' : 's'} to DNA.json: ${additions.join(', ')}`);
  } else {
    console.log('All agents already present in DNA.json');
  }
}

if (require.main === module) {
  syncAgents().catch(err => {
    console.error(err);
    process.exit(1);
  });
}

module.exports = syncAgents;
