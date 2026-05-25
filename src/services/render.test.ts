import { describe, expect, test } from "vitest";

import {
  renderComplianceRisks,
  renderDocs,
  renderFieldPosture,
  renderObservationLane,
  renderOverview,
  renderVerification
} from "./render";
import {
  complianceRisks,
  fieldPackets,
  observationCases
} from "../data/sampleCropComplianceObservations";

const renderers = [
  ["overview", renderOverview],
  ["observation-lane", renderObservationLane],
  ["compliance-risks", renderComplianceRisks],
  ["field-posture", renderFieldPosture],
  ["verification", renderVerification],
  ["docs", renderDocs]
] as const;

describe("render", () => {
  test.each(renderers)("%s produces a full HTML document with nav", (_label, fn) => {
    const html = fn();
    expect(html.startsWith("<!DOCTYPE html>")).toBe(true);
    expect(html).toContain("</html>");
    expect(html).toContain("Crop Compliance Observation Ledger");
    expect(html).toContain('href="/observation-lane"');
    expect(html).toContain('href="/docs"');
  });

  test("observation lane lists every case with a risk tag", () => {
    const html = renderObservationLane();
    for (const observationCase of observationCases) {
      expect(html).toContain(observationCase.caseId);
    }
    expect(html).toContain('class="st needs"');
  });

  test("compliance risks list every blocker with readiness tags", () => {
    const html = renderComplianceRisks();
    for (const block of complianceRisks) {
      expect(html).toContain(block.riskId);
    }
    expect(html).toContain('class="bad"');
    expect(html).toContain("Buyer audit readiness");
  });

  test("field posture shows packets and confidence scores", () => {
    const html = renderFieldPosture();
    for (const packet of fieldPackets) {
      expect(html).toContain(packet.packetId);
      expect(html).toContain(String(packet.confidenceScore));
    }
  });

  test("verification renders proof statements", () => {
    const html = renderVerification();
    expect(html).toContain("Verification");
  });

  test("docs page enumerates the route surface", () => {
    const html = renderDocs();
    expect(html).toContain("/compliance-risks");
    expect(html).toContain("/field-posture");
  });
});
