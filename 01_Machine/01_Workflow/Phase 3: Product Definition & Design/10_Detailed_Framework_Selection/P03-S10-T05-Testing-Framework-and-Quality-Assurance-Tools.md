---
phase: P03
step: S10
task: T05
task_id: P03-S10-T05
title: Testing Framework and Quality Assurance Tools
<<<<<<< HEAD
agent: ["@technology-advisor-agent", "@system-architect-agent", "@performance-optimization-agent", "@development-orchestrator-agent", "@security-auditor-agent"]
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P03-S10-T04
next_task: P03-S10-T06
version: 3.1.0
source: Step.json
<<<<<<< HEAD
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
@technology-advisor-agent (lead), with support from @system-architect-agent, @performance-optimization-agent, @development-orchestrator-agent, and @security-auditor-agent: Evaluate and select testing frameworks (unit, integration, e2e, performance) and quality assurance tools (linting, static analysis, code quality, security) for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence. Output all analysis, comparison matrices, and specifications to the required files. Communicate blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/`

2. **Collect Data/Input**
   - Gather system requirements, codebase characteristics, and QA needs from previous architecture and business analysis steps.
   - Collect team preferences and constraints regarding testing and QA tools.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Testing_Framework_Analysis.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/QA_Tools_Comparison.json (JSON, schema: {"tools": [string], "criteria": [string], "scores": [[number]], "rationale": string})
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Code_Quality_Tools_Selection.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Analysis_Tools_Specifications.json (JSON, schema: {"tool": string, "config": object, "patterns": [string]})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Is the testing and QA tool selection rationale clearly documented?
   - [ ] Are comparison matrices and specifications justified and reproducible?
   - [ ] Have all blockers and requirements been communicated and addressed? 
=======
agent: "@technology-advisor-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Testing_Framework_Analysis.md — Testing_Framework_Analysis.md: Testing_Framework_Analysis.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/QA_Tools_Comparison.json — QA_Tools_Comparison.json: QA_Tools_Comparison.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Code_Quality_Tools_Selection.md — Code_Quality_Tools_Selection.md: Code_Quality_Tools_Selection.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Analysis_Tools_Specifications.json — Analysis_Tools_Specifications.json: Analysis_Tools_Specifications.json (missing)

## Mission Statement
Evaluate and select testing frameworks and quality assurance tools for DafnckMachine v3.1, ensuring code quality, reliability, and security.

## Description
This task evaluates unit, integration, end-to-end, and performance testing frameworks, as well as code quality and analysis tools. It selects the most suitable options for comprehensive quality assurance and security validation.

## Super-Prompt
You are @technology-advisor-agent. Your mission is to evaluate and select testing frameworks and quality assurance tools for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence.

## MCP Tools Required
- edit_file

## Result We Want
- Comprehensive testing framework evaluation
- Documented comparison and recommendations
- Artifacts: Testing_Framework_Analysis.md, QA_Tools_Comparison.json, Code_Quality_Tools_Selection.md, Analysis_Tools_Specifications.json

## Add to Brain
- Testing and QA tool selection criteria and rationale

## Documentation & Templates
- [Testing_Framework_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Testing_Framework_Analysis.md)
- [QA_Tools_Comparison.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/QA_Tools_Comparison.json)
- [Code_Quality_Tools_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Code_Quality_Tools_Selection.md)
- [Analysis_Tools_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Analysis_Tools_Specifications.json)

## Primary Responsible Agent
@technology-advisor-agent

## Supporting Agents
- @system-architect-agent
- @performance-optimization-agent
- @development-orchestrator-agent
- @security-auditor-agent

## Agent Selection Criteria
@technology-advisor-agent is selected for expertise in testing and QA tool evaluation. Supporting agents provide architectural, performance, workflow, and security perspectives.

## Tasks (Summary)
- Evaluate testing frameworks
- Select code quality and analysis tools
- Document findings and recommendations

## Subtasks (Detailed)
### Subtask 1: Testing Framework Evaluation
- **ID**: P03-T05-S01
- **Description**: Evaluate unit, integration, end-to-end, and performance testing frameworks.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: Testing_Framework_Analysis.md, QA_Tools_Comparison.json
- **Steps**:
  1. Evaluate and document various testing frameworks (edit_file)
- **Success Criteria**: Comprehensive evaluation and comparison documented in the specified files.

### Subtask 2: Code Quality & Analysis Tools
- **ID**: P03-T05-S02
- **Description**: Select code quality, linting, static analysis, formatting, and security tools.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: Code_Quality_Tools_Selection.md, Analysis_Tools_Specifications.json
- **Steps**:
  1. Select and document code quality and analysis tools (edit_file)
- **Success Criteria**: Optimal code quality and analysis tool selection documented.

## Rollback Procedures
- If selected tools are found unsuitable, re-evaluate and update selection.
- Escalate to @team-lead if repeated failures occur.

## Integration Points
- Testing and QA tool selection guide code quality and system reliability validation.

## Quality Gates
- Comprehensive comparison and rationale for selections
- Security and coverage considered

## Success Criteria
- [ ] Comprehensive testing framework evaluation documented
- [ ] Code quality and analysis tool selection documented
- [ ] Artifacts referenced in all QA-related development tasks

## Risk Mitigation
- Review with supporting agents for completeness
- Update selection as new QA requirements emerge

## Output Artifacts
- [Testing_Framework_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Testing_Framework_Analysis.md)
- [QA_Tools_Comparison.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/QA_Tools_Comparison.json)
- [Code_Quality_Tools_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Code_Quality_Tools_Selection.md)
- [Analysis_Tools_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Analysis_Tools_Specifications.json)

## Next Action
Initiate testing framework and QA tool evaluation with @technology-advisor-agent.

## Post-Completion Action
Update @Step.json and @DNA.json to reflect task completion and propagate selection to subsequent tasks. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
