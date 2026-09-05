# PBK: Path to Black Belt — Browser Foundation

This is the clean browser-first foundation for PBK V2.

## Milestone 1
A polished one-dojo point-sparring match:
- 1 player vs 1 AI opponent
- First to 5 points
- Punch = 1 point
- Kick = 2 points
- Clear hit confirmation
- Reset to center after each score
- Responsive keyboard controls
- Browser-first architecture

## Run
Use any local static server from this folder, for example:

```bash
python -m http.server 8080
```

Then open `http://localhost:8080`.

## Controls
- W/A/S/D — move
- J — punch
- K — kick
- L — block
- R — restart match

## Development rule
Do not add RPG world, belts, forms, shops, driving, or extra schools until Milestone 1 passes the definition of done in `TEST_PLAN.md`.
