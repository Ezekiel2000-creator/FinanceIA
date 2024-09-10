import React, { useState } from 'react';

const InvestmentForm = ({ onSubmit, isLoading, error }) => {
  const [formFields, setFormFields] = useState({
    requiredFields: {
      projectName: '',
      totalBudget: '',
      totalBudgetCurrency: 'USD', // Ajout du sélecteur de devise
      investmentSector: '',
      investmentDuration: '',
      investmentDurationType: 'months', // Ajout du sélecteur de durée
      expectedReturn: '',
      expectedReturnCurrency: 'USD', // Ajout du sélecteur de devise
      riskTolerance: '',
      investmentType: '',
    },
    optionalFields: {},
  });

  const [optionalFieldType, setOptionalFieldType] = useState('');

  const handleInputChange = (e, fieldName, isRequired) => {
    const value = e.target.value;
    if (isRequired) {
      setFormFields((prev) => ({
        ...prev,
        requiredFields: {
          ...prev.requiredFields,
          [fieldName]: value,
        },
      }));
    } else {
      setFormFields((prev) => ({
        ...prev,
        optionalFields: {
          ...prev.optionalFields,
          [fieldName]: value,
        },
      }));
    }
  };

  const handleAddOptionalField = () => {
    if (optionalFieldType && !formFields.optionalFields[optionalFieldType]) {
      setFormFields((prev) => ({
        ...prev,
        optionalFields: {
          ...prev.optionalFields,
          [optionalFieldType]: '',
        },
      }));
      setOptionalFieldType('');
    }
  };

  const handleRemoveOptionalField = (fieldName) => {
    setFormFields((prev) => {
      const updatedOptionalFields = { ...prev.optionalFields };
      delete updatedOptionalFields[fieldName];
      return { ...prev, optionalFields: updatedOptionalFields };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formFields);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4"></h2>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Nom du projet</label>
        <input
          type="text"
          value={formFields.requiredFields.projectName}
          onChange={(e) => handleInputChange(e, 'projectName', true)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Budget total</label>
        <div className="flex">
          <input
            type="number"
            value={formFields.requiredFields.totalBudget}
            onChange={(e) => handleInputChange(e, 'totalBudget', true)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            required
          />
          <select
            value={formFields.requiredFields.totalBudgetCurrency}
            onChange={(e) => handleInputChange(e, 'totalBudgetCurrency', true)}
            className="ml-2 px-4 py-2 border rounded-md focus:outline-none focus:ring"
            required
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="FCFA">FCFA</option>
            {/* Ajoutez d'autres devises ici */}
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Secteur d'investissement</label>
        <input
          type="text"
          value={formFields.requiredFields.investmentSector}
          onChange={(e) => handleInputChange(e, 'investmentSector', true)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Durée de l'investissement</label>
        <div className="flex">
          <input
            type="number"
            value={formFields.requiredFields.investmentDuration}
            onChange={(e) => handleInputChange(e, 'investmentDuration', true)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            required
          />
          <select
            value={formFields.requiredFields.investmentDurationType}
            onChange={(e) => handleInputChange(e, 'investmentDurationType', true)}
            className="ml-2 px-4 py-2 border rounded-md focus:outline-none focus:ring"
            required
          >
            <option value="months">Mois</option>
            <option value="years">Années</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Retour attendu</label>
        <div className="flex">
          <input
            type="number"
            value={formFields.requiredFields.expectedReturn}
            onChange={(e) => handleInputChange(e, 'expectedReturn', true)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
            required
          />
          <select
            value={formFields.requiredFields.expectedReturnCurrency}
            onChange={(e) => handleInputChange(e, 'expectedReturnCurrency', true)}
            className="ml-2 px-4 py-2 border rounded-md focus:outline-none focus:ring"
            required
          >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="FCFA">FCFA</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Tolérance au risque</label>
        <input
          type="text"
          value={formFields.requiredFields.riskTolerance}
          onChange={(e) => handleInputChange(e, 'riskTolerance', true)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          required
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Type d'investissement</label>
        <input
          type="text"
          value={formFields.requiredFields.investmentType}
          onChange={(e) => handleInputChange(e, 'investmentType', true)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          required
        />
      </div>
      {Object.keys(formFields.optionalFields).map((fieldName, index) => (
        <div key={index} className="mb-4 flex items-center">
          <label className="block text-gray-700 mb-2">{fieldName}</label>
          <input
            type="text"
            value={formFields.optionalFields[fieldName]}
            onChange={(e) => handleInputChange(e, fieldName, false)}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
          />
          <button
            type="button"
            onClick={() => handleRemoveOptionalField(fieldName)}
            className="ml-2 text-red-500 hover:text-red-700"
          >
            Supprimer
          </button>
        </div>
      ))}
      <div className="mb-4">
        <select
          value={optionalFieldType}
          onChange={(e) => setOptionalFieldType(e.target.value)}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring"
        >
          <option value="">Ajouter un champ facultatif</option>
          <option value="projectDescription">Description du projet</option>
          <option value="specificGoals">Objectifs spécifiques</option>
          <option value="timeline">Calendrier</option>
          <option value="partners">Partenaires</option>
          <option value="comments">Commentaires</option>
        </select>
       
      </div>
      <div className="flex items-center justify-between">
      <button
          type="button"
          onClick={handleAddOptionalField}
          className="mt-2 bg-[#251141] text-white px-4 py-2 rounded hover:bg-[#462370]"
        >
          Ajouter
        </button>
        
        <button
          type="submit"
          className="bg-[#251141] text-white px-4 py-2 rounded hover:bg-[#462370]"
        >
          Soumettre
        </button>
        {isLoading && <p className="text-gray-500">Requête en cours...</p>}
        {error && <p className="text-red-500">Erreur: {error}</p>}
      </div>
    </form>
  );
};

export default InvestmentForm;
