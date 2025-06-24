---
phase: P02
step: S04
task: T05
task_id: P02-S04-T05
title: Growth Strategy Planning
previous_task: P02-S04-T04
next_task: P02-S04-T06
version: 3.1.0
<<<<<<< HEAD
agent: "@system-architect-agent, @market-research-agent, @technology-advisor-agent, @marketing-strategy-orchestrator"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @system-architect-agent and @market-research-agent, supported by @technology-advisor-agent and @marketing-strategy-orchestrator. Your job is to develop a growth strategy for DafnckMachine v3.1, including a scalability framework, market expansion plan, and resource scaling models. Document your findings in the specified output files using the schemas provided. Collaborate as needed to ensure technical and market feasibility.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/`

## 2. Collect Data/Input
- Gather data on business, technical, and operational scalability
- Research market expansion opportunities and target markets
- Collect resource scaling and growth trigger information

## 3. Save Output
- Save scalability framework to: `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Growth_Strategy_Roadmap.md`
- Save market expansion plan to: `01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Market_Expansion_Plan.md`

### Growth_Strategy_Roadmap.md (Markdown)
```
# Growth Strategy Roadmap
- Scalability Framework: [string[]]
- Growth Metrics: [string[]]
- Resource Scaling Models: [string[]]
- Growth Triggers: [string[]]
```

### Market_Expansion_Plan.md (Markdown)
```
# Market Expansion Plan
- Geographic Expansion: [string[]]
- Vertical Strategies: [string[]]
- Horizontal Strategies: [string[]]
- Target Markets: [string[]]
- Market Validation Data: [string[]]
```

## 4. Update Progress
- Mark this task as complete in Step.json and DNA.json after outputs are saved and validated.

## 5. Self-Check
- [ ] Are all required output files present and complete?
- [ ] Are scalability and expansion strategies validated against market and technical data?
- [ ] Is the growth strategy feasible and clearly documented?
- [ ] Have all supporting agents contributed as needed? 
=======
source: Step.json
agent: "@system-architect-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Growth_Strategy_Roadmap.md — Growth_Strategy_Roadmap.md: Growth_Strategy_Roadmap.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Market_Expansion_Plan.md — Market_Expansion_Plan.md: Market_Expansion_Plan.md (missing)

## Mission Statement
Develop growth strategy planning with scalability framework and market expansion strategy for DafnckMachine v3.1.

## Description
This task develops a growth strategy, including scalability framework, market expansion, and resource scaling. The strategy will support scalable business model and expansion planning.

## Super-Prompt
"You are @system-architect-agent and @market-research-agent. Your mission is to develop a growth strategy for DafnckMachine v3.1, including scalability framework, market expansion, and resource scaling. Document all frameworks in structured formats."

## MCP Tools Required
- edit_file: Create growth strategy documentation
- web_search: Research market expansion opportunities
- file_search: Access market and technical data
- list_dir: Organize growth strategy documents

## Result We Want
- Scalability framework with growth enablers
- Market expansion plan with prioritized opportunities

## Add to Brain
- Scalability Framework
- Market Expansion Plan
- Resource Scaling Models

## Documentation & Templates
- [Growth_Strategy_Roadmap.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Growth_Strategy_Roadmap.md)
- [Scalability_Framework.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Scalability_Framework.json)
- [Market_Expansion_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Market_Expansion_Plan.md)
- [Expansion_Roadmap.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Expansion_Roadmap.json)

## Primary Responsible Agent
@system-architect-agent (scalability)
@market-research-agent (expansion)

## Supporting Agents
- @technology-advisor-agent
- @marketing-strategy-orchestrator

## Agent Selection Criteria
@system-architect-agent is chosen for scalability planning and growth architecture. @market-research-agent is chosen for market development and expansion strategy.

## Tasks (Summary)
- Develop scalability framework
- Plan market expansion

## Subtasks (Detailed)
### Subtask 1: Scalability Framework Development
- **ID**: P02-T05-S01
- **Description**: Develop scalability framework covering business, technical, and operational dimensions.
- **Agent**: @system-architect-agent
- **Documentation Links**:
  - [Growth_Strategy_Roadmap.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Growth_Strategy_Roadmap.md)
  - [Scalability_Framework.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Scalability_Framework.json)
- **Steps**:
  1. Develop scalability framework (edit_file)
  2. Define resource scaling models (edit_file)
- **Success Criteria**:
  - File exists: Growth_Strategy_Roadmap.md
  - Business scalability framework with growth metrics
  - Technical scalability requirements and architecture
  - Resource scaling models with capacity thresholds
  - Growth stage definitions and scaling triggers

### Subtask 2: Market Expansion Strategy
- **ID**: P02-T05-S02
- **Description**: Plan market expansion including geographic, vertical, and horizontal strategies.
- **Agent**: @market-research-agent
- **Documentation Links**:
  - [Market_Expansion_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Market_Expansion_Plan.md)
  - [Expansion_Roadmap.json](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Expansion_Roadmap.json)
- **Steps**:
  1. Develop market expansion plan (edit_file)
  2. Research target markets for validation (web_search)
- **Success Criteria**:
  - File exists: Market_Expansion_Plan.md
  - Geographic expansion plan with target markets
  - Vertical and horizontal expansion strategies
  - Target market research completed
  - Market validation data for expansion targets

## Rollback Procedures
- Adjust scalability or expansion plans based on feedback
- Revisit market research for new opportunities

## Integration Points
- Scalability framework informs technical architecture
- Expansion strategy guides product roadmap

## Quality Gates
- Scalable business model demonstrated
- Market validation of expansion strategy

## Success Criteria
- [ ] Scalability framework completed
- [ ] Market expansion plan validated

## Risk Mitigation
- Multiple growth scenarios and triggers
- Ongoing market opportunity assessment

## Output Artifacts
- [Growth_Strategy_Roadmap.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Growth_Strategy_Roadmap.md)
- [Market_Expansion_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/04_Business_Strategy/Market_Expansion_Plan.md)

## Next Action
Initiate scalability framework development with @system-architect-agent

## Post-Completion Action
Update Step.json and DNA.json to reflect SUCCEEDED status for this task and its outcomes. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
