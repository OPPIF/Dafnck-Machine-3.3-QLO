---
phase: P04
step: S14
task: T07
task_id: P04-S14-T07
title: Visual Documentation and Diagrams
<<<<<<< HEAD
agent:
  - "@system-architect-agent"
  - "@ui-designer-agent"
  - "@documentation-agent"
  - "@development-orchestrator-agent"
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P04-S14-T06
next_task: P04-S14-T08
version: 3.1.0
source: Step.json
<<<<<<< HEAD
---

# Super Prompt
You are @system-architect-agent, @ui-designer-agent, @documentation-agent, and @development-orchestrator-agent. Your mission is to collaboratively create comprehensive visual documentation and diagrams for DafnckMachine v3.1. Ensure all system diagrams, UI documentation, and visual aids are clear, professional, and enhance understanding. Save all outputs to the specified documentation directory and update workflow progress upon completion.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/`

2. **Collect Data/Input**
   - Reference visual documentation and diagram requirements
   - Review previous system diagrams and UI documentation if available
   - Gather standards for diagram clarity, completeness, and accessibility

3. **Save Output**
   - Save system diagrams collection: `System_Diagrams_Collection.md`
   - Save visual documentation: `Visual_Documentation.json`
   - Save UI documentation: `UI_Documentation_Complete.md`
   - Save interface guides: `Interface_Guides.json`
   - Minimal JSON schema example for visual documentation:
     ```json
     {
       "diagram": "System Architecture",
       "type": "mermaid",
       "description": "High-level system architecture diagram",
       "file": "system-architecture.mmd"
     }
     ```

4. **Update Progress**
   - Upon completion, update `Step.json` and `DNA.json` to mark this task as SUCCEEDED
   - Proceed to the next task: P04-S14-T08

5. **Self-Check**
   - [ ] All required files are present in the documentation directory
   - [ ] Visual and UI documentation is clear and complete
   - [ ] Diagrams and guides meet clarity and accessibility standards
   - [ ] Task status updated in workflow tracking files 
=======
agent: "@system-architect-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/System_Diagrams_Collection.md — System_Diagrams_Collection.md: System_Diagrams_Collection.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Visual_Documentation.json — Visual_Documentation.json: Visual_Documentation.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/UI_Documentation_Complete.md — UI_Documentation_Complete.md: UI_Documentation_Complete.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Interface_Guides.json — Interface_Guides.json: Interface_Guides.json (missing)

## Mission Statement
Create comprehensive visual documentation with system diagrams, user interface documentation, and visual aids for enhanced understanding and communication.

## Description
Create comprehensive visual documentation with system diagrams, user interface documentation, and visual aids for enhanced understanding and communication.

## Super-Prompt
"You are @system-architect-agent and @ui-designer-agent responsible for visual documentation and diagrams for DafnckMachine v3.1. Your mission is to create clear, professional, and comprehensive system diagrams, UI documentation, and visual aids."

## MCP Tools Required
- edit_file
- file_search
- list_dir
- run_terminal_cmd
- mcp_taskmaster-ai_get_task
- mcp_taskmaster-ai_set_task_status

## Result We Want
- Comprehensive visual documentation with system diagrams and charts created.
- Complete UI documentation with screenshots and workflow explanations created.

## Add to Brain
- Visual Documentation: System diagrams, UI documentation, and visual aids

## Documentation & Templates
- [System_Diagrams_Collection.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/System_Diagrams_Collection.md)
- [Visual_Documentation.json](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Visual_Documentation.json)
- [UI_Documentation_Complete.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/UI_Documentation_Complete.md)
- [Interface_Guides.json](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Interface_Guides.json)

## Primary Responsible Agent
@system-architect-agent, @ui-designer-agent

## Supporting Agents
- @documentation-agent
- @development-orchestrator-agent

## Agent Selection Criteria
The System Architect Agent and UI Designer Agent are chosen for their expertise in system architecture, diagram creation, UI documentation, and visual communication. These agents ensure clear, accurate, and professional visual documentation.

## Tasks (Summary)
- Create comprehensive system diagrams with architecture diagrams, data flow charts, component relationships, and deployment diagrams for visual system understanding.
- Create comprehensive UI documentation with interface screenshots, workflow diagrams, user journey maps, and component guides for user interface understanding.

## Subtasks (Detailed)
### Subtask-01: System Diagram Creation
- **ID**: P04-T07-S01
- **Description**: Create comprehensive system diagrams with architecture diagrams, data flow charts, component relationships, and deployment diagrams for visual system understanding.
- **Agent Assignment**: @system-architect-agent
- **Documentation Links**:
  - [System_Diagrams_Collection.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/System_Diagrams_Collection.md)
  - [Visual_Documentation.json](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Visual_Documentation.json)
- **Steps**:
    1. Create system architecture diagrams and component relationship charts (edit_file)
    2. Create data flow diagrams and deployment architecture visuals (edit_file)
- **Success Criteria**:
    - Files exist: System_Diagrams_Collection.md, Visual_Documentation.json
    - Content matches: architecture diagrams, component relationships, system charts, data flow diagrams, deployment diagrams, architecture visuals
- **Integration Points**: Visual documentation enhances understanding of system architecture and relationships.
- **Next Subtask**: P04-T07-S02 (User Interface Documentation)

### Subtask-02: User Interface Documentation
- **ID**: P04-T07-S02
- **Description**: Create comprehensive UI documentation with interface screenshots, workflow diagrams, user journey maps, and component guides for user interface understanding.
- **Agent Assignment**: @ui-designer-agent
- **Documentation Links**:
  - [UI_Documentation_Complete.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/UI_Documentation_Complete.md)
  - [Interface_Guides.json](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Interface_Guides.json)
- **Steps**:
    1. Create UI documentation with interface screenshots and component guides (edit_file)
    2. Create workflow diagrams and user journey maps (edit_file)
- **Success Criteria**:
    - Files exist: UI_Documentation_Complete.md, Interface_Guides.json
    - Content matches: interface screenshots, component guides, UI explanations, workflow diagrams, user journey maps, interaction flows
- **Integration Points**: UI documentation supports user understanding and interface navigation.
- **Next Subtask**: P04-T08-S01 (Automated Documentation Generation)

## Rollback Procedures
- Escalate to @visual-documentation-lead or @ui-documentation-lead with logs if max retries exceeded or critical failure occurs.

## Integration Points
- Visual documentation enhances understanding of system architecture and relationships.
- UI documentation supports user understanding and interface navigation.

## Quality Gates
- Visual and UI documentation reviewed and approved by visual documentation and UI documentation leads.

## Success Criteria
- Comprehensive visual and UI documentation established and approved.

## Risk Mitigation
- Review and approval process to catch gaps or inconsistencies.

## Output Artifacts
- [System_Diagrams_Collection.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/System_Diagrams_Collection.md)
- [Visual_Documentation.json](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Visual_Documentation.json)
- [UI_Documentation_Complete.md](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/UI_Documentation_Complete.md)
- [Interface_Guides.json](mdc:01_Machine/04_Documentation/vision/Phase_4/14_Technical_Documentation/Interface_Guides.json)

## Next Action
Create system diagrams and UI documentation with @system-architect-agent and @ui-designer-agent

## Post-Completion Action
Upon completion, update @Step.json and @DNA.json to reflect progress to the next task (P04-S14-T08-Documentation-Automation-and-Generation.md). 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
