---
phase: P04
step: S14
task: T10
task_id: P04-S14-T10
title: Documentation Continuous Improvement
<<<<<<< HEAD
agent:
  - "@documentation-agent"
  - "@knowledge-evolution-agent"
  - "@test-orchestrator-agent"
  - "@user-feedback-collector-agent"
previous_task: P04-S14-T09
next_task: P04-S15-T01
version: 3.1.0
source: Step.json
---

# Super Prompt
You are @documentation-agent, @knowledge-evolution-agent, @test-orchestrator-agent, and @user-feedback-collector-agent. Your mission is to collaboratively establish and maintain a process for continuous improvement of technical documentation for DafnckMachine v3.1. Ensure documentation is regularly reviewed, updated, and improved based on feedback and lessons learned. Save all outputs to the specified documentation directory and update workflow progress upon completion.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/`

2. **Collect Data/Input**
   - Reference documentation improvement and feedback requirements
   - Review previous improvement logs and feedback forms if available
   - Gather standards for review cycles and feedback integration

3. **Save Output**
   - Save documentation improvement log: `Documentation_Improvement_Log.md`
   - Save feedback collection form: `Feedback_Collection_Form.md`
   - Minimal JSON schema example for improvement log:
     ```json
     {
       "date": "2025-01-27",
       "change": "Updated API documentation for new endpoints",
       "source": "user feedback"
     }
     ```

4. **Update Progress**
   - Upon completion, update `Step.json` and `DNA.json` to mark this task as SUCCEEDED
   - Proceed to the next phase: P05-S01-T01

5. **Self-Check**
   - [ ] All required files are present in the documentation directory
   - [ ] Documentation review and feedback cycles are established
   - [ ] Improvement log and feedback forms are up to date
   - [ ] Task status updated in workflow tracking files 
=======
previous_task: P04-S14-T09
next_task: P05-S01-T01
version: 3.1.0
source: Step.json
agent: "@documentation-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Documentation_Improvement_Log.md — Documentation_Improvement_Log.md: Documentation_Improvement_Log.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Feedback_Collection_Form.md — Feedback_Collection_Form.md: Feedback_Collection_Form.md (missing)

## Mission Statement
Establish a process for continuous improvement of technical documentation to ensure it remains accurate, relevant, and aligned with evolving project needs.

## Description
Implement feedback loops, regular reviews, and update cycles for all documentation. Encourage contributions, track changes, and integrate lessons learned from development and user feedback.

## Super-Prompt
You are @documentation-agent and @knowledge-evolution-agent responsible for continuous improvement of technical documentation for DafnckMachine v3.1. Your mission is to ensure documentation quality evolves with the project and user needs.

## MCP Tools Required
- edit_file
- file_search
- mcp_taskmaster-ai_get_task
- mcp_taskmaster-ai_set_task_status

## Result We Want
- Documentation is regularly reviewed, updated, and improved
- Feedback and lessons learned are integrated into documentation

## Add to Brain
- Documentation improvement processes, feedback logs, and update cycles

## Documentation & Templates
- [Documentation_Improvement_Log.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Documentation_Improvement_Log.md)
- [Feedback_Collection_Form.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Feedback_Collection_Form.md)

## Primary Responsible Agent
@documentation-agent, @knowledge-evolution-agent

## Supporting Agents
- @test-orchestrator-agent
- @user-feedback-collector-agent

## Agent Selection Criteria
The Documentation Agent and Knowledge Evolution Agent are chosen for their expertise in documentation quality, process improvement, and knowledge management.

## Tasks (Summary)
- Establish regular documentation review and update cycles
- Collect and integrate feedback from users and developers
- Track improvements and lessons learned

## Subtasks (Detailed)
### Subtask-01: Establish Review and Update Cycles
- **ID**: P04-T10-S01
- **Description**: Set up regular review and update cycles for all documentation
- **Agent Assignment**: @documentation-agent
- **Documentation Links**:
  - [Documentation_Improvement_Log.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Documentation_Improvement_Log.md)
- **Steps**:
    1. Define review schedule and responsibilities (edit_file)
    2. Track updates and improvements (edit_file)
- **Success Criteria**:
    - Review cycles established and documented
    - Improvement log maintained
- **Integration Points**: Review cycles integrated with project sprints and releases
- **Next Subtask**: P04-T10-S02 (Feedback Collection and Integration)

### Subtask-02: Feedback Collection and Integration
- **ID**: P04-T10-S02
- **Description**: Collect feedback from users and developers, and integrate it into documentation
- **Agent Assignment**: @knowledge-evolution-agent
- **Documentation Links**:
  - [Feedback_Collection_Form.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Feedback_Collection_Form.md)
- **Steps**:
    1. Collect feedback using forms and surveys (edit_file)
    2. Update documentation based on feedback and lessons learned (edit_file)
- **Success Criteria**:
    - Feedback collected and integrated
    - Documentation updated and improved
- **Integration Points**: Feedback loop integrated with documentation and development processes
- **Next Subtask**: P05-S01-T01 (Deployment Preparation)

## Rollback Procedures
- Escalate to @documentation-lead or @knowledge-evolution-lead with logs if improvement process stalls

## Integration Points
- Continuous improvement process integrated with project management and user support

## Quality Gates
- Documentation must be reviewed and improved at regular intervals

## Success Criteria
- Documentation is continuously improved and remains relevant

## Risk Mitigation
- Regular monitoring and feedback collection to catch issues early

## Output Artifacts
- [Documentation_Improvement_Log.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Documentation_Improvement_Log.md)
- [Feedback_Collection_Form.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Feedback_Collection_Form.md)

## Next Action
Establish review cycles and feedback collection for documentation with @documentation-agent and @knowledge-evolution-agent

## Post-Completion Action
Upon completion, update @Step.json and @DNA.json to reflect progress to the next phase (P05-S01-T01-Deployment-Preparation.md). 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
