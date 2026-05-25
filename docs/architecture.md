# Architecture

`crop-compliance-observation-ledger` is a lightweight TypeScript + Express control room for modeling the operating layer between field observations, compliance blockers, field packet posture, and buyer-safe agri review operations.

## Control surfaces

- `/`
  - control snapshot
  - active observation cases
  - urgent observation count
  - blocked compliance count
  - fragile field packet count
- `/observation-lane`
  - field cases with crop, region, owner, risk, and next action
- `/compliance-risks`
  - blocker map with required evidence, owner, and impact area
- `/field-posture`
  - packet posture with confidence score, audience, blocker, and review timing
- `/verification`
  - what the repo proves about crop-compliance systems
- `/docs`
  - route map and Kinetic Gain Embedded tie-back

## Data shape

### Observation cases

- case id
- farm
- region
- crop
- excerpt
- owner
- next action
- risk

### Compliance risks

- risk id
- blocker
- source
- impact area
- required evidence
- owner
- readiness
- note

### Field packets

- packet id
- audience
- confidence score
- review window hours
- blocker
- status
- decision note

## Embedded fit

This primitive is designed to map cleanly into in-product analytics and operator surfaces where buyers need crop-safe compliance visibility without direct write access to underlying operational systems.
