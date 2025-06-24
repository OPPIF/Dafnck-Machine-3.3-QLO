---
phase: P04
step: S14
task: T03
task_id: P04-S14-T03
title: Code Documentation and Comments
<<<<<<< HEAD
agent:
  - "@documentation-agent"
  - "@coding-agent"
  - "@system-architect-agent"
  - "@test-orchestrator-agent"
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P04-S14-T02
next_task: P04-S14-T04
version: 3.1.0
source: Step.json
<<<<<<< HEAD
---

# Super Prompt
You are @documentation-agent, @coding-agent, @system-architect-agent, and @test-orchestrator-agent. Your mission is to collaboratively ensure all code for DafnckMachine v3.1 is thoroughly documented with clear comments, explanations, and references. Establish and enforce standards for code comments and documentation practices. Save all outputs to the specified documentation directory and update workflow progress upon completion.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/`

2. **Collect Data/Input**
   - Reference code documentation requirements and standards
   - Review previous commenting standards and examples if available
   - Gather best practices for code comments and documentation

3. **Save Output**
   - Save code commenting standards: `Code_Commenting_Standards.md`
   - Save code documentation examples: `Code_Documentation_Examples.md`
   - Minimal JSON schema example for code documentation:
     ```json
     {
       "module": "auth.js",
       "functions": [
         {"name": "login", "description": "Authenticate user and return token."},
         {"name": "logout", "description": "Invalidate user session."}
       ],
       "comments": true
     }
     ```

4. **Update Progress**
   - Upon completion, update `Step.json` and `DNA.json` to mark this task as SUCCEEDED
   - Proceed to the next task: P04-S14-T04

5. **Self-Check**
   - [ ] All required files are present in the documentation directory
   - [ ] Code documentation and comments are clear and complete
   - [ ] Standards are defined and shared with the team
   - [ ] Task status updated in workflow tracking files 
=======
agent: "@documentation-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Commenting_Standards.md — Code_Commenting_Standards.md: Code_Commenting_Standards.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Documentation_Examples.md — Code_Documentation_Examples.md: Code_Documentation_Examples.md (missing)

## Mission Statement
Ensure all code is thoroughly documented with clear comments, explanations, and references to facilitate maintenance, onboarding, and collaboration.

## Description
Document all code modules, functions, and classes with meaningful comments and explanations. Establish standards for code comments and documentation practices.

## Super-Prompt
You are @documentation-agent and @coding-agent responsible for code documentation and comments for DafnckMachine v3.1. Your mission is to ensure all code is well-documented, maintainable, and easy to understand.

## MCP Tools Required
- edit_file
- file_search
- mcp_taskmaster-ai_get_task
- mcp_taskmaster-ai_set_task_status

## Result We Want
- All code modules, functions, and classes are thoroughly documented
- Code comments follow established standards

## Add to Brain
- Code documentation standards, comment practices, and module explanations

## Documentation & Templates
- [Code_Commenting_Standards.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Commenting_Standards.md)
- [Code_Documentation_Examples.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Documentation_Examples.md)

## Primary Responsible Agent
@documentation-agent, @coding-agent

## Supporting Agents
- @system-architect-agent
- @test-orchestrator-agent

## Agent Selection Criteria
The Documentation Agent and Coding Agent are chosen for their expertise in code documentation, commenting practices, and maintainability.

## Tasks (Summary)
- Document all code modules, functions, and classes
- Establish and enforce code commenting standards
- Review and update code comments regularly

## Subtasks (Detailed)
### Subtask-01: Document Code Modules and Functions
- **ID**: P04-T03-S01
- **Description**: Document all code modules, functions, and classes with meaningful comments
- **Agent Assignment**: @coding-agent
- **Documentation Links**:
  - [Code_Commenting_Standards.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Commenting_Standards.md)
- **Steps**:
    1. Add comments to all modules, functions, and classes (edit_file)
    2. Review and update comments for clarity (edit_file)
- **Success Criteria**:
    - All code modules and functions documented
- **Integration Points**: Code documentation must be referenced by developers
- **Next Subtask**: P04-T03-S02 (Establish Commenting Standards)

### Subtask-02: Establish Commenting Standards
- **ID**: P04-T03-S02
- **Description**: Establish and enforce standards for code comments and documentation
- **Agent Assignment**: @documentation-agent
- **Documentation Links**:
  - [Code_Documentation_Examples.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Documentation_Examples.md)
- **Steps**:
    1. Define and document commenting standards (edit_file)
    2. Share standards with development team (edit_file)
- **Success Criteria**:
    - Commenting standards established and documented
- **Integration Points**: Standards must be adopted by all developers
- **Next Subtask**: P04-T04-S01 (Deployment and Configuration Documentation)

## Rollback Procedures
- Escalate to @documentation-lead or @coding-lead with logs if code documentation is incomplete or unclear

## Integration Points
- Code documentation integrated with code review and onboarding

## Quality Gates
- All code documentation must be reviewed and approved

## Success Criteria
- Code documentation is complete, clear, and up-to-date

## Risk Mitigation
- Regular reviews and updates to code comments

## Output Artifacts
- [Code_Commenting_Standards.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Commenting_Standards.md)
- [Code_Documentation_Examples.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Code_Documentation_Examples.md)

## Next Action
Document all code modules and establish commenting standards with @documentation-agent and @coding-agent

## Post-Completion Action
Upon completion, update @Step.json and @DNA.json to reflect progress to the next task (P04-S14-T04-Deployment-and-Configuration-Documentation.md). 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
