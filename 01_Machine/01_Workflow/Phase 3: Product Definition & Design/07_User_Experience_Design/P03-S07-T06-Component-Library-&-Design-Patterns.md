---
phase: P03
step: S07
task: T06
task_id: P03-S07-T06
title: Component Library & Design Patterns
previous_task: P03-S07-T05
next_task: P03-S07-T07
version: 3.1.0
<<<<<<< HEAD
agent: "@ui-designer-agent, @ux-researcher-agent"
orchestrator: "@uber-orchestrator-agent"
---

# Super Prompt
You are @ui-designer-agent and @ux-researcher-agent. Collaborate to develop a component library and define interaction patterns for DafnckMachine v3.1, ensuring consistency, accessibility, and intuitive user experience. Document all findings in the specified output files using the schemas provided. Coordinate with @uber-orchestrator-agent as needed.

1. **Documentation Reference**
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/`

2. **Collect Data/Input**
   - Gather interface requirements, user research, and accessibility standards from previous steps.

3. **Save Output**
   - 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/User_Interface_Components.md (Markdown)
   - 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Component_Specifications.json (JSON, schema: { components: object[] })
   - 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Interaction_Design_Patterns.json (JSON, schema: { patterns: object[] })
   - 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Animation_Specifications.md (Markdown)

4. **Update Progress**
   - Mark this task as complete in Step.json and DNA.json when all outputs are saved and validated.

5. **Self-Check**
   - [ ] All outputs saved to correct files and match schema
   - [ ] Components and patterns are user-centered and validated
   - [ ] Specifications and guidelines are clearly documented
   - [ ] Task status updated in Step.json and DNA.json
=======
source: Step.json
agent: "@ui-designer-agent, @ux-researcher-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/User_Interface_Components.md — User_Interface_Components.md: User_Interface_Components.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Component_Specifications.json — Component_Specifications.json: Component_Specifications.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Interaction_Design_Patterns.json — Interaction_Design_Patterns.json: Interaction_Design_Patterns.json (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Animation_Specifications.md — Animation_Specifications.md: Animation_Specifications.md (missing)

## Mission Statement
Develop comprehensive component library and interaction patterns to ensure consistent interface elements and behaviors across all product areas.

## Description
This task focuses on developing a component library and defining interaction patterns, ensuring consistent interface elements, behaviors, and accessibility features across all product areas.

## Super-Prompt
You are @ui-designer-agent and @ux-researcher-agent. Your mission is to develop a component library and define interaction patterns for DafnckMachine v3.1, ensuring consistency, accessibility, and intuitive user experience.

## MCP Tools Required
- edit_file

## Result We Want
- Complete UI component library with detailed specifications and usage guidelines documented and validated.
- Comprehensive interaction pattern library with consistent behavior specifications documented and validated.

## Add to Brain
- UI component specifications and usage guidelines
- Interaction design patterns and animation specifications

## Documentation & Templates
- [User_Interface_Components.md](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/User_Interface_Components.md)
- [Component_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Component_Specifications.json)
- [Interaction_Design_Patterns.json](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Interaction_Design_Patterns.json)
- [Animation_Specifications.md](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Animation_Specifications.md)

## Primary Responsible Agent
@ui-designer-agent (Component Library)
@ux-researcher-agent (Interaction Patterns)

## Supporting Agents
- @design-system-agent
- @design-qa-analyst
- @branding-agent

## Agent Selection Criteria
The @ui-designer-agent is selected for component design, UI specifications, and accessibility integration. The @ux-researcher-agent is selected for interaction patterns, behavior design, and animation specification.

## Tasks (Summary)
- Specify UI component anatomy and state variations
- Define usage guidelines and accessibility features
- Define interaction patterns and gesture specifications
- Specify animations and micro-interaction behaviors

## Subtasks (Detailed)
### Subtask-01: UI Component Specification
- **ID**: P03-T06-S01
- **Description**: Specify detailed UI components with component anatomy, state variations, interaction behaviors, usage guidelines, and accessibility features for consistent interface development.
- **Agent Assignment**: @ui-designer-agent
- **Documentation Links**:
  - [User_Interface_Components.md](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/User_Interface_Components.md)
  - [Component_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Component_Specifications.json)
- **Steps**:
    1. Specify UI component anatomy and state variations (Tool: edit_file)
    2. Define usage guidelines and accessibility features (Tool: edit_file)
- **Success Criteria**:
    - User_Interface_Components.md exists and contains component anatomy, state variations, and interaction behaviors
    - Component_Specifications.json exists and output contains: "Component specification completed"

### Subtask-02: Interaction Pattern Library
- **ID**: P03-T06-S02
- **Description**: Define comprehensive interaction patterns including gesture patterns, animation specifications, feedback mechanisms, state transitions, and micro-interactions for consistent user experience.
- **Agent Assignment**: @ux-researcher-agent
- **Documentation Links**:
  - [Interaction_Design_Patterns.json](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Interaction_Design_Patterns.json)
  - [Animation_Specifications.md](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Animation_Specifications.md)
- **Steps**:
    1. Define interaction patterns and gesture specifications (Tool: edit_file)
    2. Specify animations and micro-interaction behaviors (Tool: edit_file)
- **Success Criteria**:
    - Interaction_Design_Patterns.json exists and contains gesture patterns, feedback mechanisms, and state transitions
    - Animation_Specifications.md exists and output contains: "Interaction pattern library completed"

## Rollback Procedures
- Revisit component library and interaction patterns based on user feedback and usability testing

## Integration Points
- Component library ensures consistent interface elements and efficient development implementation
- Interaction patterns ensure consistent user experience and intuitive interface behavior across all product areas

## Quality Gates
- User-Centered Design: All component and pattern decisions based on user research and validated needs

## Success Criteria
- Complete UI component library with detailed specifications and usage guidelines is documented and validated
- Comprehensive interaction pattern library with consistent behavior specifications is documented and validated

## Risk Mitigation
- Continuous usability testing and feedback integration throughout component and pattern development

## Output Artifacts
- [User_Interface_Components.md](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/User_Interface_Components.md)
- [Component_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Component_Specifications.json)
- [Interaction_Design_Patterns.json](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Interaction_Design_Patterns.json)
- [Animation_Specifications.md](mdc:01_Machine/04_Documentation/vision/Phase_3/07_User_Experience_Design/Animation_Specifications.md)

## Next Action
Initiate component library and interaction pattern development with @ui-designer-agent and @ux-researcher-agent

## Post-Completion Action
Update @Step.json and @DNA.json to reflect task SUCCEEDED status and outcomes 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
