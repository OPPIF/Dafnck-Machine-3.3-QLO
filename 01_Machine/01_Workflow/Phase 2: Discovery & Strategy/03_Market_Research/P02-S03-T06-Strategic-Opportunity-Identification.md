---
phase: P02
step: S03
task: T06
task_id: P02-S03-T06
title: Strategic Opportunity Identification
previous_task: P02-S03-T05
next_task: P02-S03-T07
version: 3.1.0
<<<<<<< HEAD
agent: "@market-research-agent, @deep-research-agent, @idea-generation-agent, @technology-advisor-agent, @system-architect-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @market-research-agent, supported by @deep-research-agent, @idea-generation-agent, @technology-advisor-agent, and @system-architect-agent. Your job is to identify market gaps and develop a strategic positioning framework for DafnckMachine v3.1. Systematically analyze market intelligence, synthesize opportunities, and define value propositions and differentiation strategies. Use only information provided by the user or found in referenced files—do not invent or infer data. Document all findings in the output files below. After saving, update Step.json and DNA.json to mark this task as SUCCEEDED and set the next task to P02-S03-T07. Do not proceed until all required fields are present and saved.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/03_Market_Research/`

## 2. Collect Data/Input
- Market gaps, unmet needs, underserved segments, white spaces, innovation opportunities
- Value proposition, differentiation strategy, positioning statement, competitive advantages

## 3. Save Output
- Save output to:
```
01_Machine/04_Documentation/vision/Phase_2/Market_Gap_Analysis.md
01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Opportunity_Matrix.json
01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Strategic_Positioning_Framework.md
01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Value_Proposition_Canvas.json
```
- Output schema for Opportunity_Matrix.json:
```json
{
  "opportunities": [
    { "gap": "string", "segment": "string", "value": "string", "priority": "string" }
  ]
}
```
- Output schema for Value_Proposition_Canvas.json:
```json
{
  "propositions": [
    { "segment": "string", "need": "string", "solution": "string", "differentiator": "string" }
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
- [ ] 01_Machine/04_Documentation/vision/Phase_2/Market_Gap_Analysis.md — Market_Gap_Analysis.md: Market_Gap_Analysis.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Opportunity_Matrix.json — Opportunity_Matrix.json: Opportunity_Matrix.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Strategic_Positioning_Framework.md — Strategic_Positioning_Framework.md: Strategic_Positioning_Framework.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Value_Proposition_Canvas.json — Value_Proposition_Canvas.json: Value_Proposition_Canvas.json (missing)

## Mission Statement
Identify market gaps and develop strategic positioning framework based on comprehensive market intelligence to guide product positioning and differentiation.

## Description
Identify market gaps and develop strategic positioning framework based on comprehensive market intelligence to guide product positioning and differentiation for DafnckMachine v3.1.

## Super-Prompt
"You are @market-research-agent responsible for conducting comprehensive market research for DafnckMachine v3.1. Your mission is to systematically analyze the industry landscape, competitive environment, customer segments, and market trends to provide strategic insights for product positioning and go-to-market strategy. Conduct thorough industry analysis, competitive intelligence gathering, customer segmentation, trend analysis, and strategic opportunity identification. Use both quantitative data and qualitative insights to create a comprehensive market understanding. Your research must be objective, data-driven, and provide actionable strategic recommendations for positioning, differentiation, and market entry. Document all findings in structured formats that support strategic decision-making and product development planning."

## MCP Tools Required
- web_search
- edit_file
- file_search
- list_dir

## Result We Want
- Market gaps identified with strategic opportunities prioritized
- Strategic positioning framework developed with differentiation strategy

## Add to Brain
- **Strategic Opportunities**: Market gaps, positioning opportunities, and competitive advantages

## Documentation & Templates
- [Market_Gap_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/Market_Gap_Analysis.md): Gap analysis
- [Opportunity_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Opportunity_Matrix.json): Opportunity matrix
- [Strategic_Positioning_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Strategic_Positioning_Framework.md): Positioning framework
- [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Value_Proposition_Canvas.json): Value proposition canvas

## Primary Responsible Agent
@market-research-agent

## Supporting Agents
- @deep-research-agent
- @idea-generation-agent
- @technology-advisor-agent
- @system-architect-agent

## Agent Selection Criteria
The Market Research Agent is chosen for its specialized capabilities in comprehensive market analysis, competitive intelligence, and strategic research. This agent excels at synthesizing complex market data, identifying strategic opportunities, and translating market insights into actionable business strategies.

## Tasks (Summary)
- Identify market gaps and develop strategic positioning framework based on comprehensive market intelligence to guide product positioning and differentiation.

## Subtasks (Detailed)
### Subtask-01: Market Gap Analysis
- **ID**: P02-T06-S01
- **Description**: Identify unmet needs, underserved segments, competitive white spaces, and innovation opportunities through synthesis of market intelligence.
- **Agent Assignment**: @idea-generation-agent (gap-analysis, opportunity-identification, data-synthesis, document-editing)
- **Documentation Links**: [Market_Gap_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/Market_Gap_Analysis.md), [Opportunity_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Opportunity_Matrix.json)
- **Steps**:
    1. Synthesize all market intelligence to identify unmet needs, underserved segments, competitive white spaces, and innovation opportunities (file_search)
    2. Document gap analysis in Market_Gap_Analysis.md and create prioritized Opportunity_Matrix.json (edit_file)
- **Success Criteria**:
    - At least 3 distinct market gaps/opportunities are internally identified and categorized
    - Unmet needs, underserved segments, and white spaces documented
    - Market_Gap_Analysis.md created with comprehensive gap analysis
    - Opportunity_Matrix.json created with valid JSON structure
    - Analysis includes prioritized opportunities with target segments and potential value
- **On Failure**: ESCALATE_TO_HUMAN (@innovation-lead) if no significant opportunities are identified.
- **Max Retries**: 2
- **Integration Points**: Gap analysis directly informs product positioning and feature prioritization for development phases.
- **Next Subtask**: P02-T06-S02 (Strategic Positioning Framework)

### Subtask-02: Strategic Positioning Framework
- **ID**: P02-T06-S02
- **Description**: Develop strategic positioning framework including value proposition design, differentiation strategy, competitive advantages, and positioning statement.
- **Agent Assignment**: @market-research-agent (positioning-strategy, differentiation-planning, value-proposition-design, document-editing)
- **Documentation Links**: [Strategic_Positioning_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Strategic_Positioning_Framework.md), [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Value_Proposition_Canvas.json)
- **Steps**:
    1. Develop strategic positioning framework including value proposition, differentiation strategy, and competitive advantages (edit_file)
    2. Document positioning framework in Strategic_Positioning_Framework.md and create Value_Proposition_Canvas.json (edit_file)
- **Success Criteria**:
    - Value proposition, differentiation strategy, and competitive advantages defined
    - Clear positioning statement and strategic direction established
    - Strategic_Positioning_Framework.md created with complete framework
    - Value_Proposition_Canvas.json created with valid JSON structure
    - Framework includes clear differentiation strategy and positioning statement
- **On Failure**: ESCALATE_TO_HUMAN (@positioning-strategist) with an undefined positioning.
- **Max Retries**: 2
- **Integration Points**: Positioning framework guides product development priorities and marketing strategy formulation.
- **Next Subtask**: P02-T07-S01 (Channel Strategy Analysis)

## Rollback Procedures
1. Insufficient Market Data: Expand research scope or use alternative data sources
2. Competitive Intelligence Gaps: Conduct additional competitor research or primary interviews
3. Customer Insight Limitations: Supplement with primary customer research or surveys
4. Strategic Misalignment: Revisit research objectives and refocus analysis
5. Recommendation Uncertainty: Conduct scenario analysis and sensitivity testing

## Integration Points
- Gap analysis directly informs product positioning and feature prioritization for development phases.
- Positioning framework guides product development priorities and marketing strategy formulation.

## Quality Gates
1. Research Depth: Comprehensive coverage of all market research dimensions
2. Data Reliability: High-quality sources and validated market data
3. Analysis Rigor: Systematic analysis with objective methodology
4. Strategic Relevance: Research findings directly support strategic decision-making
5. Actionability: Clear, implementable recommendations with specific next steps

## Success Criteria
- Market gaps identified with strategic opportunities prioritized
- Strategic positioning framework developed with differentiation strategy

## Risk Mitigation
- Data Quality Issues: Use multiple sources and cross-validate findings
- Market Volatility: Consider multiple scenarios and sensitivity analysis
- Competitive Intelligence: Use ethical research methods and public information
- Bias Prevention: Implement structured analysis frameworks and objective criteria
- Information Overload: Focus on strategic relevance and decision-critical insights

## Output Artifacts
- [Market_Gap_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_2/Market_Gap_Analysis.md)
- [Opportunity_Matrix.json](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Opportunity_Matrix.json)
- [Strategic_Positioning_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Strategic_Positioning_Framework.md)
- [Value_Proposition_Canvas.json](mdc:01_Machine/04_Documentation/vision/Phase_2_Discovery_Strategy/Value_Proposition_Canvas.json)

## Next Action
Initiate market gap analysis and strategic positioning framework development with @market-research-agent

## Post-Completion Action
Upon successful completion of all subtasks, update @Step.json and @DNA.json to reflect the task's SUCCEEDED status and any associated progress or outcomes. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
