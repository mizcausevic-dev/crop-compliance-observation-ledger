export type RiskState = "red" | "yellow" | "green";

export type ObservationCase = {
  caseId: string;
  farm: string;
  region: string;
  crop: string;
  excerpt: string;
  owner: string;
  nextAction: string;
  risk: RiskState;
};

export type ComplianceRisk = {
  riskId: string;
  blocker: string;
  source: string;
  impactArea: string;
  requiredEvidence: string;
  owner: string;
  readiness: RiskState;
  note: string;
};

export type FieldPacket = {
  packetId: string;
  audience: string;
  confidenceScore: number;
  reviewWindowHours: number;
  blocker: string;
  status: RiskState;
  decisionNote: string;
};

export const observationCases: ObservationCase[] = [
  {
    caseId: "OBS-401",
    farm: "North Valley Produce",
    region: "Central California",
    crop: "Leafy greens",
    excerpt: "Spray-log timestamps and harvest-block boundaries do not yet reconcile for the food-safety packet scheduled for tomorrow's buyer review.",
    owner: "Compliance manager",
    nextAction: "Reconcile spray logs against lot maps and attach the corrected pre-harvest interval evidence before 8 AM.",
    risk: "red"
  },
  {
    caseId: "OBS-402",
    farm: "Mesa Ridge Orchards",
    region: "Yakima Valley",
    crop: "Apples",
    excerpt: "Residue test results are in, but the linked field observation sheet is still missing one irrigation-zone correction from the last scout walk.",
    owner: "Field operations lead",
    nextAction: "Update the scout sheet, attach the residue lab result, and rebuild the buyer-ready packet.",
    risk: "red"
  },
  {
    caseId: "OBS-403",
    farm: "Delta Grain Cooperative",
    region: "Arkansas Delta",
    crop: "Rice",
    excerpt: "Water-use observation notes changed after the district response and the conservation program packet now shows mismatched field acreage totals.",
    owner: "Program coordinator",
    nextAction: "Sync acreage figures and regenerate the conservation evidence summary for review.",
    risk: "yellow"
  },
  {
    caseId: "OBS-404",
    farm: "Sunrise Citrus Group",
    region: "South Texas",
    crop: "Grapefruit",
    excerpt: "Pest-pressure observations are logged, but the grower sign-off on the remediation narrative is still pending before export documentation can clear.",
    owner: "Quality director",
    nextAction: "Secure grower sign-off and attach the final remediation narrative to the export packet.",
    risk: "yellow"
  }
];

export const complianceRisks: ComplianceRisk[] = [
  {
    riskId: "RR-51",
    blocker: "Spray log and lot-map parity still incomplete",
    source: "Food safety evidence lane",
    impactArea: "Buyer audit readiness",
    requiredEvidence: "Corrected spray log, lot map overlay, and signed pre-harvest interval worksheet.",
    owner: "Compliance manager",
    readiness: "red",
    note: "Do not release the packet until the lot map and spray chronology point to the same harvest block."
  },
  {
    riskId: "RR-52",
    blocker: "Scout observation sheet missing irrigation-zone correction",
    source: "Field observation notebook",
    impactArea: "Residue assurance",
    requiredEvidence: "Updated scout sheet, linked lab result, and revised field exception note.",
    owner: "Field operations lead",
    readiness: "red",
    note: "Residue evidence becomes unsafe when the field observation sheet still references the wrong zone conditions."
  },
  {
    riskId: "RR-53",
    blocker: "Acreage totals mismatch in conservation packet",
    source: "Program reporting lane",
    impactArea: "Incentive compliance",
    requiredEvidence: "Synced acreage ledger, district response memo, and corrected summary export.",
    owner: "Program coordinator",
    readiness: "yellow",
    note: "Program eligibility can usually be recovered quickly, but only if the acreage math is corrected before submission."
  },
  {
    riskId: "RR-54",
    blocker: "Grower sign-off pending on remediation narrative",
    source: "Executive approval lane",
    impactArea: "Export posture",
    requiredEvidence: "Signed grower approval, final remediation memo, and indexed support exhibits.",
    owner: "Quality director",
    readiness: "yellow",
    note: "The packet is close, but export-safe posture still depends on named ownership of the final narrative."
  }
];

export const fieldPackets: FieldPacket[] = [
  {
    packetId: "FP-11",
    audience: "Retailer audit team",
    confidenceScore: 59,
    reviewWindowHours: 12,
    blocker: "Spray-log parity still red",
    status: "red",
    decisionNote: "Hold the audit packet until the lot map and harvest interval evidence reconcile."
  },
  {
    packetId: "FP-12",
    audience: "Residue compliance reviewer",
    confidenceScore: 68,
    reviewWindowHours: 20,
    blocker: "Scout-sheet correction incomplete",
    status: "yellow",
    decisionNote: "Stage the packet, but do not promise clean residue posture until the field note correction is attached."
  },
  {
    packetId: "FP-13",
    audience: "Water program coordinator",
    confidenceScore: 83,
    reviewWindowHours: 26,
    blocker: "Acreage sync pending",
    status: "yellow",
    decisionNote: "Program readiness is recoverable if the acreage summary is reissued before tomorrow's district cycle."
  },
  {
    packetId: "FP-14",
    audience: "Export documentation desk",
    confidenceScore: 92,
    reviewWindowHours: 48,
    blocker: "Grower sign-off queued",
    status: "green",
    decisionNote: "The packet remains healthy as long as the signed narrative and indexed evidence stay bundled."
  }
];
