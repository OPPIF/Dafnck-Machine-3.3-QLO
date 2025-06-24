---
phase: P02
step: S04
task: T07
task_id: P02-S04-T07
title: Risk Management and Contingency Planning
previous_task: P02-S04-T06
next_task: P02-S04-T08
version: 3.1.0
<<<<<<< HEAD
agent: "@market-research-agent, @system-architect-agent, @technology-advisor-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @market-research-agent, supported by @system-architect-agent and @technology-advisor-agent. Your job is to develop a risk management framework for DafnckMachine v3.1, including strategic risk assessment, mitigation strategies, and contingency planning. Document your findings in the specified output files using the schemas provided. Collaborate as needed to ensure technical and business feasibility.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/`

## 2. Collect Data/Input
- Gather data on strategic risks and prioritization
- Research mitigation strategies and contingency options
- Collect scenario planning and crisis management protocols

## 3. Save Output
- Save risk assessment matrix to: `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Risk_Assessment_Matrix.json`
- Save contingency strategy plan to: `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Contingency_Strategy_Plan.md`

### Risk_Assessment_Matrix.json (JSON Schema)
```
{
  "type": "object",
  "properties": {
    "risks": {"type": "array", "items": {"type": "string"}},
    "prioritization": {"type": "array", "items": {"type": "string"}},
    "mitigation_strategies": {"type": "array", "items": {"type": "string"}}
  },
  "required": ["risks", "prioritization", "mitigation_strategies"]
}
```

### Contingency_Strategy_Plan.md (Markdown)
```
# Contingency Strategy Plan
- Strategic Scenarios: [string[]]
- Contingency Responses: [string[]]
- Crisis Management Protocols: [string[]]
- Decision Triggers: [string[]]
```

## 4. Update Progress
- Mark this task as complete in Step.json and DNA.json after outputs are saved and validated.

## 5. Self-Check
- [ ] Are all required output files present and complete?
- [ ] Are risk and contingency strategies validated against business and technical objectives?
- [ ] Is the risk management framework feasible and clearly documented?
- [ ] Have all supporting agents contributed as needed? 
=======
source: Step.json
agent: "@market-research-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Risk_Assessment_Matrix.json — Risk_Assessment_Matrix.json: Risk_Assessment_Matrix.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Contingency_Strategy_Plan.md — Contingency_Strategy_Plan.md: Contingency_Strategy_Plan.md (missing)

## Mission Statement
Develop risk management framework with strategic risk assessment and contingency planning for DafnckMachine v3.1.

## Description
This task develops a risk management framework, including strategic risk assessment, prioritization, mitigation strategies, and contingency planning. The framework will support strategic flexibility and risk mitigation.

## Super-Prompt
"You are @market-research-agent. Your mission is to develop a risk management framework for DafnckMachine v3.1, including strategic risk assessment, mitigation strategies, and contingency planning. Document all frameworks in structured formats."

## MCP Tools Required
- edit_file: Create risk management documentation
- file_search: Access risk and market data
- list_dir: Organize risk management documents

## Result We Want
- Comprehensive risk assessment with prioritized mitigation strategies
- Robust contingency framework with strategic options

## Add to Brain
- Risk Assessment Matrix
- Contingency Strategy Plan
- Scenario Planning Matrix

## Documentation & Templates
- [Risk_Assessment_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Risk_Assessment_Matrix.json)
- [Strategic_Risk_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Strategic_Risk_Matrix.json)
- [Contingency_Strategy_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Contingency_Strategy_Plan.md)
- [Scenario_Planning_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Scenario_Planning_Matrix.json)

## Primary Responsible Agent
@market-research-agent

## Supporting Agents
- @system-architect-agent
- @technology-advisor-agent

## Agent Selection Criteria
The @market-research-agent is chosen for its expertise in risk assessment, contingency planning, and strategic flexibility.

## Tasks (Summary)
- Conduct strategic risk assessment
- Develop contingency strategies

## Subtasks (Detailed)
### Subtask 1: Strategic Risk Assessment
- **ID**: P02-T07-S01
- **Description**: Assess strategic risks and develop mitigation strategies.
- **Agent**: @market-research-agent
- **Documentation Links**:
  - [Risk_Assessment_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Risk_Assessment_Matrix.json)
  - [Strategic_Risk_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Strategic_Risk_Matrix.json)
- **Steps**:
  1. Conduct comprehensive risk assessment (edit_file)
  2. Prioritize risks and develop mitigation strategies (edit_file)
- **Success Criteria**:
  - File exists: Risk_Assessment_Matrix.json
  - Minimum 15 strategic risks identified and assessed
  - Risk prioritization matrix with severity levels
  - Mitigation strategies for top 5 risks

### Subtask 2: Contingency Strategy Development
- **ID**: P02-T07-S02
- **Description**: Develop contingency strategies with scenario planning and crisis management protocols.
- **Agent**: @market-research-agent
- **Documentation Links**:
  - [Contingency_Strategy_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Contingency_Strategy_Plan.md)
  - [Scenario_Planning_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Scenario_Planning_Matrix.json)
- **Steps**:
  1. Develop contingency strategies with scenario planning (edit_file)
  2. Define crisis management protocols and decision triggers (edit_file)
- **Success Criteria**:
  - File exists: Contingency_Strategy_Plan.md
  - Minimum 3 strategic scenarios with contingency responses
  - Pivot options and strategic flexibility measures
  - Crisis management protocols defined
  - Decision triggers and escalation procedures

## Rollback Procedures
- Adjust risk assessment or contingency plans based on new risks
- Revisit mitigation strategies for effectiveness

## Integration Points
- Risk assessment informs strategic planning
- Contingency planning provides strategic flexibility

## Quality Gates
- Comprehensive risk identification and prioritization
- Strategic flexibility and contingency options

## Success Criteria
- [ ] Risk assessment completed
- [ ] Contingency strategies documented

## Risk Mitigation
- Ongoing risk monitoring and scenario planning
- Multiple contingency options for high-priority risks

## Output Artifacts
- [Risk_Assessment_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Risk_Assessment_Matrix.json)
- [Contingency_Strategy_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Contingency_Strategy_Plan.md)

## Next Action
Initiate strategic risk assessment with @market-research-agent

## Post-Completion Action
Update Step.json and DNA.json to reflect SUCCEEDED status for this task and its outcomes. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
