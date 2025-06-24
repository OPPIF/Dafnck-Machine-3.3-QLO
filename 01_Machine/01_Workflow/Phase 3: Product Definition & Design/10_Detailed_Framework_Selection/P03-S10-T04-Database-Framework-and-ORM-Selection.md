---
phase: P03
step: S10
task: T04
task_id: P03-S10-T04
title: Database Framework and ORM Selection
<<<<<<< HEAD
agent: ["@technology-advisor-agent", "@system-architect-agent", "@development-orchestrator-agent", "@security-auditor-agent"]
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P03-S10-T03
next_task: P03-S10-T05
version: 3.1.0
source: Step.json
<<<<<<< HEAD
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
@technology-advisor-agent (lead), with support from @system-architect-agent, @development-orchestrator-agent, and @security-auditor-agent: Evaluate and select database technologies (SQL/NoSQL) and ORM frameworks for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence. Output all analysis, comparison matrices, and specifications to the required files. Communicate blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/`

2. **Collect Data/Input**
   - Gather system requirements, scalability needs, and data access patterns from previous architecture and business analysis steps.
   - Collect team preferences and constraints regarding database and ORM technologies.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Technology_Analysis.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Comparison_Matrix.json (JSON, schema: {"databases": [string], "criteria": [string], "scores": [[number]], "rationale": string})
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/ORM_Framework_Selection.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Data_Access_Specifications.json (JSON, schema: {"orm": string, "config": object, "patterns": [string]})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Is the database and ORM selection rationale clearly documented?
   - [ ] Are comparison matrices and specifications justified and reproducible?
   - [ ] Have all blockers and requirements been communicated and addressed? 
=======
agent: "@technology-advisor-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Technology_Analysis.md — Database_Technology_Analysis.md: Database_Technology_Analysis.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Comparison_Matrix.json — Database_Comparison_Matrix.json: Database_Comparison_Matrix.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/ORM_Framework_Selection.md — ORM_Framework_Selection.md: ORM_Framework_Selection.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Data_Access_Specifications.json — Data_Access_Specifications.json: Data_Access_Specifications.json (missing)

## Mission Statement
Evaluate and select database technologies and Object-Relational Mapping (ORM) frameworks for DafnckMachine v3.1, ensuring optimal data performance, scalability, and maintainability.

## Description
This task evaluates SQL and NoSQL database technologies, benchmarks their performance and scalability, and selects the most suitable options. It also includes the selection of ORM frameworks and data access tools for efficient and type-safe database interaction.

## Super-Prompt
You are @technology-advisor-agent. Your mission is to evaluate and select database technologies and ORM frameworks for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence.

## MCP Tools Required
- edit_file

## Result We Want
- Comprehensive database technology evaluation
- Documented comparison and recommendations
- Artifacts: Database_Technology_Analysis.md, Database_Comparison_Matrix.json, ORM_Framework_Selection.md, Data_Access_Specifications.json

## Add to Brain
- Database and ORM selection criteria and rationale

## Documentation & Templates
- [Database_Technology_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Technology_Analysis.md)
- [Database_Comparison_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Comparison_Matrix.json)
- [ORM_Framework_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/ORM_Framework_Selection.md)
- [Data_Access_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Data_Access_Specifications.json)

## Primary Responsible Agent
@technology-advisor-agent

## Supporting Agents
- @system-architect-agent
- @performance-optimization-agent
- @development-orchestrator-agent
- @security-auditor-agent

## Agent Selection Criteria
@technology-advisor-agent is selected for expertise in database and ORM evaluation. Supporting agents provide architectural, performance, workflow, and security perspectives.

## Tasks (Summary)
- Evaluate database technologies
- Select ORM and data access frameworks
- Document findings and recommendations

## Subtasks (Detailed)
### Subtask 1: Database Technology Evaluation
- **ID**: P03-T04-S01
- **Description**: Evaluate SQL vs NoSQL, performance, scalability, consistency, query capabilities.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: Database_Technology_Analysis.md, Database_Comparison_Matrix.json
- **Steps**:
  1. Evaluate and document various database technologies (edit_file)
- **Success Criteria**: Comprehensive evaluation and comparison documented in the specified files.

### Subtask 2: ORM & Data Access Framework Selection
- **ID**: P03-T04-S02
- **Description**: Select ORM frameworks and data access tools for performance and type safety.
- **Agent**: @technology-advisor-agent
- **Documentation Links**: ORM_Framework_Selection.md, Data_Access_Specifications.json
- **Steps**:
  1. Select and document ORM and data access frameworks (edit_file)
- **Success Criteria**: Optimal ORM and data access framework selection documented.

## Rollback Procedures
- If selected technologies are found unsuitable, re-evaluate and update selection.
- Escalate to @team-lead if repeated failures occur.

## Integration Points
- Database and ORM selection guide data architecture and performance optimization.

## Quality Gates
- Comprehensive comparison and rationale for selections
- Performance and scalability considered

## Success Criteria
- [ ] Comprehensive database technology evaluation documented
- [ ] ORM and data access framework selection documented
- [ ] Artifacts referenced in all data-related development tasks

## Risk Mitigation
- Review with supporting agents for completeness
- Update selection as new data requirements emerge

## Output Artifacts
- [Database_Technology_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Technology_Analysis.md)
- [Database_Comparison_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Database_Comparison_Matrix.json)
- [ORM_Framework_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/ORM_Framework_Selection.md)
- [Data_Access_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Data_Access_Specifications.json)

## Next Action
Initiate database technology and ORM evaluation with @technology-advisor-agent.

## Post-Completion Action
Update @Step.json and @DNA.json to reflect task completion and propagate selection to subsequent tasks. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
