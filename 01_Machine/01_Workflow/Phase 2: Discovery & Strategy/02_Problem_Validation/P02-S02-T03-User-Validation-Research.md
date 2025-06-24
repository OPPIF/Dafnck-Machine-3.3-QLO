---
phase: P02
step: S02
task: T03
task_id: P02-S02-T03
title: User Validation Research
previous_task: P02-S02-T02
next_task: P02-S02-T04
version: 3.1.0
<<<<<<< HEAD
agent: "@market-research-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @market-research-agent. Your job is to:
- Design a user research plan, including target segments, participant criteria, interview and survey questions, validation metrics, and data collection methods.
- Create an interview guide and survey questionnaire.
- Execute user interviews and surveys, collect pain point data, and validate problem significance and frequency with target users.
- Analyze research data and document findings in the required output files.
- Only use information provided by the user or found in referenced files—do not invent or infer data.
- After saving, update Step.json and DNA.json to mark this task as SUCCEEDED and set the next task to P02-S02-T04.
- Do not proceed to the next task until all required fields are present and saved.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/`

## 2. Collect Data/Input
- Target segments, participant criteria, sample size
- Interview questions, survey questions, validation metrics, success criteria, data collection methods
- Interview responses, pain points, user insights, survey responses, quantitative data, statistical analysis, hypothesis validation, evidence summary, key findings

## 3. Save Output
- Save output to:
```
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Research_Plan.md
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Guide.json
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Validation_Report.md
01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Transcripts.md
```
- Output schemas:
```json
// Interview_Guide.json
{
  "target_segments": ["string"],
  "participant_criteria": ["string"],
  "sample_size": "string",
  "interview_questions": ["string"],
  "survey_questions": ["string"],
  "validation_metrics": ["string"],
  "success_criteria": ["string"],
  "data_collection_methods": ["string"]
}
// User_Validation_Report.md
{
  "interview_responses": ["string"],
  "pain_points": ["string"],
  "user_insights": ["string"],
  "survey_responses": ["string"],
  "quantitative_data": ["string"],
  "statistical_analysis": ["string"],
  "hypothesis_validation": ["string"],
  "evidence_summary": ["string"],
  "key_findings": ["string"]
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
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Research_Plan.md — User_Research_Plan.md: User research plan (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Guide.json — Interview_Guide.json: Interview guide (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Validation_Report.md — User_Validation_Report.md: User validation report (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Transcripts.md — Interview_Transcripts.md: Interview transcripts (missing)

## Mission Statement
Design and execute primary user research including interviews and surveys to validate problem significance, frequency, and impact with target user segments.

## Description
Design comprehensive user validation research methodology including target segment definition, interview guides, survey design, and validation metrics framework. Execute user validation research through interviews and surveys, collect pain point data, and validate problem significance and frequency with target users.

## Super-Prompt
You are @market-research-agent responsible for user validation research. Your mission is to design and execute primary user research, including interviews and surveys, to validate the significance, frequency, and impact of the problem with target user segments. Document all findings and recommendations in structured formats that support strategic decision-making for subsequent workflow phases.

## MCP Tools Required
- edit_file: Create user research plan, interview guides, and validation reports

## Result We Want
- Primary research data collected and analyzed with validated user pain points and problem confirmation documented.

## Add to Brain
- User Validation: Primary research findings and user pain point confirmation

## Documentation & Templates
- [User_Research_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Research_Plan.md): User research plan
- [Interview_Guide.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Guide.json): Interview guide
- [User_Validation_Report.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Validation_Report.md): User validation report
- [Interview_Transcripts.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Transcripts.md): Interview transcripts

## Primary Responsible Agent
@market-research-agent

## Supporting Agents
- @idea-generation-agent
- @technology-advisor-agent
- @system-architect-agent

## Agent Selection Criteria
The Market Research Agent is chosen for its specialized capabilities in research design, interview planning, methodology development, primary research, data collection, and interview analysis.

## Tasks (Summary)
- Design user research plan and participant criteria
- Create interview guides and survey questionnaires
- Establish validation metrics and success criteria
- Execute user interviews and surveys
- Analyze research data and validate problem hypotheses

## Subtasks (Detailed)
### Subtask 1: User Interview Planning
- **ID**: P02-T03-S02
- **Description**: Design comprehensive user validation research methodology including target segment definition, interview guides, survey design, and validation metrics framework.
- **Agent Assignment**: @market-research-agent
- **Documentation Links**: [User_Research_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Research_Plan.md), [Interview_Guide.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Guide.json)
- **Steps**:
    1. Define target user segments and research participant criteria (edit_file)
    2. Create structured interview guides and survey questionnaires (edit_file)
    3. Establish validation metrics and success criteria for research outcomes (edit_file)
- **Success Criteria**:
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Research_Plan.md
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Guide.json
    - File Content Contains: target_segments, participant_criteria, sample_size, interview_questions, survey_questions, validation_metrics, success_criteria, data_collection_methods
- **Integration Points**: Research plan guides primary validation activities and ensures systematic data collection.
- **Next Subtask**: P02-S02-T04-Competitive-Landscape-Analysis.md

### Subtask 2: Primary Research Execution
- **ID**: P02-T03-S03
- **Description**: Execute user validation research through interviews and surveys, collect pain point data, and validate problem significance and frequency with target users.
- **Agent Assignment**: @market-research-agent
- **Documentation Links**: [User_Validation_Report.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Validation_Report.md), [Interview_Transcripts.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Transcripts.md)
- **Steps**:
    1. Conduct user interviews following structured interview guide (edit_file)
    2. Deploy surveys and collect quantitative validation data (edit_file)
    3. Analyze research data and validate problem hypotheses (edit_file)
- **Success Criteria**:
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Transcripts.md
    - File Created: 01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Validation_Report.md
    - File Content Contains: interview_responses, pain_points, user_insights, survey_responses, quantitative_data, statistical_analysis, hypothesis_validation, evidence_summary, key_findings
- **Integration Points**: User validation data provides evidence base for problem significance and informs solution requirements.
- **Next Subtask**: P02-S02-T04-Competitive-Landscape-Analysis.md

## Rollback Procedures
- Revisit user research plan and participant selection if insufficient data is collected

## Integration Points
- User validation data provides evidence base for problem significance and informs solution requirements

## Quality Gates
- Research rigor: Structured methodology and documentation
- Data quality: High-confidence validation metrics and research findings
- Objectivity: Unbiased, evidence-based conclusions
- Actionability: Clear, actionable outputs

## Success Criteria
- Primary user research completed with validated problem significance

## Risk Mitigation
- Use multiple research sources and validation methods
- Escalate to human if analysis fails after 3 retries

## Output Artifacts
- [User_Research_Plan.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Research_Plan.md)
- [Interview_Guide.json](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Guide.json)
- [User_Validation_Report.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/User_Validation_Report.md)
- [Interview_Transcripts.md](mdc:01_Machine/04_Documentation/vision/Phase_2/02_Problem_Validation/Interview_Transcripts.md)

## Next Action
Initiate user interview planning and execution with @market-research-agent

## Post-Completion Action
Update Step.json and DNA.json to reflect task SUCCEEDED status and progress and referenced new output artifacts.
Upon completion, proceed to P02-S02-T04-Context-and-Market-Analysis.md and update Step.json and DNA.json to reflect progress. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
