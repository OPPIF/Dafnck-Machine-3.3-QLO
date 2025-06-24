---
phase: P04
step: S11
task: T05
task_id: P04-S11-T05
title: Dependency Management & Workflow Orchestration
<<<<<<< HEAD
agent: ["@task-planning-agent"]
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P04-S11-T04
next_task: P04-S11-T06
version: 3.1.0
source: Step.json
<<<<<<< HEAD
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
@task-planning-agent: Validate, map, and optimize all task dependencies for DafnckMachine v3.1, ensuring a logical and efficient workflow. Document all analysis, mapping, and optimization steps with clear rationale and evidence. Output all reports, diagrams, and plans to the required locations. Communicate blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_4_Development_QA/`

2. **Collect Data/Input**
   - Gather all tasks and dependencies from tasks.json and supporting documentation.
   - Collect team input and constraints regarding dependency management and workflow optimization.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Analysis_Report.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Mapping_Diagram.json (JSON, schema: {"tasks": [string], "dependencies": [string], "critical_paths": [string]})
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Optimization_Plan.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Implementation_Guide.json (JSON, schema: {"steps": [string], "guidelines": [string], "optimization": string})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Is the dependency management and workflow rationale clearly documented?
   - [ ] Are analysis, mapping, and optimization steps justified and reproducible?
   - [ ] Have all blockers and requirements been communicated and addressed? 
=======
agent: "@task-planning-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Analysis_Report.md — Dependency_Analysis_Report.md: Dependency_Analysis_Report.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Mapping_Diagram.json — Workflow_Mapping_Diagram.json: Workflow_Mapping_Diagram.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Optimization_Plan.md — Dependency_Optimization_Plan.md: Dependency_Optimization_Plan.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Implementation_Guide.json — Workflow_Implementation_Guide.json: Workflow_Implementation_Guide.json (missing)

## Mission Statement
Analyze, map, and optimize task dependencies to orchestrate an efficient development workflow for DafnckMachine v3.1.

## Description
Analyze task dependencies, map workflows, identify critical paths, and optimize the dependency structure for efficient workflow and parallel execution where possible.

## Super-Prompt
"You are @task-planning-agent. Your mission is to validate, map, and optimize all task dependencies, ensuring a logical and efficient workflow for the project."

## MCP Tools Required
- mcp_taskmaster-ai_validate_dependencies
- mcp_taskmaster-ai_fix_dependencies
- mcp_taskmaster-ai_add_dependency
- mcp_taskmaster-ai_remove_dependency

## Result We Want
- Task dependencies are validated, and a report/map of the workflow is available.
- Task dependency structure is optimized for efficient workflow.

## Add to Brain
- Development Workflow: Optimized task-driven development process with dependency management and progress tracking

## Documentation & Templates
- [Dependency_Analysis_Report.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Analysis_Report.md)
- [Workflow_Mapping_Diagram.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Mapping_Diagram.json)
- [Dependency_Optimization_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Optimization_Plan.md)
- [Workflow_Implementation_Guide.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Implementation_Guide.json)

## Primary Responsible Agent
@task-planning-agent

## Supporting Agents
- None

## Agent Selection Criteria
@task-planning-agent is chosen for its expertise in dependency-analysis, workflow-mapping, dependency-optimization, and workflow-implementation.

## Tasks (Summary)
- Validate all dependencies in tasks.json
- Fix any issues found
- Add/remove dependencies to optimize flow

## Subtasks (Detailed)
### Subtask-01: Dependency Analysis & Mapping
- **ID:** P04-T05-S01
- **Description:** Analyze task dependencies, map workflows, identify critical paths, and pinpoint potential bottlenecks.
- **Agent:** @task-planning-agent
- **Documentation Links:**
  - [Dependency_Analysis_Report.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Analysis_Report.md)
  - [Workflow_Mapping_Diagram.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Mapping_Diagram.json)
- **Steps:**
    1. Validate all dependencies in tasks.json using mcp_taskmaster-ai_validate_dependencies.
    2. If issues found, attempt to fix them automatically using mcp_taskmaster-ai_fix_dependencies.
- **Success Criteria:**
    - Tool Output Contains: "No dependency issues found" or "Dependency issues listed"
    - Tool Output Contains: "Dependencies fixed successfully" or indication of remaining issues
- **On Failure:** NOTIFY_AND_CONTINUE (manual dependency review required)
- **Max Retries:** 1
- **Integration Points:** Ensures a logical flow of development tasks.
- **Next Subtask:** P04-T05-S02

### Subtask-02: Dependency Optimization & Implementation
- **ID:** P04-T05-S02
- **Description:** Optimize the task dependency structure for efficient workflow and parallel execution where possible.
- **Agent:** @task-planning-agent
- **Documentation Links:**
  - [Dependency_Optimization_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Optimization_Plan.md)
  - [Workflow_Implementation_Guide.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Implementation_Guide.json)
- **Steps:**
    1. Based on analysis (and manual review if needed), add/remove dependencies to optimize flow using mcp_taskmaster-ai_add_dependency / mcp_taskmaster-ai_remove_dependency.
- **Success Criteria:**
    - File Content Matches: tasks.json shows the optimized dependency structure
- **On Failure:** NOTIFY_AND_CONTINUE (workflow may not be fully optimized)
- **Max Retries:** 1
- **Integration Points:** Facilitates smoother project execution and potential for parallel development.
- **Next Subtask:** None

## Rollback Procedures
1. Task Structure Problems: Refine task breakdown and optimize dependency relationships

## Integration Points
- Ensures a logical flow of development tasks
- Facilitates smoother project execution and potential for parallel development

## Quality Gates
- Task dependencies are validated and optimized

## Success Criteria
- [ ] Task dependencies validated
- [ ] Task dependency structure optimized

## Risk Mitigation
- Dependency Conflicts: Thorough dependency validation and optimization procedures

## Output Artifacts
- [Dependency_Analysis_Report.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Analysis_Report.md)
- [Workflow_Mapping_Diagram.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Mapping_Diagram.json)
- [Dependency_Optimization_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Dependency_Optimization_Plan.md)
- [Workflow_Implementation_Guide.json](mdc:01_Machine/04_Documentation/vision/Phase_4_Development_QA/Workflow_Implementation_Guide.json)

## Next Action
Proceed to P04-S11-T06-Progress-Tracking-Monitoring-System.md

## Post-Completion Action
Upon completion, ensure all dependencies are validated and optimized, and the project is ready for progress tracking and monitoring. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
