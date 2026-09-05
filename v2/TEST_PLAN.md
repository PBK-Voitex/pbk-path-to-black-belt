# PBK V2 — Milestone 1 Definition of Done

A build is NOT shown as a milestone candidate unless all of these pass.

## Startup
- Loads in a modern desktop browser with no fatal console error.
- Match can be started/restarted without reloading the page.

## Controls
- Player can move forward/back/left/right.
- Punch command produces one attack.
- Kick command produces one attack.
- Block command visibly changes defensive state.
- Inputs are ignored appropriately during score-reset state.

## Scoring
- Punch scores exactly 1.
- Kick scores exactly 2.
- A single attack cannot score multiple times.
- Blocked attacks do not score.
- Fighters reset after a score.
- First to 5 ends the match.

## AI
- AI approaches when far away.
- AI attacks when in range.
- AI does not attack every frame.
- AI can be outspaced and punished.
- AI resumes correctly after resets.

## Presentation
- Both fighters stay visible.
- Score is readable.
- Hit feedback is visible.
- Winner state is obvious.

## Regression
After every change, re-check startup, movement, punch, kick, scoring, reset, AI, and restart.
