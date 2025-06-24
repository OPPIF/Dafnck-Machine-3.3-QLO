---
phase: P04
step: S13
task: T04
task_id: P04-S13-T04
title: Database Integration and Data Management
<<<<<<< HEAD
agent:
  - "@coding-agent"
  - "@system-architect-agent"
  - "@test-orchestrator-agent"
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P04-S13-T03
next_task: P04-S13-T05
version: 3.1.0
source: Step.json
<<<<<<< HEAD
---

# Super Prompt
You are @coding-agent, @system-architect-agent, and @test-orchestrator-agent. Your mission is to collaboratively implement database integration, ORM setup, data models, migration system, and data seeding for DafnckMachine v3.1 backend. Ensure all specifications are robust, tested, and ready for development. Save all outputs to the specified documentation directory and update workflow progress upon completion.

1. **Documentation Reference**
   - Documentation in  : `01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/`

2. **Collect Data/Input**
   - Reference database and ORM requirements
   - Review previous integration and migration documentation if available
   - Gather standards for schema design, migrations, and seeding

3. **Save Output**
   - Save database integration guide: `Database_Integration_Guide.md`
   - Save ORM configuration: `ORM_Configuration.json`
   - Save migration system guide: `Migration_System_Guide.md`
   - Save data seeding scripts: `Data_Seeding_Scripts.json`
   - Minimal JSON schema example for ORM config:
     ```json
     {
       "orm": "prisma",
       "database": "postgresql",
       "models": ["User", "Session", "Role"],
       "migrations": true
     }
     ```

4. **Update Progress**
   - Upon completion, update `Step.json` and `DNA.json` to mark this task as SUCCEEDED
   - Proceed to the next task: P04-S13-T05

5. **Self-Check**
   - [ ] All required files are present in the documentation directory
   - [ ] Database integration and migration system are functional and tested
   - [ ] Documentation and configuration are clear and complete
   - [ ] Task status updated in workflow tracking files 
=======
agent: "@coding-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- _No Output Artifacts section found_

## Mission Statement
Implement comprehensive database integration with ORM configuration, data models, and migration systems for scalable data management.

## Description
This task covers the configuration of database connection, ORM integration, data model definitions, migration system, and data seeding for scalable and maintainable data management.

## Super-Prompt
You are @coding-agent. Your mission is to implement database integration, ORM setup, data models, migration system, and data seeding for DafnckMachine v3.1 backend.

## MCP Tools Required
- edit_file
- run_terminal_cmd
- mcp_taskmaster-ai_get_task
- mcp_taskmaster-ai_set_task_status

## Result We Want
- Database integration completed with functional ORM, data models, migration system, and verified connectivity for data management operations.

## Add to Brain
- Database Integration: Optimized database design, ORM configuration, data modeling, migration system, data seeding

## Documentation & Templates
- [Database_Integration_Guide.md](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Database_Integration_Guide.md)
- [ORM_Configuration.json](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/ORM_Configuration.json)
- [Migration_System_Guide.md](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Migration_System_Guide.md)
- [Data_Seeding_Scripts.json](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Data_Seeding_Scripts.json)

## Primary Responsible Agent
@coding-agent

## Supporting Agents
- @system-architect-agent
- @test-orchestrator-agent

## Agent Selection Criteria
@coding-agent is chosen for its expertise in database integration, ORM configuration, and migration system implementation.

## Tasks (Summary)
- Configure database connection and ORM integration
- Define data models and schema structure
- Test database connectivity and ORM functionality
- Implement database migration system and version control
- Configure data seeding and initial data setup
- Test migration system and data seeding functionality

## Subtasks (Detailed)
### Subtask-01: Database Integration & ORM Setup
- **Agent**: @coding-agent
- **Documentation Links**: Database_Integration_Guide.md, ORM_Configuration.json
- **Steps**:
    1. Configure database connection and ORM integration (edit_file)
        - Success: "database", "connection", "pool"
    2. Define data models and schema structure (edit_file)
        - Success: "model", "schema", "relationship"
    3. Test database connectivity and ORM functionality (run_terminal_cmd)
        - Success: Exit Code 0, "Database connected", database-integration-test-suite
- **Final Subtask Success Criteria**: Database integration completed with functional ORM, data models, and verified connectivity for data management operations.
- **Integration Points**: Provides data persistence foundation for all application features and API endpoints.
- **Next Subtask**: P04-T04-S02 (Migration System & Data Seeding)

### Subtask-02: Migration System & Data Seeding
- **Agent**: @coding-agent
- **Documentation Links**: Migration_System_Guide.md, Data_Seeding_Scripts.json
- **Steps**:
    1. Implement database migration system and version control (edit_file)
        - Success: "migration", "version", "rollback"
    2. Configure data seeding and initial data setup (edit_file)
        - Success: "seed", "initial.*data", "populate"
    3. Test migration system and data seeding functionality (run_terminal_cmd)
        - Success: Exit Code 0, "Migration completed", "Data seeded"
- **Final Subtask Success Criteria**: Migration system implemented with version control, data seeding capabilities, and verified functionality for database management.
- **Integration Points**: Enables database evolution and provides foundation for deployment and environment management.
- **Next Subtask**: P04-T05-S01 (Business Logic Implementation)

## Rollback Procedures
- Revert to previous database or ORM configuration
- Restore from backup if migration or seeding fails

## Integration Points
- Provides data persistence and management foundation for backend

## Quality Gates
- Database integration and migration system must be functional and tested

## Success Criteria
- Database integration, ORM, and migration system are functional, tested, and ready for development

## Risk Mitigation
- Use version control for all database and migration changes
- Validate with automated and manual tests

## Output Artifacts
- ORM configuration files
- Data model definitions
- Migration scripts
- Data seeding scripts
- Test results and logs

## Next Action
Configure database connection and ORM integration

## Post-Completion Action
Proceed to P04-S13-T05-Business-Logic-and-Service-Layer-Implementation.md 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
