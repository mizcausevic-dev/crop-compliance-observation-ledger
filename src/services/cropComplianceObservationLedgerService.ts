import {
  complianceRisks,
  fieldPackets,
  observationCases
} from "../data/sampleCropComplianceObservations";

export function summary() {
  return {
    observations: observationCases.length,
    urgentObservations: observationCases.filter((item) => item.risk === "red").length,
    blockedCompliance: complianceRisks.filter((item) => item.readiness !== "green").length,
    fragileFieldPackets: fieldPackets.filter((item) => item.status !== "green").length,
    recommendation:
      "Clear spray-log parity, scout-sheet corrections, and acreage drift first so crop compliance posture stays safe before the next buyer or regulator review window burns."
  };
}

export function observationLane() {
  return observationCases;
}

export function complianceRisksLane() {
  return complianceRisks;
}

export function fieldPosture() {
  return fieldPackets;
}

export function verification() {
  return [
    "Observation cases map to concrete buyer, export, and program-review workflows, not just notes in a field notebook.",
    "Compliance blockers surface the exact evidence needed before an observation packet becomes unsafe.",
    "Field posture ties crop observations to audit readiness, remediation ownership, and review timing.",
    "The ledger is buyer-readable and safe for embedded analytics tie-back.",
    "Synthetic data only; no real grower, field, or buyer records are included."
  ];
}

export function payload() {
  return {
    summary: summary(),
    observationCases: observationLane(),
    complianceRisks: complianceRisksLane(),
    fieldPackets: fieldPosture(),
    verification: verification()
  };
}
