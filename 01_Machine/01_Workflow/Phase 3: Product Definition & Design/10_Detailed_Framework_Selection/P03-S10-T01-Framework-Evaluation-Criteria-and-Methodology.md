---
phase: P03
step: S10
task: T01
task_id: P03-S10-T01
title: Framework Evaluation Criteria and Methodology
<<<<<<< HEAD
agent: ["@technology-advisor-agent", "@system-architect-agent", "@development-orchestrator-agent", "@security-auditor-agent"]
next_task: P03-S10-T02
version: 3.1.0
source: Step.json
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
@technology-advisor-agent (lead), with support from @system-architect-agent, @development-orchestrator-agent, and @security-auditor-agent: Define and document the criteria and methodology for evaluating and selecting technology frameworks for DafnckMachine v3.1. Ensure the process is systematic, justified, and aligned with all technical and business requirements. Output all criteria and methodology to the required files. Communicate any blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/`

2. **Collect Data/Input**
   - Gather architecture requirements and relevant technical/business needs from previous steps and team input.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Framework_Selection_Criteria.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Evaluation_Methodology.json (JSON, schema: {"criteria": [string], "weights": [number], "methodology": string})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Are the selection criteria comprehensive, weighted, and justified?
   - [ ] Is the evaluation methodology systematic and repeatable?
   - [ ] Have all requirements and blockers been communicated and addressed? 
=======
previous_task: null
next_task: P03-S10-T02
version: 3.1.0
source: Step.json
agent: "@technology-advisor-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Framework_Selection_Criteria.md — Framework_Selection_Criteria.md: Framework_Selection_Criteria.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Evaluation_Methodology.json — Evaluation_Methodology.json: Evaluation_Methodology.json (missing)

## Mission Statement
Define the criteria and methodology for evaluating and selecting technology frameworks for DafnckMachine v3.1, ensuring all selections are systematic, justified, and aligned with technical and business requirements.

## Description
This task establishes the evaluation criteria and methodology for framework selection. It includes identifying key selection factors (performance, scalability, maintainability, community support, learning curve), developing a weighted evaluation system, and documenting the process to ensure all future framework decisions are objective and repeatable.

## Super-Prompt
You are @technology-advisor-agent. Your mission is to define and document the criteria and methodology for evaluating and selecting technology frameworks for DafnckMachine v3.1. Ensure the process is systematic, transparent, and aligned with project requirements. Document all criteria and the evaluation methodology with clear rationale and evidence.

## MCP Tools Required
- edit_file
- file_search
- list_dir
- web_search

## Result We Want
- Comprehensive, weighted framework selection criteria
- Documented evaluation methodology
- Artifacts: Framework_Selection_Criteria.md, Evaluation_Methodology.json

## Add to Brain
- Framework selection criteria and methodology for all future framework decisions

## Documentation & Templates
- [Framework_Selection_Criteria.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Framework_Selection_Criteria.md)
- [Evaluation_Methodology.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Evaluation_Methodology.json)

## Primary Responsible Agent
@technology-advisor-agent

## Supporting Agents
- @system-architect-agent
- @performance-optimization-agent
- @development-orchestrator-agent
- @security-auditor-agent

## Agent Selection Criteria
@technology-advisor-agent is selected for expertise in technology evaluation, framework comparison, and implementation planning. Supporting agents provide architectural, performance, workflow, and security perspectives.

## Tasks (Summary)
- Define framework selection criteria
- Develop evaluation methodology
- Document both in required artifacts

## Subtasks (Detailed)
### Subtask 1: Selection Criteria Definition
- **ID**: P03-T01-S01
- **Description**: Define framework selection criteria: performance, scalability, maintainability, community support, learning curve.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: Framework_Selection_Criteria.md, Evaluation_Methodology.json
- **Steps**:
  1. Search for architecture requirements to inform selection criteria (file_search)
  2. Document the defined criteria and methodology (edit_file)
- **Success Criteria**: Comprehensive selection criteria and methodology documented in the specified files.

### Subtask 2: Evaluation Framework Development
- **ID**: P03-T01-S02
- **Description**: Develop evaluation framework: scoring systems, comparison matrices, validation procedures, decision-making processes.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: Framework_Evaluation_Matrix.md, Comparison_Methodology.json
- **Steps**:
  1. Develop and document the evaluation framework, scoring systems, and comparison matrices (edit_file)
- **Success Criteria**: Systematic evaluation framework with objective comparison and scoring methodologies is documented.

## Rollback Procedures
- If criteria are found insufficient, review architecture requirements and update criteria/methodology.
- Escalate to @team-lead if repeated failures occur.

## Integration Points
- Criteria and methodology guide all subsequent framework evaluation and selection tasks.

## Quality Gates
- Criteria are comprehensive, weighted, and justified
- Methodology is systematic and repeatable

## Success Criteria
- [ ] Comprehensive selection criteria documented
- [ ] Weighted evaluation methodology documented
- [ ] Artifacts created and referenced in all future framework selection tasks

## Risk Mitigation
- Review with supporting agents for completeness
- Update criteria/methodology as new requirements emerge

## Output Artifacts
- [Framework_Selection_Criteria.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Framework_Selection_Criteria.md)
- [Evaluation_Methodology.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Evaluation_Methodology.json)

## Next Action
Initiate architecture requirements search and criteria definition with @technology-advisor-agent.

## Post-Completion Action
Update @Step.json and @DNA.json to reflect task completion and propagate criteria/methodology to subsequent tasks. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
