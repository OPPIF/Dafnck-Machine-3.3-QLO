---
phase: P03
step: S05
task: T07
task_id: P03-S05-T07
title: System Configuration and Risk Management
previous_task: P03-S05-T06
next_task: P03-S05-T08
version: 3.1.0
<<<<<<< HEAD
agent: "@prd-architect-agent"
orchestrator: "@uber-orchestrator-agent"
---

## Super Prompt
You are @prd-architect-agent. Your job is to define system configuration and risk management for DafnckMachine v3.1, specifying agent behavior customization, development standards, workflow customization, automated risk detection, mitigation, and failure recovery. Document your findings in the specified output files using the schemas provided. Collaborate as needed to ensure system flexibility and resilience.

## 1. Documentation Reference
   - Documentation in  `01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/`

## 2. Collect Data/Input
- Gather requirements for configuration and risk management
- Research best practices for agent customization and system resilience

## 3. Save Output
- Save system configuration framework to: `01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/System_Configuration_Framework.md`
- Save risk management framework to: `01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Risk_Management_Framework.md`

### System_Configuration_Framework.md (Markdown)
```
# System Configuration Framework
- Agent Behavior Parameters: [string[]]
- Development Standards: [string[]]
- Quality Thresholds: [string[]]
- Technology Constraints: [string[]]
- Workflow Customization: [string[]]
- Process Modification: [string[]]
```

### Risk_Management_Framework.md (Markdown)
```
# Risk Management Framework
- Automated Risk Detection: [string[]]
- Mitigation Strategies: [string[]]
- Failure Recovery Protocols: [string[]]
- Rollback Mechanisms: [string[]]
- Emergency Procedures: [string[]]
- System Resilience: [string[]]
```

## 4. Update Progress
- Mark this task as complete in Step.json and DNA.json after outputs are saved and validated.

## 5. Self-Check
- [ ] Are all required output files present and complete?
- [ ] Are configuration and risk management frameworks comprehensive?
- [ ] Is system flexibility and resilience clearly addressed?
- [ ] Have all supporting agents contributed as needed? 
=======
source: Step.json
agent: "@prd-architect-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- [ ] 01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/System_Configuration_Framework.md — System_Configuration_Framework.md: System_Configuration_Framework.md (missing)
- [ ] 01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Risk_Management_Framework.md — Risk_Management_Framework.md: Risk_Management_Framework.md (missing)

## Mission Statement
Define system configuration capabilities and comprehensive risk management including agent behavior customization, failure recovery protocols, and system resilience mechanisms.

## Description
Define configuration system including agent behavior parameters, development standards, quality thresholds, technology constraints, workflow customization, and process modification. Specify risk management including automated risk detection, mitigation strategies, failure recovery protocols, rollback mechanisms, emergency procedures, and system resilience.

## Super-Prompt
You are @prd-architect-agent responsible for defining system configuration and risk management for DafnckMachine v3.1. Your mission is to specify agent behavior customization, development standards, workflow customization, automated risk detection, mitigation, and failure recovery, ensuring system flexibility and resilience. Follow the DafnckMachine v3.1 PRD template structure exactly.

## MCP Tools Required
- edit_file
- file_search
- list_dir
- web_search

## Result We Want
- Flexible configuration system with customizable parameters enabling adaptation to specific requirements
- Comprehensive risk management with automated recovery ensuring system reliability and user confidence

## Add to Brain
- **Configuration System**: Agent behavior parameters, development standards, quality thresholds, technology constraints, workflow customization, process modification
- **Risk Management**: Automated risk detection, mitigation strategies, failure recovery protocols, rollback mechanisms, emergency procedures, system resilience

## Documentation & Templates
- [PRD_Template.md](mdc:01_Machine/04_Documentation/vision/Phase_3/PRD_Template.md)
- [System_Configuration_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/System_Configuration_Framework.md)
- [Agent_Customization_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Agent_Customization_Specifications.json)
- [Risk_Management_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Risk_Management_Framework.md)
- [Failure_Recovery_Protocols.json](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Failure_Recovery_Protocols.json)

## Primary Responsible Agent
@prd-architect-agent - system-configuration, agent-customization, workflow-design, risk-management, failure-recovery, system-resilience

## Supporting Agents
- @prd-architect-agent: risk-management, failure-recovery, system-resilience

## Agent Selection Criteria
The PRD Architect Agent is chosen for its expertise in system configuration, agent customization, workflow design, risk management, and system resilience.

## Tasks (Summary)
- Define system configuration capabilities and comprehensive risk management including agent behavior customization, failure recovery protocols, and system resilience mechanisms.

## Subtasks (Detailed)
### Subtask-01: Agent Behavior Configuration & Customization
- **ID**: P03-T07-S01
- **Description**: Define configuration system including agent behavior parameters, development standards, quality thresholds, technology constraints, workflow customization, and process modification.
- **Agent Assignment**: @prd-architect-agent (system-configuration, agent-customization, workflow-design)
- **Documentation Links**: [System_Configuration_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/System_Configuration_Framework.md), [Agent_Customization_Specifications.json](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Agent_Customization_Specifications.json)
- **Steps**:
    1. Define agent behavior parameters and development standards configuration (edit_file)
    2. Specify workflow customization and process modification capabilities (edit_file)
- **Success Criteria**:
    - Agent behavior parameters and development standards defined
    - Workflow customization and process modification specified
- **Integration Points**: Configuration system enables adaptation to specific requirements and maintains system flexibility
- **Next Subtask**: P03-T07-S02 (Risk Management & Failure Recovery)

### Subtask-02: Risk Management & Failure Recovery
- **ID**: P03-T07-S02
- **Description**: Specify risk management including automated risk detection, mitigation strategies, failure recovery protocols, rollback mechanisms, emergency procedures, and system resilience.
- **Agent Assignment**: @prd-architect-agent (risk-management, failure-recovery, system-resilience)
- **Documentation Links**: [Risk_Management_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Risk_Management_Framework.md), [Failure_Recovery_Protocols.json](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Failure_Recovery_Protocols.json)
- **Steps**:
    1. Define automated risk detection and mitigation strategies (edit_file)
    2. Specify failure recovery protocols and emergency procedures (edit_file)
- **Success Criteria**:
    - Automated risk detection and mitigation strategies defined
    - Failure recovery protocols and emergency procedures specified
- **Integration Points**: Risk management ensures system reliability and user confidence while maintaining autonomous operations
- **Next Subtask**: P03-T08-S01 (Development Efficiency & Business Impact Metrics)

## Rollback Procedures
- Adjust configuration or risk management scope if system flexibility or resilience is insufficient.

## Integration Points
- Configuration system enables adaptation to specific requirements and maintains system flexibility.

## Quality Gates
- System configuration framework with customizable parameters and workflows.
- Risk management and failure recovery protocols ensuring system resilience.

## Success Criteria
- Flexible configuration system with customizable parameters enabling adaptation to specific requirements.
- Comprehensive risk management with automated recovery ensuring system reliability and user confidence.

## Risk Mitigation
- Adjust configuration or risk management scope if system flexibility or resilience is insufficient.

## Output Artifacts
- [System_Configuration_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/System_Configuration_Framework.md)
- [Risk_Management_Framework.md](mdc:01_Machine/04_Documentation/vision/Phase_3/05_PRD_Generator/Risk_Management_Framework.md)

## Next Action
Document system configuration and risk management with @prd-architect-agent

## Post-Completion Action
Upon successful completion of all subtasks within this tactical task, ensure the @Step.json and @DNA.json files are updated to reflect its SUCCEEDED status and any associated progress or outcomes. 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
