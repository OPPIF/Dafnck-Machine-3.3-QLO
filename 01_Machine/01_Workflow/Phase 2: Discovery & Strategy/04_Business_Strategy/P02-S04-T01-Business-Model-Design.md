---
phase: P02
step: S04
task: T01
task_id: P02-S04-T01
title: Business Model Design
previous_task: P02-S03-T08
next_task: P02-S04-T02
version: 3.1.0
<<<<<<< HEAD
agent: "@market-research-agent, @idea-generation-agent, @technology-advisor-agent, @system-architect-agent, @marketing-strategy-orchestrator"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @market-research-agent, supported by @idea-generation-agent, @technology-advisor-agent, @system-architect-agent, and @marketing-strategy-orchestrator. Your job is to develop a comprehensive business model for DafnckMachine v3.1. Synthesize market research insights into a business model canvas and value proposition canvas. Validate all components against market research. Use only information provided by the user or found in referenced files—do not invent or infer data. Document all findings in the output files below. After saving, update Step.json and DNA.json to mark this task as SUCCEEDED and set the next task to P02-S04-T02. Do not proceed until all required fields are present and saved.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/`

## 2. Collect Data/Input
- Business model canvas components: value propositions, customer segments, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, cost structure
- Value propositions, product-market fit validation, strategic positioning

## 3. Save Output
- Save output to:
```
01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Business_Model_Canvas.md
01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Value_Proposition_Canvas.json
```
- Output schema for Value_Proposition_Canvas.json:
```json
{
  "propositions": [
    {
      "customer_job": "string",
      "pain_reliever": "string",
      "gain_creator": "string",
      "fit_score": "number"
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
- [ ] All required fields present in output files
- [ ] Output files saved at correct paths
- [ ] Step.json and DNA.json updated 
=======
source: Step.json
agent: "@market-research-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Business_Model_Canvas.md — Business_Model_Canvas.md: Business_Model_Canvas.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Value_Proposition_Canvas.json — Value_Proposition_Canvas.json: Value_Proposition_Canvas.json (missing)

## Mission Statement
Develop comprehensive business model framework including business model canvas, value propositions, customer segments, revenue streams, and strategic positioning for DafnckMachine v3.1.

## Description
This task synthesizes market research findings into a cohesive business model, defining value propositions, customer segments, channels, customer relationships, revenue streams, key resources, key activities, key partnerships, and cost structure. The business model canvas will guide product development and market execution.

## Super-Prompt
"You are @market-research-agent. Your mission is to develop a comprehensive business model for DafnckMachine v3.1, synthesizing market research insights into actionable business model canvas components, validated value propositions, and strategic positioning. Document all frameworks in structured formats that support business development and strategic decision-making."

## MCP Tools Required
- edit_file: Create business model documentation
- file_search: Access market research outputs
- web_search: Research business model best practices
- list_dir: Organize business model documents

## Result We Want
- Comprehensive business model canvas with validated value propositions
- Clear customer segments, channels, and revenue streams
- Strategic positioning documented

## Add to Brain
- Business Model Canvas
- Value Propositions
- Revenue Streams
- Strategic Positioning

## Documentation & Templates
- [Business_Model_Canvas.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Business_Model_Canvas.md)
- [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Value_Proposition_Canvas.json)

## Supporting Agents
- @idea-generation-agent
- @technology-advisor-agent
- @system-architect-agent
- @marketing-strategy-orchestrator

## Agent Selection Criteria
The @market-research-agent is chosen for its expertise in business model design, strategic analysis, and synthesizing market insights into actionable frameworks.

## Tasks (Summary)
- Develop business model canvas
- Validate components against market research
- Document value propositions and strategic positioning

## Subtasks (Detailed)
### Subtask 1: Business Model Canvas Creation
- **ID**: P02-T01-S01
- **Description**: Create comprehensive business model canvas with all nine components.
- **Agent**: @market-research-agent
- **Documentation Links**:
  - [Business_Model_Canvas.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Business_Model_Canvas.md)
  - [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Value_Proposition_Canvas.json)
- **Steps**:
  1. Create business model canvas based on market research insights (edit_file)
  2. Validate components against market research data (file_search)
- **Success Criteria**:
  - File exists: Business_Model_Canvas.md
  - Contains all 9 business model canvas components
  - Value propositions section with minimum 3 propositions
  - Market validation completed and referenced

### Subtask 2: Value Proposition Design
- **ID**: P02-T01-S02
- **Description**: Design compelling value propositions with product-market fit validation.
- **Agent**: @market-research-agent
- **Documentation Links**:
  - [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Value_Proposition_Canvas.json)
- **Steps**:
  1. Design value proposition canvas (edit_file)
  2. Validate product-market fit for each proposition (edit_file)
- **Success Criteria**:
  - File exists: Value_Proposition_Canvas.json
  - Customer jobs section with minimum 5 jobs
  - Pain relievers and gain creators mapped
  - Product-market fit validation completed
  - Fit score assigned to each value proposition

## Rollback Procedures
- Revisit market research and realign business model components
- Adjust value propositions based on validation feedback

## Integration Points
- Business model guides product development and market positioning
- Value propositions inform product features and marketing

## Quality Gates
- Strategic coherence with market insights
- Market validation of all components

## Success Criteria
- [ ] Business model canvas with all components
- [ ] Value propositions validated
- [ ] Strategic positioning documented

## Risk Mitigation
- Regular validation against market research
- Adjust components based on feedback

## Output Artifacts
- [Business_Model_Canvas.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Business_Model_Canvas.md)
- [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Value_Proposition_Canvas.json)

## Next Action
Initiate business model canvas creation with @market-research-agent

## Post-Completion Action
Update Step.json and DNA.json to reflect SUCCEEDED status for this task and its outcomes. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
