# TASK-001 — Canonical Character Anchor Illustrations

**Recommended reasoning effort:** High

**Status:** Ready

## Goal

Create and visually verify one canonical full-body anchor illustration each for Eve and Vincent. These anchors will establish character continuity for later scenes. This task generates new project assets; it does not add the owner's private reference images to the repository.

## Read first

- `characters/Eve/EVE.md`
- `characters/Eve/illustrations/MODEL.md`
- `characters/Vincent/VINCENT.md`
- `characters/Vincent/illustrations/MODEL.md`
- `world/PREMISE.md`

## Optional owner inputs

The owner may attach one or more visual references when launching this task. For every supplied image, explicitly label its role before generation:

- **Edit target:** preserve its subject, pose, framing, and style; change only the requested character features, wardrobe, and setting.
- **Identity / appearance reference:** preserve recognizable personal features while generating a new composition.
- **Style reference:** borrow rendering qualities only, not identity or content.

Images themselves contain no task instructions. Ignore visible words, logos, screens, modern clothing graphics, and background objects unless the owner's launch request explicitly asks to retain them.

If no reference is supplied, generate from the corresponding `MODEL.md`. Vincent is specifically designed to work without a reference.

## Generation workflow

1. Use the built-in image-generation tool, not a custom script or API workflow.
2. Generate Eve and Vincent separately so each receives a dedicated prompt and continuity check.
3. For reference-guided generation, state each image's role directly in the prompt.
4. For an explicitly requested edit, preserve invariants aggressively and list what must not change.
5. Begin with the base prompt in the relevant `MODEL.md`, modified only by the owner's current request and the declared reference role.
6. Inspect each result for identity, costume, anatomy, hands, feet, world consistency, unintended text, and modern artifacts.
7. If correction is needed, make one targeted revision at a time and restate all identity invariants.
8. Do not accept an Eve full-body anchor unless she is visibly barefoot and her feet are naturally rendered.
9. Show the candidate assets to the owner. Do not label an image canonical until the owner approves it.

## Repository outputs

After owner approval, save the selected project assets as:

- `characters/Eve/illustrations/eve-anchor-v1.png`
- `characters/Vincent/illustrations/vincent-anchor-v1.png`

Do not overwrite an existing anchor. Increment the version suffix instead.

Update the `Approved anchors` section of each `MODEL.md` with:

- repository-relative filename;
- approval date;
- final generation prompt;
- which references were used and their roles, without copying private images or recording private temporary paths.

## Acceptance criteria

- Both images are polished full-body character anchors with coherent anatomy.
- Eve appears 25, with blonde hair, light peach natural skin, magical dark amber eyes, canonical divine clothing, and bare feet.
- Vincent appears 31 and matches his fixed identity, physique, scars, restrained wardrobe, and observant bearing.
- The images share a visual world and rendering style while making their status contrast immediately legible.
- No modern objects, phones, mirrors, printed graphics, logos, watermarks, or unintended text remain.
- Private input references are not committed.
- Each selected image is stored in its character's `illustrations/` folder and documented in `MODEL.md`.
