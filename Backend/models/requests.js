const mongoose = require('mongoose');


// Sous-schéma pour chaque étape de l'investissement
const InvestmentStepSchema = new mongoose.Schema({
  etapeDeLInvestissement: { type: String, required: true },
  descriptionDeLEtape: { type: String, required: true },
  budgetAlloue: { type: String, required: true },
  dureeDeLEtape: { type: String, required: true },
  objectifsAAtteindre: { type: String, required: true },
  risquesAssocies: { type: String, required: true },
  retourAttenduPourLEtape: { type: String, required: true }
});

const InvestmentPlanSchema = new mongoose.Schema({
  projectName: { type: String, required: true },
  totalBudget: { type: Number, required: true },
  investmentSector: { type: String, required: true },
  investmentDuration: { type: String, required: true },
  expectedReturn: { type: Number, required: true },
  riskTolerance: { type: String, required: true },
  investmentType: { type: String, required: true },
  projectDescription: { type: String },
  specificGoals: { type: String },
  timeline: { type: String },
  partners: { type: String },
  comments: { type: String },
  createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  investmentPlanTable: [InvestmentStepSchema],
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('InvestmentPlan', InvestmentPlanSchema);
