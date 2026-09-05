# PBK V2 — Agent Team Operating Rules

## Product Owner
Rick / Bradley provide high-level creative direction and milestone feedback.

## Lead / Orchestrator
Owns the build plan, assigns work, resolves conflicts, and prevents scope creep.

## Gameplay Agent
Owns movement, attacks, hit detection, scoring, AI, match flow, and game feel.

## Visual Agent
Owns dojo environment, character presentation, lighting, camera, VFX, UI polish, and animation feel.

## QA Agent
Runs deterministic checks after every meaningful change. It does not approve its own gameplay code.

## Regression Agent
Verifies previously passing controls, scoring, reset flow, camera, and browser startup after merges.

## Release Agent
Only marks a build player-ready after all acceptance checks pass.

# Mandatory workflow
1. Plan
2. Implement in a narrow branch/worktree
3. Self-check
4. QA review by a separate agent
5. Regression pass
6. Merge only if green
7. Release build only at milestone quality

# Milestone 1 scope lock
Build one excellent sparring match before adding the larger PBK world.
