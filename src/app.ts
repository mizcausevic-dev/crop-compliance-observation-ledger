// SPDX-License-Identifier: AGPL-3.0-or-later

import express from "express";

import {
  complianceRisksLane,
  fieldPosture,
  observationLane,
  payload,
  summary,
  verification
} from "./services/cropComplianceObservationLedgerService";
import {
  renderDocs,
  renderFieldPosture,
  renderObservationLane,
  renderOverview,
  renderComplianceRisks,
  renderVerification
} from "./services/render";

const app = express();
const port = Number(process.env.PORT ?? 5560);
const host = process.env.HOST || "0.0.0.0";

app.get("/", (_req, res) => res.type("html").send(renderOverview()));
app.get("/observation-lane", (_req, res) => res.type("html").send(renderObservationLane()));
app.get("/compliance-risks", (_req, res) => res.type("html").send(renderComplianceRisks()));
app.get("/field-posture", (_req, res) => res.type("html").send(renderFieldPosture()));
app.get("/verification", (_req, res) => res.type("html").send(renderVerification()));
app.get("/docs", (_req, res) => res.type("html").send(renderDocs()));

app.get("/api/dashboard/summary", (_req, res) => res.json(summary()));
app.get("/api/observation-lane", (_req, res) => res.json(observationLane()));
app.get("/api/compliance-risks", (_req, res) => res.json(complianceRisksLane()));
app.get("/api/field-posture", (_req, res) => res.json(fieldPosture()));
app.get("/api/verification", (_req, res) => res.json(verification()));
app.get("/api/sample", (_req, res) => res.json(payload()));

if (require.main === module) {
  app.listen(port, host, () => {
    console.log(`Crop Compliance Observation Ledger listening on http://${host}:${port}`);
  });
}

export default app;
