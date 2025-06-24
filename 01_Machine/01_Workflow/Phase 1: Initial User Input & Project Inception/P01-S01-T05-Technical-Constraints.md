---
phase: P01
step: S01
task: T05
task_id: P01-S01-T05
title: Technical Constraints
previous_task: P01-S01-T04
next_task: P02-S01-T01
version: 3.1.0
<<<<<<< HEAD
agent: "@tech-spec-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @tech-spec-agent. Your job is to:
- Elicit from the user all platform preferences, technology stack requirements, security requirements, scalability needs, integration limitations, and feasibility assessments for the project.
- Record each constraint as an object with id, type, description, severity, and feasibility_assessment in the constraints array in 01_Machine/04_Documentation/vision/Phase_1/Project_Vision/Constraints_Matrix.json using the specified schema.
- Only use information provided by the user—do not invent or infer data.
- After saving, update Step.json and DNA.json to mark this task as SUCCEEDED and set the next task to P02-S01-T01.
- Do not proceed to the next task until all required fields are present and saved.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_1/

## 2. Collect Data/Input
- Gather: platform preferences, technology stack, security requirements, scalability needs, integration limitations, feasibility assessment.

## 3. Save Output
- Save output to:
```
01_Machine/04_Documentation/vision/Phase_1/Project_Vision/Constraints_Matrix.json
```
- Output schema:
```json
{
  "constraints": [
    {
      "id": "string",
      "type": "string",
      "description": "string",
      "severity": "string",
      "feasibility_assessment": "string"
    }
  ]
}
```

## 4. Update Progress
- Update:
```
01_Machine/03_Brain/Step.json
01_Machine/03_Brain/DNA.json
```

## 5. Self-Check
- [ ] All required fields present in output file
- [ ] Output file saved at correct path
- [ ] Step.json and DNA.json updated 
=======
source: Step.json
agent: "@tech-spec-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Technical_Constraints.md — Technical_Constraints.md: Documented technical constraints and limitations (missing)

## Mission Statement
Identify platform preferences, technology stack, security, scalability, and integration limitations, and document technical constraints for the project.

## Description
This task focuses on identifying and documenting all technical constraints, including platform and technology preferences, security and scalability requirements, and integration limitations. A preliminary feasibility assessment is also performed.

## Super-Prompt
You are @tech-spec-agent responsible for eliciting and documenting platform preferences, technology stack requirements, security requirements, scalability needs, and integration limitations. Document these in Constraints_Matrix.json and perform a preliminary feasibility assessment.

## MCP Tools Required
- edit_file: Create and update constraints matrix documentation
- file_search: Locate existing constraints matrix or related documentation
- list_dir: Verify documentation structure

## Result We Want
- Technical constraints documented with a preliminary feasibility assessment in Constraints_Matrix.json.

## Add to Brain
- Constraints Matrix: Platform preferences, technology stack, security, scalability, and integration limitations

## Documentation & Templates
- [Constraints_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Constraints_Matrix.json): Comprehensive project constraints and limitations
- [Requirements_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Requirements_Matrix.json): Structured requirements and constraints

## Primary Responsible Agent
@tech-spec-agent

## Supporting Agents
- @nlu-processor-agent
- @elicitation-agent
- @project-initiator-agent
- @market-research-agent

## Agent Selection Criteria
The @tech-spec-agent is chosen for its expertise in constraint analysis, technical validation, and document editing. Supporting agents provide NLU, requirement gathering, project setup, and industry context.

## Tasks (Summary)
- Identify and document all technical constraints, including platform and technology preferences, security and scalability requirements, and integration limitations.

## Subtasks (Detailed)
### Subtask-01: Technical Constraints Assessment
- **ID**: P01-T05-S01
- **Description**: Identify and document all technical constraints, including platform and technology preferences, security and scalability requirements, and integration limitations.
- **Agent Assignment**: @tech-spec-agent
- **Documentation Links**:
  - [Constraints_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Constraints_Matrix.json)
  - [Requirements_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Requirements_Matrix.json)
- **Steps**:
    1. Elicit from the user and technical documentation any platform preferences, technology stack requirements, security requirements (e.g., compliance), scalability needs, and integration limitations.
    2. Document these in Constraints_Matrix.json as at least 5 distinct technical constraints, each with ID, type, description, severity, and feasibility_assessment.
    3. Perform a preliminary feasibility assessment for each constraint.
- **Success Criteria**:
    - Constraints_Matrix.json contains at least 5 distinct technical constraints, each with ID, type, description, severity, and feasibility_assessment.
    - Constraints_Matrix.json is a valid JSON document and adheres to the expected schema.
- **Max Retries**: 2
- **On Failure**: ESCALATE_TO_HUMAN (@tech-lead) with logs and identified constraints.
- **Integration Points**: Technical constraints will critically inform architecture and technology stack decisions.
- **Next Subtask**: P01-S01-T07-Context-and-Market-Analysis.md

## Rollback Procedures
- If information is incomplete, schedule follow-up sessions.
- If requirements change, update documentation and re-validate with user.

## Integration Points
- Technical constraints inform architecture and technology stack decisions.

## Quality Gates
- Completeness Check: All required constraint fields are filled.
- Clarity Validation: Constraints are clearly articulated and unambiguous.
- Documentation Standards: Constraints_Matrix.json is valid and structured.

## Success Criteria
- Technical constraints and feasibility assessment completed and documented.

## Risk Mitigation
- Use structured questioning and follow-up sessions for incomplete information.
- Employ clarification techniques for unclear responses.

## Output Artifacts
- [Constraints_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Constraints_Matrix.json): Comprehensive project constraints and limitations

## Next Action
Initiate technical constraints assessment and document findings.

## Post-Completion Action
Update Step.json and DNA.json to reflect task SUCCEEDED status and progress and referenced new output artifacts.
Upon completion, proceed to P02-S01-T01-Context-and-Market-Analysis.md and update Step.json and DNA.json to reflect progress. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
