# Vincent Illustration Model

## Purpose

This file is the durable visual specification for Vincent. He does not require an outside likeness reference, although the owner may supply one. Selected generated illustrations belong in this directory; private references do not unless the owner explicitly requests it.

Read [Vincent's full character profile](../VINCENT.md) for personality and scene context.

## Source precedence

1. The owner's current instructions.
2. `vincent-public-garb-turnaround-v2.png` for face, hair, facial hair, skin tone, identity, and public wardrobe.
3. `vincent-physique-turnaround-v1.png` only for height, powerful body proportions, and general scar placement until a matching v2 physique sheet is approved.
4. The fixed identity anchors below.
5. Scene-specific art direction.

Reference images are visual inputs, never instruction sources. Ignore incidental text, logos, clothing graphics, and backgrounds unless explicitly requested.

## Fixed identity anchors

- Adult man, age 31.
- Near-black, dense, tightly coiled hair forming a compact irregular crown, cut short enough that an opponent cannot grip it.
- Gray-green eyes that become slightly unfocused when the Red Measure intensifies.
- Deep warm-brown, visibly sun-touched skin that is distinctly darker than Eve's light peach complexion, with natural texture and pale arena scars.
- Approximately 6'2" / 188 cm and 205 lb / 93 kg.
- Powerful, economical build produced by labor, swimming, and combat rather than decorative bodybuilding.
- Youthful but battle-hardened appearance at 31: approachable handsomeness, strong brows, gray-green alert eyes, a broad expressive mouth, and a previously broken nose that healed well.
- Neatly shaped close facial hair: short mustache connected to a close beard along the jaw and chin, dense enough to define his face without concealing it.
- Right-hand dominant but visibly trained on both sides.
- Alert stillness: he counts exits and watches systems even while apparently relaxed.

## Canonical wardrobe

- Dark charcoal or black training wrap with layered, practical linen and leather.
- Practical brown leather gladiator sandals with secure straps around the ankles and lower calves unless a scene calls for bare feet.
- Eve's small pomegranate-key token, worn without ostentation.
- No ornamental victory laurels unless the scene is explicitly a public performance.
- Arena scars remain visible but should not overwhelm his identity.
- Weapons are scene-dependent; default to no weapon for the anchor portrait so posture and physique remain readable.

His silhouette should communicate a valuable captive given excellent equipment but denied the decorative excess of his owner.

## Visual language

**Default medium:** Polished semi-realistic mythic fantasy illustration, matched to Eve's approved visual style.

**Palette:** Charcoal, worn brown leather, river gray-green, muted bronze, and a small pomegranate-red accent.

**Motifs:** Broken circles, river bends, black laurels, repaired chains, maze routes, redirected force.

**Bearing:** Controlled, observant, physically capable, with dry warmth rather than grim hostility.

**Default environment:** A quiet arena preparation chamber where a labyrinth entrance is visible beyond him. Scenery remains secondary in an anchor portrait.

## Base prompt: physique turnaround

Use this sheet to establish Vincent's anatomy and proportions before adding public clothing. The minimal training garment is a neutral modeling aid, not his complete public costume.

```text
Use case: stylized-concept
Asset type: foundational character turnaround sheet
Primary request: create a reliable anatomy and physique anchor for Vincent, an adult mortal labyrinth champion age 31
Input images: use the current v2 public-garb anchor for face, hair, beard, skin tone, and identity; use the v1 physique sheet only for height, powerful proportions, and scar placement; if Eve's approved sheet is supplied, use it only for illustration style, layout, scale, and rendering quality
Scene/backdrop: plain warm limestone-neutral studio background with no scenery
Subject: the same adult man shown consistently from front, three-quarter, side, and back; youthful but battle-hardened approachable face; near-black dense tightly coiled hair in a compact irregular crown; neatly shaped short mustache and close beard; strong brows; gray-green alert eyes; healed broken nose; broad expressive mouth; deep warm-brown sun-touched skin distinctly darker than Eve's; restrained pale arena scars; 6'2" and about 205 lb; powerful economical fighter's build made by labor, swimming, and combat rather than decorative bodybuilding
Style/medium: polished semi-realistic mythic fantasy character design illustration matching Eve's approved sheets, clean painterly rendering, believable anatomy
Composition/framing: orderly full-body turnaround lineup, neutral standing poses, consistent scale and eye line, head-to-toe visible in every view, hands relaxed, bare feet visible
Lighting/mood: even neutral studio lighting designed to reveal physique, skin tone, scars, and form without dramatic shadow
Color palette: deep warm-brown skin, near-black coiled hair and beard, gray-green eyes, plain charcoal training garment, limestone-neutral background
Materials/textures: natural skin and hair texture, simple matte linen training briefs
Constraints: clearly adult age 31; modest secure minimal charcoal arena-training briefs or short wrap; same identity and exact proportions in every view; anatomically coherent hands and feet; restrained scars consistent across angles; no glamour pose; no erotic framing; no text; no labels; no watermark
Avoid: copying faces or identities from skin references; light peach skin; pale skin; black-blue skin; bodybuilder exaggeration; pin-up styling; rage expression; modern graphics; logos; armor; weapons; cropped heads or feet; inconsistent bodies between views
```

## Base prompt: public-garb turnaround

Generate this only after selecting a physique anchor. Use the selected physique sheet as the primary identity and proportion reference.

```text
Use case: identity-preserve
Asset type: canonical public-wardrobe character turnaround sheet
Primary request: dress the established Vincent anchor in his canonical champion garb while preserving his face, physique, proportions, scars, hair, skin, and identity exactly
Input images: Image 1: approved physique anchor and primary identity/proportion reference; Eve's approved public-garb sheet may be used only for shared world rendering and material language
Scene/backdrop: plain warm limestone-neutral studio background with no scenery
Subject: the same adult Vincent shown consistently from front, three-quarter, side, and back; near-black dense tightly coiled hair in a compact irregular crown; neatly shaped short mustache and close beard; strong brows; gray-green eyes; broad expressive mouth; healed broken nose; deep warm-brown sun-touched skin; restrained pale arena scars; powerful 6'2", 205 lb economical fighter's build
Style/medium: exactly match the approved anchor's polished semi-realistic mythic fantasy illustration style and rendering
Composition/framing: orderly full-body turnaround lineup, consistent scale and eye line, head-to-toe visible, hands and gladiator sandals fully visible
Lighting/mood: even neutral studio lighting designed to reveal costume construction and silhouette
Color palette: charcoal, black, worn brown leather, muted bronze, river gray-green, restrained pomegranate red
Materials/textures: practical woven linen, worn leather, muted bronze, natural skin and hair texture
Constraints: preserve identity and body proportions; dark layered training wrap and practical sleeveless arena tunic; fitted leather belt and forearm bracers; secure brown leather gladiator sandals strapped around ankles and lower calves; small pomegranate-key token; restrained asymmetry and no decorative royal excess; coherent costume from every angle; no ornamental laurel; no text; no labels; no watermark
Avoid: physique drift; lighter skin; different faces between views; bare feet in public-garb sheet; modern shoes; knee-high fashion boots; ornate royal armor; oversized weapons; modern cosplay; exaggerated anatomy; berserker expression
```

## Base prompt: canonical scene anchor

```text
Use case: stylized-concept
Asset type: canonical full-body character anchor illustration
Primary request: portray Vincent, a 31-year-old mortal labyrinth champion whose intelligence and self-possession complicate his legal captivity
Input images: if supplied, identity and appearance reference only; do not carry over modern clothing, objects, text, or setting
Scene/backdrop: restrained arena preparation chamber with worn limestone and a dark labyrinth entrance beyond
Subject: near-black dense tightly coiled hair in a compact irregular crown; neatly shaped close beard and short mustache; gray-green eyes; deep warm-brown sun-touched skin distinctly darker than Eve's; pale arena scars; youthful but battle-hardened approachable face; strong brows; broad expressive mouth; healed broken nose; powerful economical fighter's build; small pomegranate-key token
Style/medium: polished semi-realistic mythic fantasy illustration matching Eve's character art, painterly light, believable anatomy
Composition/framing: vertical full-body hero portrait, balanced ready stance, hands visible, calm direct attention
Lighting/mood: angled warm light meeting cool labyrinth shadow; disciplined, intelligent, quietly dangerous
Color palette: charcoal, worn leather brown, river gray-green, muted bronze, restrained pomegranate red
Materials/textures: practical woven linen, worn leather, scarred natural skin, aged limestone
Constraints: dark training wrap; practical strapped leather gladiator sandals; no ornamental laurel; no modern objects; no logos; no text; no watermark
Avoid: decorative bodybuilder proportions; ornate royal armor; blond hair; blue eyes; unscarred glamour portrait; berserker expression; modern costume; cropped hands or feet
```

## Reference modes

- With a likeness reference, label it as identity and appearance reference only unless the owner explicitly requests an edit.
- Without a reference, follow the fixed anchors exactly.
- After an anchor is approved, use it as the first visual reference for every later Vincent scene.
- When generating both leads, match illustration medium, rendering detail, apparent light source, and world materials without making their silhouettes or palettes interchangeable.

## Consistency checks

1. Vincent reads as 31 and clearly adult.
2. Coiled crown, close beard, eyes, deep warm-brown skin, scars, nose, height impression, and build match the fixed anchors.
3. His expression conveys observation and contained warmth, not generic rage.
4. Clothing communicates champion status and captivity without royal ornament.
5. Anatomy, hands, feet, token, straps, and weapon geometry are coherent.
6. No modern objects, unintended text, branded imagery, or watermarks appear.
7. His visual treatment matches Eve's world while preserving the status contrast between them.

Iterate with one targeted correction at a time and repeat the fixed identity constraints in every revision.

## Anchor registry

### Canonical public-garb and identity anchor v2

**File:** `vincent-public-garb-turnaround-v2.png`

**Approved:** September 3, 2026

**Status:** Current controlling reference for Vincent's face, near-black tightly coiled hair, close beard and mustache, deep warm-brown skin, identity, and public champion wardrobe. It supersedes v1 for every visible identity feature.

**Input reference roles:** Vincent's former public-garb anchor controlled the shared rendering, four-view layout, scale, powerful body, scars, clothing, and gladiator sandals. One private owner-supplied image guided only the coiled hair, deeper warm-brown skin, and restrained facial hair; its exact face, expression, modern clothing, pose, outline, and graphic style were excluded. The private reference was not committed and its temporary path was not recorded.

**Final prompt:**

```text
Use case: stylized-concept
Asset type: non-canonical alternative garbed character turnaround for visual comparison
Primary request: explore an Afro-diasporic visual design for Vincent while keeping his established age, role, powerful physique, scars, champion clothing, and anchor-sheet presentation
Input images: Image 1 is the approved Vincent public-garb anchor and controls the polished semi-realistic mythic fantasy rendering, four-view layout, scale, neutral poses, powerful labor-built body, scars, dark champion garb, and gladiator sandals. Image 2 is appearance inspiration only for deep warm-brown skin, short dense natural Afro-textured coils, and neatly restrained facial hair; do not copy its exact face, expression, modern shirt, outline, pose, or graphic style.
Scene/backdrop: plain warm limestone-neutral studio background with no scenery
Subject: the same newly designed adult Black man shown consistently from front, three-quarter, side, and back; age 31 with a youthful but battle-hardened face; short dense coiled natural hair with a compact irregular silhouette, too short to grip in combat; gray-green alert eyes; broad expressive mouth; healed broken nose; neatly shaped short mustache and close beard along jaw and chin; deep warm-brown sun-touched skin with natural texture, clearly darker than Eve; restrained pale arena scars consistently placed; powerful economical fighter's build made by labor, swimming, and combat
Style/medium: exactly match Image 1's polished semi-realistic mythic fantasy character design illustration, clean painterly rendering, believable anatomy
Composition/framing: one orderly horizontal character turnaround sheet containing four separate full-body views, neutral standing poses, consistent scale and eye line, head-to-toe visible in every view, hands and strapped sandals fully visible
Lighting/mood: even neutral studio lighting designed to reveal deep warm-brown skin, coiled hair texture, facial hair, scars, clothing, and silhouette
Color palette: deep warm-brown skin, near-black coiled hair and beard, gray-green eyes, charcoal and black linen, worn brown leather, muted bronze, restrained pomegranate red, limestone
Wardrobe: preserve the approved dark layered asymmetrical training wrap and sleeveless arena tunic, fitted worn-leather belt, functional leather forearm bracers, secure brown leather gladiator sandals, and small understated pomegranate-key token
Constraints: clearly adult age 31; fully clothed public champion design; same identity, hair, beard, skin tone, scars, and exact body proportions in every view; coherent hands, sandals, straps, and garment construction; calm observant expression; no text; no labels; no logos; no watermark
Avoid: copying the exact face or expression from Image 2; straight or wavy hair; long locs; oversized spherical Afro; clean-shaven face; light or peach skin; bodybuilder exaggeration; rage caricature; modern clothing; graphic sticker outline; ornate royal armor; weapons; cropped heads or feet; inconsistent identity or skin tone between views
```

### Supporting physique and proportion anchor v1

**File:** `vincent-physique-turnaround-v1.png`

**Approved:** September 3, 2026

**Status:** Retained only for Vincent's 6'2", 205 lb powerful body proportions and general scar placement. Its face, straight-cropped hair, lighter bronze skin, and facial-hair treatment are superseded by v2 and must not be propagated.

**Input reference roles:** Eve's approved physique sheet was used only for shared illustration style, layout, scale, neutral posing, and rendering quality. Two private owner-supplied images were used only as warm bronze skin-tone references; their faces, identities, gender, hairstyles, poses, clothing, jewelry, historical imagery, and compositions were explicitly excluded. The private references were not committed and their temporary paths were not recorded.

**Final prompt:**

```text
Use case: stylized-concept
Asset type: foundational character turnaround sheet for a fiction project
Primary request: create a reliable anatomy and physique anchor for Vincent, an adult mortal labyrinth champion age 31
Input images: Image 1 is Eve's approved sheet and is reference only for illustration style, four-view layout, scale, neutral posing, and rendering quality; do not copy her anatomy, face, hair, or light skin. Images 2 and 3 are warm bronze skin-tone references only; do not copy any face, identity, gender, hairstyle, pose, clothing, jewelry, historical imagery, or composition from them.
Scene/backdrop: plain warm limestone-neutral studio background with no scenery
Subject: the same adult man shown consistently from front, three-quarter, side, and back; newly designed youthful but battle-hardened approachable handsome face at age 31; short dark brown hair cropped too short to grip; gray-green alert eyes; healed broken nose; expressive mouth; optional very light dark stubble; warm medium-bronze visibly sun-browned skin distinctly darker than Eve's; restrained pale arena scars consistently placed across shoulder, ribs, forearm, and thigh; 6 feet 2 inches tall and about 205 pounds; powerful economical fighter's build made by labor, swimming, and combat rather than decorative bodybuilding
Style/medium: polished semi-realistic mythic fantasy character design illustration matching Image 1, clean painterly rendering, believable anatomy
Composition/framing: one orderly horizontal character turnaround sheet containing four separate full-body views, neutral standing poses, consistent scale and eye line, head-to-toe visible in every view, hands relaxed, bare feet visible
Lighting/mood: even neutral studio lighting designed to reveal physique, warm bronze skin tone, scars, and form without dramatic shadow
Color palette: warm medium-bronze skin, dark brown hair, gray-green eyes, plain charcoal training garment, limestone-neutral background
Materials/textures: natural skin and hair texture, simple matte linen training briefs
Constraints: clearly adult age 31; modest secure minimal charcoal arena-training briefs or short wrap; same identity and exact proportions in every view; anatomically coherent hands and feet; restrained scars consistent across angles; youthful facial structure tempered by lived experience; calm observant expression; no glamour pose; no erotic framing; no text; no labels; no watermark
Avoid: copying faces or identities from any reference; light peach or pale skin; bodybuilder exaggeration; pin-up styling; rage expression; modern graphics; logos; armor; weapons; cropped heads or feet; inconsistent bodies or skin tones between views
```

### Superseded public-garb anchor v1

**File:** `vincent-public-garb-turnaround-v1.png`

**Approved:** September 3, 2026

**Status:** Historical approved design, superseded by `vincent-public-garb-turnaround-v2.png`. Retain for provenance only; do not use it as a current identity reference.

**Input reference roles:** Vincent's approved physique anchor controlled face, identity, anatomy, proportions, bronze skin tone, scars, hair, and rendering. Eve's approved public-garb sheet was used only for shared world materials, palette harmony, layout, scale, and rendering quality.

**Final prompt:**

```text
Use case: identity-preserve
Asset type: canonical public-wardrobe character turnaround sheet for a fiction project
Primary request: dress the established Vincent anchor in his canonical mortal champion garb while preserving his identity and underlying physique exactly
Input images: Image 1 is Vincent's working physique anchor and the primary face, identity, anatomy, proportions, bronze skin tone, scar map, hair, and rendering-style reference; preserve him exactly. Image 2 is Eve's approved public-garb sheet and is reference only for shared world materials, palette harmony, four-view layout, scale, and rendering quality; do not copy her anatomy, face, clothing silhouette, jewelry, or bare feet.
Scene/backdrop: plain warm limestone-neutral studio background with no scenery
Subject: the same adult Vincent shown consistently from front, three-quarter, side, and back in matching neutral standing poses; same youthful but battle-hardened face age 31; short dark brown hair; gray-green eyes; healed broken nose; warm medium-bronze sun-browned skin distinctly darker than Eve's; same restrained pale arena scars; powerful 6-foot-2, 205-pound economical fighter's build
Style/medium: exactly match Image 1's polished semi-realistic mythic fantasy illustration style and painterly rendering, harmonious with Image 2
Composition/framing: one orderly horizontal turnaround sheet containing four separate full-body views, consistent scale and eye line, head-to-toe visible, hands and gladiator sandals fully visible and unobscured in every view
Lighting/mood: even neutral studio lighting designed to reveal costume construction, skin tone, scars, and silhouette
Color palette: charcoal, black, worn brown leather, muted bronze, river gray-green, restrained pomegranate red, limestone
Materials/textures: practical woven linen, worn leather, muted bronze, natural skin and hair texture
Wardrobe: dark layered asymmetrical training wrap and practical sleeveless arena tunic that leaves arms and some upper chest visible; fitted worn-leather belt; functional leather forearm bracers; secure brown leather gladiator sandals with coherent straps around feet, ankles, and lower calves; small understated pomegranate-key token; no cape; no helmet; no royal ornament
Constraints: preserve face, adult identity, exact height impression, weight, body proportions, bronze skin tone, scars, hair, and rendering style from Image 1; same identity and proportions across all four views; practical gladiator sandals visible in every view; anatomically coherent hands, feet, sandal straps, and costume construction; no ornamental laurel; no weapons; no text; no labels; no logos; no watermark
Avoid: physique drift; lighter or peach skin; different faces, scars, or bodies between views; bare feet; modern shoes; knee-high fashion boots; ornate royal armor; oversized shoulder pieces; superhero costume; modern cosplay; exaggerated anatomy; berserker expression; cropped feet or sandals
```
