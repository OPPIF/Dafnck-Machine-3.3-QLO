import sys
from pathlib import Path

import pytest

# Add validator directory to path
VALIDATOR_PATH = Path(__file__).resolve().parents[1] / '01_Machine' / '03_Brain' / 'Agents-Check'
sys.path.insert(0, str(VALIDATOR_PATH))

import unified_agent_validator as uav

@pytest.fixture
def validator():
    return uav.AgentValidator(Path(__file__))

def minimal_agent(slug='test-agent'):
    instr = ('**Core Purpose**\n**Key Capabilities**\n**Operational Process**\n'
             '**Technical Outputs**\n**Domain Specializations**\n**Quality Standards**\n**MCP Tools**')
    return {
        'customModes': [{
            'slug': slug,
            'name': 'Test',
            'roleDefinition': 'Role',
            'customInstructions': instr,
            'groups': ['read', 'edit', 'mcp', 'command'],
            'inputSpec': {'type': 'json', 'format': 'text', 'example': 'ex', 'schema': {}, 'validationRules': {}},
            'outputSpec': {'type': 'json', 'format': 'text', 'example': 'ex', 'schema': {}, 'validationRules': {}},
            'errorHandling': 'eh',
            'healthCheck': 'hc'
        }]
    }

def test_basic_structure_valid(validator):
    data = minimal_agent('valid-agent')
    errors = validator._validate_basic_structure(data, Path('valid-agent.json'))
    assert errors == []

def test_basic_structure_slug_mismatch(validator):
    data = minimal_agent('wrong')
    errors = validator._validate_basic_structure(data, Path('right.json'))
    assert any('slug' in e for e in errors)

def test_detailed_fields_missing_name(validator):
    data = minimal_agent()
    del data['customModes'][0]['name']
    errors, warnings = validator._validate_detailed_fields(data, Path('x.json'))
    assert any("name" in e for e in errors)
