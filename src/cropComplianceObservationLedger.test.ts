import { describe, expect, test } from "vitest";

import {
  complianceRisksLane,
  fieldPosture,
  observationLane,
  summary,
  verification
} from "./services/cropComplianceObservationLedgerService";

describe("crop-compliance-observation-ledger", () => {
  test("returns a crop-compliance recommendation", () => {
    expect(summary().recommendation).toMatch(/spray|scout|acreage|crop|review/i);
  });

  test("maps observation cases and blockers", () => {
    expect(observationLane().length).toBeGreaterThan(2);
    expect(complianceRisksLane().some((risk) => risk.readiness === "red")).toBe(true);
  });

  test("field posture stays buyer-readable", () => {
    expect(fieldPosture().every((packet) => packet.audience.length > 0)).toBe(true);
    expect(verification().some((item) => item.toLowerCase().includes("synthetic"))).toBe(true);
  });
});
