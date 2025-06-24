---
phase: P03
step: S10
task: T08
task_id: P03-S10-T08
title: Security Framework and Authentication Systems
<<<<<<< HEAD
agent: ["@security-auditor-agent", "@system-architect-agent", "@performance-optimization-agent", "@development-orchestrator-agent", "@technology-advisor-agent"]
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P03-S10-T07
next_task: P03-S10-T09
version: 3.1.0
source: Step.json
<<<<<<< HEAD
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
@security-auditor-agent (lead), with support from @system-architect-agent, @performance-optimization-agent, @development-orchestrator-agent, and @technology-advisor-agent: Evaluate and select security frameworks, authentication systems, and compliance tools for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence. Output all analysis, comparison matrices, and specifications to the required files. Communicate blockers or gaps in requirements immediately.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/`

2. **Collect Data/Input**
   - Gather data protection, access control, and compliance requirements from previous steps and team input.
   - Collect preferences and constraints regarding security, authentication, and compliance tools.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Security_Framework_Analysis.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Authentication_System_Comparison.json (JSON, schema: {"systems": [string], "criteria": [string], "scores": [[number]], "rationale": string})
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Compliance_Framework_Selection.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Audit_Tools_Specifications.json (JSON, schema: {"tool": string, "config": object, "compliance": [string]})

4. **Update Progress**
   - Mark this task as done in Step.json and DNA.json when all outputs are complete and reviewed.

5. **Self-Check**
   - [ ] Are all required output files present and complete?
   - [ ] Is the security and compliance rationale clearly documented?
   - [ ] Are comparison matrices and specifications justified and reproducible?
   - [ ] Have all blockers and requirements been communicated and addressed? 
=======
agent: "@security-auditor-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Security_Framework_Analysis.md — Security_Framework_Analysis.md: Security_Framework_Analysis.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Authentication_System_Comparison.json — Authentication_System_Comparison.json: Authentication_System_Comparison.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Compliance_Framework_Selection.md — Compliance_Framework_Selection.md: Compliance_Framework_Selection.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Audit_Tools_Specifications.json — Audit_Tools_Specifications.json: Audit_Tools_Specifications.json (missing)

## Mission Statement
Evaluate and select security frameworks, authentication systems, and compliance tools for DafnckMachine v3.1, ensuring data protection, user access control, and regulatory compliance.

## Description
This task evaluates security frameworks, authentication and authorization systems, encryption tools, and compliance frameworks. It selects the most suitable options for comprehensive security and compliance validation.

## Super-Prompt
You are @security-auditor-agent. Your mission is to evaluate and select security frameworks, authentication systems, and compliance tools for DafnckMachine v3.1. Document all findings, comparisons, and selection decisions with clear rationale and evidence.

## MCP Tools Required
- web_search
- edit_file

## Result We Want
- Comprehensive security framework evaluation
- Documented comparison and recommendations
- Artifacts: Security_Framework_Analysis.md, Authentication_System_Comparison.json, Compliance_Framework_Selection.md, Audit_Tools_Specifications.json

## Add to Brain
- Security and compliance framework selection rationale

## Documentation & Templates
- [Security_Framework_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Security_Framework_Analysis.md)
- [Authentication_System_Comparison.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Authentication_System_Comparison.json)
- [Compliance_Framework_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Compliance_Framework_Selection.md)
- [Audit_Tools_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Audit_Tools_Specifications.json)

## Primary Responsible Agent
@security-auditor-agent

## Supporting Agents
- @system-architect-agent
- @performance-optimization-agent
- @development-orchestrator-agent
- @technology-advisor-agent

## Agent Selection Criteria
@security-auditor-agent is selected for expertise in security and compliance frameworks. Supporting agents provide architectural, performance, workflow, and technology perspectives.

## Tasks (Summary)
- Evaluate security frameworks and authentication systems
- Select compliance and audit frameworks
- Document findings and recommendations

## Subtasks (Detailed)
### Subtask 1: Security Framework Evaluation
- **ID**: P03-T08-S01
- **Description**: Evaluate authentication, authorization, encryption, and security middleware frameworks.
- **Agent**: @security-auditor-agent
- **Documentation Links**: Security_Framework_Analysis.md, Authentication_System_Comparison.json
- **Steps**:
  1. Research and evaluate security frameworks and authentication systems (web_search)
  2. Document the evaluation of security frameworks (edit_file)
- **Success Criteria**: Comprehensive security framework selection documented.

### Subtask 2: Compliance & Audit Framework Selection
- **ID**: P03-T08-S02
- **Description**: Select compliance frameworks, audit logging, data protection, and privacy compliance tools.
- **Agent**: @security-auditor-agent
- **Documentation Links**: Compliance_Framework_Selection.md, Audit_Tools_Specifications.json
- **Steps**:
  1. Select and document compliance and audit frameworks (edit_file)
- **Success Criteria**: Comprehensive compliance and audit framework selection documented.

## Rollback Procedures
- If selected frameworks are found unsuitable, re-evaluate and update selection.
- Escalate to @team-lead if repeated failures occur.

## Integration Points
- Security and compliance framework selection guide data protection and regulatory adherence.

## Quality Gates
- Comprehensive comparison and rationale for selections
- Data protection and compliance considered

## Success Criteria
- [ ] Comprehensive security framework selection documented
- [ ] Compliance and audit framework selection documented
- [ ] Artifacts referenced in all security-related development tasks

## Risk Mitigation
- Review with supporting agents for completeness
- Update selection as new security requirements emerge

## Output Artifacts
- [Security_Framework_Analysis.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Security_Framework_Analysis.md)
- [Authentication_System_Comparison.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Authentication_System_Comparison.json)
- [Compliance_Framework_Selection.md](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Compliance_Framework_Selection.md)
- [Audit_Tools_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/10_Detailed_Framework_Selection/Audit_Tools_Specifications.json)

## Next Action
Initiate security and compliance framework evaluation with @security-auditor-agent.

## Post-Completion Action
Update @Step.json and @DNA.json to reflect task completion and propagate configuration to subsequent tasks. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
