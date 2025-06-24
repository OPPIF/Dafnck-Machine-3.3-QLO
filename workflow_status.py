import argparse
import json
import os
from pathlib import Path
from tempfile import NamedTemporaryFile
from datetime import datetime, timezone

BASE_DIR = Path(__file__).resolve().parent
STEP_FILE = BASE_DIR / '01_Machine' / '03_Brain' / 'Step.json'
DNA_FILE = BASE_DIR / '01_Machine' / '03_Brain' / 'DNA.json'


def load_json(path: Path):
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)


def write_json_atomic(path: Path, data):
    path.parent.mkdir(parents=True, exist_ok=True)
    with NamedTemporaryFile('w', delete=False, dir=str(path.parent), encoding='utf-8') as tmp:
        json.dump(data, tmp, indent=2)
        tmp.flush()
        os.fsync(tmp.fileno())
    os.replace(tmp.name, path)


def show_status():
    step = load_json(STEP_FILE)
    print(f"Current Step : {step.get('currentWorkflowStep')}")
    print(f"Current Agent: {step.get('currentAgent')}")
    actions = step.get('nextActions') or []
    if actions:
        print("Next Actions:")
        for a in actions:
            print(f"- {a}")
    else:
        print("No next actions defined.")


def advance_step():
    step = load_json(STEP_FILE)
    dna = load_json(DNA_FILE)

    sequence = dna.get('workflow_progression', {}).get('step_sequence', [])
    current = step.get('currentWorkflowStep')
    try:
        idx = sequence.index(current)
    except ValueError:
        print('Current step not found in DNA sequence.')
        return

    if idx >= len(sequence) - 1:
        print('Already at final step.')
        return

    next_step = sequence[idx + 1]
    definitions = dna.get('step_definitions', {})
    next_def = definitions.get(next_step, {})

    step['currentWorkflowStep'] = next_step
    step['currentAgent'] = next_def.get('agent')
    step['currentPhase'] = next_def.get('phase')
    step['nextActions'] = [f"Start {next_step} using @{step['currentAgent']}"]
    step['lastUpdated'] = datetime.now(timezone.utc).isoformat()

    # update DNA workflow_state
    ws = dna.get('workflow_state', {})
    progress = ws.get('progress', {})
    ws['previous_step'] = current
    ws['current_step'] = next_step
    ws['next_step'] = sequence[idx + 2] if idx + 2 < len(sequence) else None
    progress['completed_steps'] = idx + 1
    progress['current_step_number'] = idx + 2
    total = progress.get('total_steps') or len(sequence)
    progress['percentage'] = int(progress['completed_steps'] / total * 100)
    ws.setdefault('session', {})['last_updated'] = datetime.now(timezone.utc).isoformat()

    write_json_atomic(STEP_FILE, step)
    write_json_atomic(DNA_FILE, dna)
    print(f"Advanced to {next_step}.")


def main():
    parser = argparse.ArgumentParser(description='Workflow status CLI')
    sub = parser.add_subparsers(dest='command')
    sub.required = True

    sub.add_parser('status', help='Show current status')
    sub.add_parser('advance', help='Advance to next step')

    args = parser.parse_args()
    if args.command == 'status':
        show_status()
    elif args.command == 'advance':
        advance_step()


if __name__ == '__main__':
    main()
