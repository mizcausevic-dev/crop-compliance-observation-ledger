import { payload, summary } from "../src/services/cropComplianceObservationLedgerService";

console.log("crop-compliance-observation-ledger demo");
console.log(JSON.stringify(summary(), null, 2));
console.log(JSON.stringify(payload().complianceRisks, null, 2));
