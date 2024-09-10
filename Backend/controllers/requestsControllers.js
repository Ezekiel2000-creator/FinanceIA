const InvestmentPlan = require('../models/requests');

const getInvestmentPlanFromGemini = require('../utils/geminiAPI');

const createInvestmentPlan = async (req, res) => {
    try {
      console.log ('ooooooooouiiiiiiiiiiiiiiiiiiiiiiiiiiiiii')
      const userInputs = req.body;
      console.log("vvvvvvvvvvoiccccccccciiiiiii le body",userInputs)
  
      // Appelez l'API Gemini pour obtenir le tableau de plan d'investissement
      // const investmentPlanTable = await getInvestmentPlanFromGemini(userInputs);

      const investmentPlanTable = JSON.parse(`
      [
        {
          "Étape de l'investissement": "Phase de préparation",
          "Description de l'étape": "Acquisition du terrain, obtention des permis, préparation du sol et plantation des cacaoyers",
          "Budget alloué": "20000000 FCFA",
          "Durée de l'étape": "1 year",
          "Objectifs à atteindre": "Planter 10 000 cacaoyers",
          "Risques associés": "Risques climatiques, maladie des plantes, problèmes d'accès au terrain",
          "Retour attendu pour l'étape": "N/A"
        },
        {
          "Étape de l'investissement": "Phase de croissance",
          "Description de l'étape": "Entretien des cacaoyers, gestion des maladies et des parasites, récolte",
          "Budget alloué": "15000000 FCFA",
          "Durée de l'étape": "2 years",
          "Objectifs à atteindre": "Récolter au moins 10 tonnes de cacao par an",
          "Risques associés": "Risques climatiques, maladie des plantes, fluctuations du prix du cacao",
          "Retour attendu pour l'étape": "N/A"
        },
        {
          "Étape de l'investissement": "Phase de commercialisation",
          "Description de l'étape": "Séchage, transformation et vente du cacao",
          "Budget alloué": "15000000 FCFA",
          "Durée de l'étape": "3 years",
          "Objectifs à atteindre": "Vendre tout le cacao récolté à un prix minimum de 1000 EUR/tonne",
          "Risques associés": "Fluctuations du prix du cacao, difficultés de commercialisation, problèmes logistiques",
          "Retour attendu pour l'étape": "100000000 EUR"
        }
      ]
      `);
      console.log("tout va bien ici");
      const allInput = userInputs.requiredFields;

      console.log("alllllllllllllliinput",allInput);
  
      //Créez un nouvel objet InvestmentPlan avec les données retournées
      const newPlan = new InvestmentPlan({
        ...allInput,
        
        // investmentPlanTable  // Enregistrez le tableau dans le document
      });
  
      await newPlan.save();
      res.status(201).json({ message: 'Plan d\'investissement créé avec succès', Body:investmentPlanTable  });
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de la création du plan d\'investissement', error });
    }
};
  


const getInvestmentPlans = async (req, res) => {
  try {
    const plans = await InvestmentPlan.find({ createdBy: req.user.userId });
    res.status(200).json(plans);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des plans d\'investissement', error });
  }
};

const updateInvestmentPlan = async (req, res) => {
  try {
    const planId = req.params.id;
    const updatedPlan = await InvestmentPlan.findByIdAndUpdate(planId, req.body, { new: true });
    res.status(200).json({ message: 'Plan d\'investissement mis à jour avec succès', updatedPlan });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la mise à jour du plan d\'investissement', error });
  }
};

const deleteInvestmentPlan = async (req, res) => {
  try {
    const planId = req.params.id;
    await InvestmentPlan.findByIdAndDelete(planId);
    res.status(200).json({ message: 'Plan d\'investissement supprimé avec succès' });
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la suppression du plan d\'investissement', error });
  }
};

module.exports = { createInvestmentPlan, getInvestmentPlans, updateInvestmentPlan, deleteInvestmentPlan };
