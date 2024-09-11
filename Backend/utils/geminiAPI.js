require('dotenv').config();
const { GoogleGenerativeAI  } = require('@google/generative-ai');
const generativeAi = new GoogleGenerativeAI (
  process.env.GEMINI_API_KEY,
);

const getInvestmentPlanFromGemini = async (userInputs) => {
  console.log('Jesuis ici ajajajajajajajaj',process.env.GEMINI_API_KEY)
  
  const model = generativeAi.getGenerativeModel({ model: "gemini-1.5-flash"});

  const prePrompt = `
  Tu es une IA experte en investissement financier. Je vais te
   fournir des informations sur un projet d'investissement,
    y compris le budget total, le secteur d'investissement,
     la durée de l'investissement, le retour attendu,
      la tolérance au risque, le type d'investissement,
       la description du projet, les objectifs spécifiques,
        le calendrier, les partenaires et les commentaires.
         En utilisant ces informations, je voudrais que tu 
         génères un plan d'investissement détaillé sous forme de tableau.
          Le tableau doit inclure entre autres obligatoires les colonnes suivantes :

  1. Étape de l'investissement
  2. Description de l'étape
  3. Budget alloué
  4. Durée de l'étape
  5. Objectifs à atteindre
  6. Risques associés
  7. Retour attendu pour l'étape

  Le tableau doit être retourné dans un format JSON où chaque étape est
   une entrée de tableau avec les clés et leur valeur associée avec les unités.

  Voici les informations du projet :

  ${JSON.stringify(userInputs, null, 2)}

  Merci de fournir le tableau structuré en JSON.
  `;

  try {
    const result =  await model.generateContent(
      prePrompt,
    );
    console.log(result);
    const response = await result.response;
    console.log("réponse brute", response)
    const text = response.text();
    console.log(text)
    return text;  // Adjust based on actual API response
  } catch (error) {
    console.error('Error fetching data from Gemini:', error);
    throw new Error('Failed to fetch investment plan');
  }
};

module.exports = getInvestmentPlanFromGemini;
