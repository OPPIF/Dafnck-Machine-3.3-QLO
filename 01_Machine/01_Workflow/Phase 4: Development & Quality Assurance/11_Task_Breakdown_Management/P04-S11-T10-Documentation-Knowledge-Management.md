---
phase: P04
step: S11
task: T10
task_id: P04-S11-T10
title: Documentation & Knowledge Management
<<<<<<< HEAD
agent: ["@task-planning-agent"]
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P04-S11-T09
next_task: P04-S12-T01
version: 3.1.0
source: Step.json
<<<<<<< HEAD
---

# Super Prompt
@task-planning-agent: Generate and consolidate comprehensive documentation and training materials for all tasks and workflows in DafnckMachine v3.1, establishing a robust knowledge management system. Document all task files, workflow guides, and training materials with clear rationale and evidence. Output all documentation and knowledge management files to the required locations. Communicate blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_4_Development_QA/`

2. **Collect Data/Input**
   - Gather all tasks, subtasks, and workflow documentation from tasks.json and supporting files.
   - Collect team input and constraints regarding documentation and training needs.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Task_Documentation_Package.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Knowledge_Management_System.json (JSON, schema: {"documents": [string], "training_materials": [string], "links": [string]})
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Documentation_Package.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Documentation_Package.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Training_Materials_Collection.json (JSON, schema: {"materials": [string], "type": [string], "audience": [string]})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Is the documentation and knowledge management rationale clearly documented?
   - [ ] Are documentation and training materials justified and reproducible?
   - [ ] Have all blockers and requirements been communicated and addressed? 
=======
agent: "@task-planning-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Task_Documentation_Package.md — Task_Documentation_Package.md: Task_Documentation_Package.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Documentation_Package.md — Workflow_Documentation_Package.md: Workflow_Documentation_Package.md (missing)

## Mission Statement
Generate comprehensive documentation for tasks and workflows, establishing a knowledge management system for DafnckMachine v3.1.

## Description
Generate individual task files and other documentation to create a comprehensive knowledge base. Create documentation for workflows, processes, best practices, and training materials.

## Super-Prompt
"You are @task-planning-agent. Your mission is to generate and consolidate comprehensive documentation and training materials for all tasks and workflows, establishing a robust knowledge management system."

## MCP Tools Required
- mcp_taskmaster-ai_generate
- edit_file

## Result We Want
- All tasks and subtasks have corresponding markdown documentation files generated.
- A comprehensive workflow documentation package is assembled.

## Add to Brain
- Knowledge Management: Documentation and training systems supporting team efficiency

## Documentation & Templates
- [Task_Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Task_Documentation_Package.md)
- [Knowledge_Management_System.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Knowledge_Management_System.json)
- [Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Documentation_Package.md)
- [Workflow_Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Documentation_Package.md)
- [Training_Materials_Collection.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Training_Materials_Collection.json)

## Primary Responsible Agent
@task-planning-agent

## Supporting Agents
- None

## Agent Selection Criteria
@task-planning-agent is chosen for its expertise in documentation-generation, knowledge-capture, workflow-documentation, and training-materials.

## Tasks (Summary)
- Generate individual markdown files for all tasks and subtasks in tasks.json
- Consolidate all previously created documentation into a central Workflow Documentation Package

## Subtasks (Detailed)
### Subtask-01: Task Documentation Generation
- **ID:** P04-T10-S01
- **Description:** Generate individual task files and other documentation to create a comprehensive knowledge base.
- **Agent:** @task-planning-agent
- **Documentation Links:**
  - [Task_Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Task_Documentation_Package.md)
  - [Knowledge_Management_System.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Knowledge_Management_System.json)
  - [Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Documentation_Package.md)
- **Steps:**
    1. Generate individual markdown files for all tasks and subtasks in tasks.json using mcp_taskmaster-ai_generate.
- **Success Criteria:**
    - Directory Exists: tasks/ contains multiple .md files corresponding to tasks
    - Tool Output Contains: "Task files generated successfully"
- **On Failure:** NOTIFY_AND_CONTINUE (documentation will be less complete)
- **Max Retries:** 1
- **Integration Points:** Provides a detailed, accessible knowledge base for the development team.
- **Next Subtask:** P04-T10-S02

### Subtask-02: Workflow Documentation & Training
- **ID:** P04-T10-S02
- **Description:** Create documentation for workflows, processes, best practices, and training materials.
- **Agent:** @task-planning-agent
- **Documentation Links:**
  - [Workflow_Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Documentation_Package.md)
  - [Training_Materials_Collection.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Training_Materials_Collection.json)
- **Steps:**
    1. Consolidate all previously created documentation (e.g., Strategy, Guidelines, Frameworks) into a central Workflow Documentation Package using edit_file.
- **Success Criteria:**
    - File Exists: 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Documentation_Package.md
    - File Content Matches: Package document references all relevant workflow and process guides
- **On Failure:** NOTIFY_AND_CONTINUE (training materials may be incomplete)
- **Max Retries:** 0
- **Integration Points:** Supports team onboarding, consistent process execution, and knowledge sharing.
- **Next Subtask:** None

## Rollback Procedures
1. Documentation Issues: Refine and update documentation and training materials

## Integration Points
- Provides a detailed, accessible knowledge base for the development team
- Supports team onboarding, consistent process execution, and knowledge sharing

## Quality Gates
- All tasks and subtasks have corresponding markdown documentation files generated
- A comprehensive workflow documentation package is assembled

## Success Criteria
- [ ] Task documentation generated
- [ ] Workflow documentation and training materials consolidated

## Risk Mitigation
- Documentation Issues: Refine and update documentation and training materials

## Output Artifacts
- [Task_Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Task_Documentation_Package.md)
- [Workflow_Documentation_Package.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Documentation_Package.md)

## Next Action
Proceed to P04-S12-T01-Frontend-Development.md

## Post-Completion Action
Upon completion, ensure all documentation and training materials are consolidated and the project is ready for the next phase: Frontend Development. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
