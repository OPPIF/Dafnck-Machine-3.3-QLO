---
phase: P02
step: S02
task: T01
task_id: P02-S02-T01
title: Problem Statement Refinement
previous_task: P01-S01-T05
next_task: P02-S02-T02
version: 3.1.0
<<<<<<< HEAD
agent: "@elicitation-agent, @market-research-agent, @idea-generation-agent, @technology-advisor-agent, @system-architect-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @elicitation-agent, supported by @market-research-agent, @idea-generation-agent, @technology-advisor-agent, and @system-architect-agent. Your job is to:
- Retrieve and analyze user briefing outputs to extract the initial problem statement and requirements.
- Refine the problem statement by clarifying scope, identifying root causes, and defining measurable success metrics.
- Document the refined problem statement in 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md using the required schema.
- Identify and categorize all stakeholders affected by the problem, quantify impact levels, and prioritize validation targets.
- Document the stakeholder impact matrix in 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Stakeholder_Impact_Matrix.json using the required schema.
- Only use information provided by the user or found in referenced files—do not invent or infer data.
- After saving, update Step.json and DNA.json to mark this task as SUCCEEDED and set the next task to P02-S02-T02.
- Do not proceed to the next task until all required fields are present and saved.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/`

## 2. Collect Data/Input
- Initial problem statement, scope, root causes, success metrics
- Stakeholders, impact levels, validation priority

## 3. Save Output
- Save output to:
```
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Stakeholder_Impact_Matrix.json
```
- Output schemas:
```json
// Problem_Statement.md
{
  "problem_scope": "string",
  "root_causes": ["string"],
  "success_metrics": ["string"]
}
// Stakeholder_Impact_Matrix.json
{
  "primary_stakeholders": ["string"],
  "secondary_stakeholders": ["string"],
  "impact_levels": ["string"],
  "impact_severity": ["string"],
  "validation_priority": ["string"],
  "research_targets": ["string"]
}
```

## 4. Update Progress
- Update:
```
01_Machine/03_Brain/Step.json
01_Machine/03_Brain/DNA.json
```

## 5. Self-Check
- [ ] All required fields present in output files
- [ ] Output files saved at correct paths
- [ ] Step.json and DNA.json updated

=======
source: Step.json
agent: "@elicitation-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md — Problem_Statement.md: Refined and validated problem definition (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Stakeholder_Impact_Matrix.json — Stakeholder_Impact_Matrix.json: Stakeholder impact matrix (missing)

## Mission Statement
Analyze and refine the initial problem statement from user briefing to create a clear, measurable, and validated problem definition that guides all subsequent validation activities.

## Description
Analyze the initial problem statement from user briefing, clarify scope and boundaries, identify root causes, and validate problem significance with measurable success metrics. Develop a comprehensive problem statement that clarifies scope, identifies root causes, and defines measurable success criteria.

## Super-Prompt
You are @market-research-agent responsible for leading problem validation and market research. Your mission is to systematically analyze and refine the initial problem statement, clarify its scope, identify root causes, and define measurable success metrics. Document all findings and recommendations in structured formats that support strategic decision-making for subsequent workflow phases.

## MCP Tools Required
- file_search: Retrieve and analyze user briefing outputs
- edit_file: Create refined problem statement documentation

## Result We Want
- Problem statement document created with clear scope definition, identified root causes, and measurable success metrics.

## Add to Brain
- Problem Definition: Validated problem statement with market evidence

## Documentation & Templates
- [Problem_Statement.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md): Refined and validated problem definition
- [User_Briefing_Summary.md](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Briefing_Summary.md): User briefing summary

## Primary Responsible Agent
@market-research-agent

## Supporting Agents
- @idea-generation-agent
- @technology-advisor-agent
- @system-architect-agent

## Agent Selection Criteria
The Market Research Agent is chosen for its specialized capabilities in problem analysis, definition refinement, and market research. This agent excels at data-driven research and translating insights into actionable recommendations.

## Tasks (Summary)
- Analyze initial problem statement from user briefing
- Clarify scope, boundaries, and root causes
- Define measurable success metrics
- Document refined problem statement

## Subtasks (Detailed)
### Subtask 1: Problem Definition Analysis
- **ID**: P02-T01-S02
- **Description**: Analyze the initial problem statement, clarify scope and boundaries, identify root causes, and validate significance with measurable metrics.
- **Agent Assignment**: @market-research-agent
- **Documentation Links**: [Problem_Statement.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md), [User_Briefing_Summary.md](mdc:01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Briefing_Summary.md)
- **Steps**:
    1. Retrieve and analyze user briefing outputs to extract initial problem statement and requirements (file_search)
    2. Create refined problem statement document with clear scope, root causes, and success metrics (edit_file)
- **Success Criteria**:
    - File Exists: 01_Machine/04_Documentation/vision/Phase_1/01_User_Briefing/Briefing_Summary.md
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md
    - File Content Contains: Problem Scope, Root Causes, Success Metrics
- **Integration Points**: Refined problem statement serves as foundation for all validation activities and guides market research focus.
- **Next Subtask**: P02-S02-T02-Market-Opportunity-Analysis.md

### Subtask 2: Stakeholder Impact Assessment
- **ID**: P02-T01-S03
- **Description**: Identify all stakeholders affected by the problem, quantify impact levels, map relationships, and prioritize validation targets for user research activities.
- **Agent Assignment**: @market-research-agent
- **Documentation Links**: [Stakeholder_Impact_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Stakeholder_Impact_Matrix.json), [Problem_Statement.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md)
- **Steps**:
    1. Identify and categorize all stakeholders affected by the defined problem (edit_file)
    2. Quantify impact levels and prioritize stakeholders for validation research (edit_file)
- **Success Criteria**:
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Stakeholder_Impact_Matrix.json
    - File Content Contains: primary_stakeholders, secondary_stakeholders, impact_levels, impact_severity, validation_priority, research_targets
- **Integration Points**: Stakeholder analysis directly informs user validation strategy and research participant selection.
- **Next Subtask**: P02-S02-T02-Market-Opportunity-Analysis.md

## Rollback Procedures
- Revisit user briefing and refine problem statement if invalid

## Integration Points
- Builds on user briefing outputs and project requirements
- Guides all subsequent validation activities

## Quality Gates
- Research rigor: Structured analysis and documentation
- Data quality: Accurate extraction from user briefing
- Objectivity: Unbiased assessment
- Actionability: Clear, measurable outputs

## Success Criteria
- Refined problem statement with clear scope, root causes, and measurable success metrics

## Risk Mitigation
- Use multiple sources for validation
- Escalate to human if analysis fails after 3 retries

## Output Artifacts
- [Problem_Statement.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Problem_Statement.md)
- [Stakeholder_Impact_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Stakeholder_Impact_Matrix.json)

## Next Action
Initiate problem definition analysis with @market-research-agent

## Post-Completion Action
Update Step.json and DNA.json to reflect task SUCCEEDED status and progress and referenced new output artifacts.
Upon completion, proceed to P02-S02-T02-Context-and-Market-Analysis.md and update Step.json and DNA.json to reflect progress. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
