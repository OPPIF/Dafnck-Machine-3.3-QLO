---
phase: P03
step: S10
task: T03
task_id: P03-S10-T03
title: Backend Framework Analysis and Selection
<<<<<<< HEAD
agent: ["@technology-advisor-agent", "@system-architect-agent", "@development-orchestrator-agent", "@security-auditor-agent"]
next_task: P03-S10-T04
version: 3.1.0
source: Step.json
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
@technology-advisor-agent (lead), with support from @system-architect-agent, @development-orchestrator-agent, and @security-auditor-agent: Evaluate and select backend frameworks, API frameworks, and middleware for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence. Output all results to the required files. Communicate any blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/`

2. **Collect Data/Input**
   - Gather requirements and technical needs for backend, API, and middleware from previous steps and team input.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Framework_Analysis.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Comparison_Matrix.json (JSON, schema: {"frameworks": [string], "criteria": [string], "scores": [[number]]})
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/API_Framework_Selection.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Middleware_Specifications.json (JSON, schema: {"middleware": [string], "features": [string], "compatibility": object})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Are the framework and middleware selections justified and documented?
   - [ ] Is the comparison matrix comprehensive and evidence-based?
   - [ ] Have all requirements and blockers been communicated and addressed? 
=======
previous_task: P03-S10-T02
next_task: P03-S10-T04
version: 3.1.0
source: Step.json
agent: "@technology-advisor-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Framework_Analysis.md — Backend_Framework_Analysis.md: Backend_Framework_Analysis.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Comparison_Matrix.json — Backend_Comparison_Matrix.json: Backend_Comparison_Matrix.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/API_Framework_Selection.md — API_Framework_Selection.md: API_Framework_Selection.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Middleware_Specifications.json — Middleware_Specifications.json: Middleware_Specifications.json (missing)

## Mission Statement
Analyze and select suitable backend frameworks, API frameworks, and middleware for DafnckMachine v3.1, ensuring optimal performance, scalability, and maintainability.

## Description
This task evaluates backend frameworks (Node.js, Python, Java, .NET), compares their performance, scalability, and ecosystem, and selects the most suitable options. It also includes the selection of API frameworks and middleware for efficient backend and frontend integration.

## Super-Prompt
You are @technology-advisor-agent. Your mission is to evaluate and select backend frameworks, API frameworks, and middleware for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence.

## MCP Tools Required
- web_search
- edit_file

## Result We Want
- Comprehensive backend framework evaluation
- Documented comparison and recommendations
- Artifacts: Backend_Framework_Analysis.md, Backend_Comparison_Matrix.json, API_Framework_Selection.md, Middleware_Specifications.json

## Add to Brain
- Backend framework and API/middleware selection criteria and rationale

## Documentation & Templates
- [Backend_Framework_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Framework_Analysis.md)
- [Backend_Comparison_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Comparison_Matrix.json)
- [API_Framework_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/API_Framework_Selection.md)
- [Middleware_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Middleware_Specifications.json)

## Primary Responsible Agent
@technology-advisor-agent

## Supporting Agents
- @system-architect-agent
- @performance-optimization-agent
- @development-orchestrator-agent
- @security-auditor-agent

## Agent Selection Criteria
@technology-advisor-agent is selected for expertise in backend technology evaluation and comparison. Supporting agents provide architectural, performance, workflow, and security perspectives.

## Tasks (Summary)
- Evaluate backend frameworks
- Select API frameworks and middleware
- Document findings and recommendations

## Subtasks (Detailed)
### Subtask 1: Backend Framework Evaluation
- **ID**: P03-T03-S01
- **Description**: Evaluate Node.js, Python, Java, .NET for performance, scalability, and ecosystem.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: Backend_Framework_Analysis.md, Backend_Comparison_Matrix.json
- **Steps**:
  1. Research backend technologies and frameworks (web_search)
  2. Document evaluation (edit_file)
- **Success Criteria**: Comprehensive evaluation and comparison documented in the specified files.

### Subtask 2: API Framework & Middleware Selection
- **ID**: P03-T03-S02
- **Description**: Select API frameworks and middleware for backend/frontend integration.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: API_Framework_Selection.md, Middleware_Specifications.json
- **Steps**:
  1. Select and document API frameworks and middleware (edit_file)
- **Success Criteria**: Optimal API framework and middleware selection documented.

## Rollback Procedures
- If selected frameworks are found unsuitable, re-evaluate and update selection.
- Escalate to @team-lead if repeated failures occur.

## Integration Points
- Backend framework and API/middleware selection guide API development and server architecture implementation.

## Quality Gates
- Comprehensive comparison and rationale for selections
- Scalability and integration considered

## Success Criteria
- [ ] Comprehensive backend framework evaluation documented
- [ ] API framework and middleware selection documented
- [ ] Artifacts referenced in all backend development tasks

## Risk Mitigation
- Review with supporting agents for completeness
- Update selection as new backend requirements emerge

## Output Artifacts
- [Backend_Framework_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Framework_Analysis.md)
- [Backend_Comparison_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Backend_Comparison_Matrix.json)
- [API_Framework_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/API_Framework_Selection.md)
- [Middleware_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Middleware_Specifications.json)

## Next Action
Initiate backend framework research and evaluation with @technology-advisor-agent.

## Post-Completion Action
Update @Step.json and @DNA.json to reflect task completion and propagate selection to subsequent tasks. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
