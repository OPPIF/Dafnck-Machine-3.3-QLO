---
phase: P02
step: S02
task: T04
task_id: P02-S02-T04
title: Competitive Landscape Analysis
previous_task: P02-S02-T03
next_task: P02-S02-T05
version: 3.1.0
<<<<<<< HEAD
agent: "@market-research-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @market-research-agent. Your job is to:
- Research and identify direct and indirect competitors, their solutions, features, market positioning, strengths, weaknesses, and strategies.
- Analyze alternative solutions, substitute products, workarounds, and current approaches.
- Identify market gaps, switching costs, adoption barriers, and positioning opportunities.
- Document all findings in the required output files using the specified schemas.
- Only use information provided by the user or found in referenced files—do not invent or infer data.
- After saving, update Step.json and DNA.json to mark this task as SUCCEEDED and set the next task to P02-S02-T05.
- Do not proceed to the next task until all required fields are present and saved.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/`

## 2. Collect Data/Input
- Competitor names, solutions, features, market share, pricing models, positioning, value propositions
- Alternative solutions, substitute products, workarounds, current approaches
- Switching costs, adoption barriers, user resistance, market gaps, positioning opportunities, unmet needs

## 3. Save Output
- Save output to:
```
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitive_Analysis.md
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Alternative_Solutions_Analysis.md
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Market_Gap_Assessment.json
```
- Output schemas:
```json
// Competitive_Analysis.md
{
  "competitor_profiles": ["string"],
  "feature_comparison": ["string"],
  "strengths_weaknesses": ["string"]
}
// Alternative_Solutions_Analysis.md
{
  "alternative_solutions": ["string"],
  "substitute_products": ["string"],
  "workarounds": ["string"],
  "current_approaches": ["string"]
}
// Market_Gap_Assessment.json
{
  "switching_costs": ["string"],
  "adoption_barriers": ["string"],
  "user_resistance": ["string"],
  "market_gaps": ["string"],
  "positioning_opportunities": ["string"],
  "unmet_needs": ["string"]
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
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitive_Analysis.md — Competitive_Analysis.md: Competitor landscape and positioning analysis (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Alternative_Solutions_Analysis.md — Alternative_Solutions_Analysis.md: Alternative solutions analysis (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Market_Gap_Assessment.json — Market_Gap_Assessment.json: Market gap assessment (missing)

## Mission Statement
Conduct comprehensive competitive analysis including direct competitors, indirect alternatives, and market positioning to identify differentiation opportunities and competitive advantages.

## Description
Identify and analyze direct competitors including their solutions, features, market positioning, strengths, weaknesses, and competitive strategies. Research indirect competition, substitute solutions, workarounds, and alternative approaches to identify market gaps and positioning opportunities.

## Super-Prompt
You are @market-research-agent responsible for competitive analysis. Your mission is to identify and analyze direct and indirect competitors, assess their solutions, features, and market positioning, and document differentiation opportunities and competitive advantages. Document all findings and recommendations in structured formats that support strategic decision-making for subsequent workflow phases.

## MCP Tools Required
- web_search: Research competitors, features, and market positioning
- edit_file: Create competitor analysis and alternative solutions documentation

## Result We Want
- Comprehensive direct competitor analysis completed with feature comparison and strategic positioning assessment.
- Complete alternative solutions analysis with market gap identification and positioning opportunities documented.

## Add to Brain
- Competitive Intelligence: Competitor analysis and differentiation opportunities

## Documentation & Templates
- [Competitive_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitive_Analysis.md): Competitor landscape and positioning analysis
- [Competitor_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitor_Matrix.json): Competitor matrix
- [Alternative_Solutions_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Alternative_Solutions_Analysis.md): Alternative solutions analysis
- [Market_Gap_Assessment.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Market_Gap_Assessment.json): Market gap assessment

## Primary Responsible Agent
@market-research-agent

## Supporting Agents
- @idea-generation-agent
- @technology-advisor-agent
- @system-architect-agent

## Agent Selection Criteria
The Market Research Agent is chosen for its specialized capabilities in competitive analysis, competitor research, market positioning, alternative analysis, substitution research, and gap analysis.

## Tasks (Summary)
- Research and identify key direct competitors
- Analyze competitor solutions, features, and market positioning
- Document comprehensive competitor analysis
- Research indirect competitors and substitute solutions
- Analyze switching costs and barriers to adoption
- Identify market gaps and positioning opportunities

## Subtasks (Detailed)
### Subtask 1: Direct Competitor Analysis
- **ID**: P02-T04-S02
- **Description**: Identify and analyze direct competitors including their solutions, features, market positioning, strengths, weaknesses, and competitive strategies.
- **Agent Assignment**: @market-research-agent
- **Documentation Links**: [Competitive_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitive_Analysis.md), [Competitor_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitor_Matrix.json)
- **Steps**:
    1. Research and identify key direct competitors in the market space (web_search)
    2. Analyze competitor solutions, features, and market positioning (web_search)
    3. Create comprehensive competitor analysis with strengths, weaknesses, and opportunities (edit_file)
- **Success Criteria**:
    - Output Contains: competitor names, competing solutions, market share, competitive landscape, competitor features, pricing models, market positioning, value propositions
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitive_Analysis.md
    - File Content Contains: competitor_profiles, feature_comparison, strengths_weaknesses
- **Integration Points**: Competitor analysis identifies differentiation opportunities and informs product positioning strategy.
- **Next Subtask**: P02-S02-T05-Technical-Feasibility-Assessment.md

### Subtask 2: Indirect Competition & Alternatives
- **ID**: P02-T04-S03
- **Description**: Research indirect competition, substitute solutions, workarounds, and alternative approaches to identify market gaps and positioning opportunities.
- **Agent Assignment**: @market-research-agent
- **Documentation Links**: [Alternative_Solutions_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Alternative_Solutions_Analysis.md), [Market_Gap_Assessment.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Market_Gap_Assessment.json)
- **Steps**:
    1. Research indirect competitors and substitute solutions (web_search)
    2. Analyze switching costs and barriers to adoption (edit_file)
    3. Identify market gaps and positioning opportunities (edit_file)
- **Success Criteria**:
    - Output Contains: alternative solutions, substitute products, workarounds, current approaches
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Alternative_Solutions_Analysis.md
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Market_Gap_Assessment.json
    - File Content Contains: switching_costs, adoption_barriers, user_resistance, market_gaps, positioning_opportunities, unmet_needs
- **Integration Points**: Gap analysis reveals market opportunities and informs unique value proposition development.
- **Next Subtask**: P02-S02-T05-Technical-Feasibility-Assessment.md

## Rollback Procedures
- Explore alternative approaches or pivot positioning if no clear differentiation is found

## Integration Points
- Competitor analysis guides product positioning and feature prioritization
- Gap analysis reveals market opportunities

## Quality Gates
- Research rigor: Use of multiple sources and methodologies
- Data quality: Reliable, up-to-date competitor and market data
- Analysis depth: Comprehensive competitor and gap analysis
- Objectivity: Unbiased, evidence-based conclusions
- Actionability: Clear, actionable outputs

## Success Criteria
- Comprehensive competitive analysis with differentiation opportunities identified
- Complete alternative solutions analysis with market gap identification

## Risk Mitigation
- Use multiple research sources and validation methods
- Escalate to human if analysis fails after 3 retries

## Output Artifacts
- [Competitive_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Competitive_Analysis.md)
- [Alternative_Solutions_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Alternative_Solutions_Analysis.md)
- [Market_Gap_Assessment.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Market_Gap_Assessment.json)

## Next Action
Initiate competitor and alternative solutions analysis with @market-research-agent

## Post-Completion Action
Update Step.json and DNA.json to reflect task SUCCEEDED status and progress and referenced new output artifacts.
Upon completion, proceed to P02-S02-T05-Context-and-Market-Analysis.md and update Step.json and DNA.json to reflect progress. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
