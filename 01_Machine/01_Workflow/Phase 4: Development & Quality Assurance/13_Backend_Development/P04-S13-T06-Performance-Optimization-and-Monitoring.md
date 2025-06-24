---
phase: P04
step: S13
task: T06
task_id: P04-S13-T06
title: Performance Optimization and Monitoring
<<<<<<< HEAD
agent:
  - "@performance-load-tester-agent"
  - "@health-monitor-agent"
  - "@system-architect-agent"
  - "@test-orchestrator-agent"
=======
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
previous_task: P04-S13-T05
next_task: P04-S14-T01
version: 3.1.0
source: Step.json
<<<<<<< HEAD
---

# Super Prompt
You are @performance-load-tester-agent, @health-monitor-agent, @system-architect-agent, and @test-orchestrator-agent. Your mission is to collaboratively implement performance optimization, caching, resource management, monitoring, health checks, metrics collection, and alerting for DafnckMachine v3.1 backend. Ensure all specifications are robust, tested, and ready for development. Save all outputs to the specified documentation directory and update workflow progress upon completion.

1. **Documentation Reference**
   - Documentation in  : `01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/`

2. **Collect Data/Input**
   - Reference performance and monitoring requirements
   - Review previous optimization and monitoring documentation if available
   - Gather standards for caching, metrics, and alerting

3. **Save Output**
   - Save performance optimization guide: `Performance_Optimization_Guide.md`
   - Save caching configuration: `Caching_Configuration.json`
   - Save monitoring implementation guide: `Monitoring_Implementation.md`
   - Save health check configuration: `Health_Check_Configuration.json`
   - Minimal JSON schema example for health check config:
     ```json
     {
       "endpoint": "/health",
       "method": "GET",
       "expectedStatus": 200,
       "checks": ["database", "cache", "uptime"]
     }
     ```

4. **Update Progress**
   - Upon completion, update `Step.json` and `DNA.json` to mark this task as SUCCEEDED
   - Proceed to the next task: P04-S14-T01

5. **Self-Check**
   - [ ] All required files are present in the documentation directory
   - [ ] Performance optimization and monitoring are functional and tested
   - [ ] Documentation and configuration are clear and complete
   - [ ] Task status updated in workflow tracking files 
=======
agent: "@performance-load-tester-agent"
orchestrator: "@uber-orchestrator-agent"
---
## Output Artifacts Checklist
- _No Output Artifacts section found_

## Mission Statement
Implement performance optimization strategies with caching systems, monitoring integration, and scalability enhancements for high-performance backend operation.

## Description
This task covers the implementation of performance optimization, caching strategies, resource management, monitoring, health checks, metrics collection, and alerting for efficient and reliable backend operation.

## Super-Prompt
You are @performance-load-tester-agent (performance optimization) and @health-monitor-agent (monitoring). Your mission is to implement performance optimization, caching, resource management, monitoring, health checks, metrics collection, and alerting for DafnckMachine v3.1 backend.

## MCP Tools Required
- edit_file
- run_terminal_cmd
- mcp_taskmaster-ai_get_task
- mcp_taskmaster-ai_set_task_status

## Result We Want
- Performance optimization implemented with caching systems, resource management, monitoring, health checks, metrics collection, and verified performance improvements.

## Add to Brain
- Performance Optimization: Caching, query optimization, resource management, monitoring, health checks, metrics collection, alerting

## Documentation & Templates
- [Performance_Optimization_Guide.md](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Performance_Optimization_Guide.md)
- [Caching_Configuration.json](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Caching_Configuration.json)
- [Monitoring_Implementation.md](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Monitoring_Implementation.md)
- [Health_Check_Configuration.json](mdc:01_Machine/04_Documentation/vision/Phase_4/13_Backend_Development/Health_Check_Configuration.json)

## Primary Responsible Agent
@performance-load-tester-agent (performance optimization), @health-monitor-agent (monitoring)

## Supporting Agents
- @system-architect-agent
- @test-orchestrator-agent

## Agent Selection Criteria
@performance-load-tester-agent is chosen for performance optimization, caching, and resource management. @health-monitor-agent is responsible for monitoring, health checks, and metrics collection.

## Tasks (Summary)
- Implement caching strategies and query optimization
- Configure resource management and connection pooling
- Test performance optimization and measure improvements
- Implement health check endpoints and system monitoring
- Configure metrics collection and alerting systems
- Test monitoring system and health check functionality

## Subtasks (Detailed)
### Subtask-01: Performance Optimization
- **Agent**: @performance-load-tester-agent
- **Documentation Links**: Performance_Optimization_Guide.md, Caching_Configuration.json
- **Steps**:
    1. Implement caching strategies and query optimization (edit_file)
        - Success: "cache", "optimization", "performance"
    2. Configure resource management and connection pooling (edit_file)
        - Success: "pool", "resource", "memory"
    3. Test performance optimization and measure improvements (run_terminal_cmd)
        - Success: Exit Code 0, "Performance improved", performance-optimization-test-suite
- **Final Subtask Success Criteria**: Performance optimization implemented with caching systems, resource management, and verified performance improvements.
- **Integration Points**: Enhances overall system responsiveness and provides foundation for scalable operation.
- **Next Subtask**: P04-T06-S02 (Monitoring & Health Checks)

### Subtask-02: Monitoring & Health Checks
- **Agent**: @health-monitor-agent
- **Documentation Links**: Monitoring_Implementation.md, Health_Check_Configuration.json
- **Steps**:
    1. Implement health check endpoints and system monitoring (edit_file)
        - Success: "health", "monitor", "status"
    2. Configure metrics collection and alerting systems (edit_file)
        - Success: "metrics", "alert", "collect"
    3. Test monitoring system and health check functionality (run_terminal_cmd)
        - Success: GET /health 200 OK, "Monitoring active", monitoring-system-test-suite
- **Final Subtask Success Criteria**: Monitoring and health check systems implemented with comprehensive coverage, metrics collection, and verified operational functionality.
- **Integration Points**: Provides operational visibility and enables proactive system management and reliability assurance.
- **Next Subtask**: P04-S14-T01 (Database Implementation)

## Rollback Procedures
- Revert to previous performance or monitoring configuration
- Restore from backup if failures occur

## Integration Points
- Provides performance optimization and monitoring foundation for backend

## Quality Gates
- Performance optimization and monitoring must be functional and tested

## Success Criteria
- Performance optimization and monitoring are functional, tested, and ready for development

## Risk Mitigation
- Use version control for all performance and monitoring changes
- Validate with automated and manual tests

## Output Artifacts
- Performance optimization code
- Monitoring and health check code
- Test results and logs

## Next Action
Implement caching strategies and query optimization

## Post-Completion Action
Proceed to P04-S14-T01-Database-Implementation.md 
>>>>>>> 8f6410b869c68e2dec6a6798282a4437e78b5f85
