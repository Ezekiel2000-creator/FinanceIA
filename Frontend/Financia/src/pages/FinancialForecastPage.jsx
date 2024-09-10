import React, { useState } from 'react';
import { Icon } from '@iconify/react';
import { Link } from 'react-router-dom';
import Sidebar from '../components/sidebar';
import InvestmentForm from '../components/investmentForm';
import InvestmentTable from '../components/investmentTable';
import { makeInvestmentRequest } from '../utils/apiInvestmentPlan';
import tableau_place from "../assets/images/tableau_place.png"

const FinancialForecastPage = () => {
  const [showSidebar, setShowSidebar] = useState(true);
  const [isLoading, setLoading] = useState(false);
  const [appear, setAppear] = useState(true);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [investmentPlanData, setInvestmentPlanData] = useState([]);

  const onSubmit = async (data) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const requestResponse = await makeInvestmentRequest(data);
      console.log(requestResponse);
      setInvestmentPlanData(requestResponse.Body);
      setSuccess(true);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
      setAppear(false);
    }
  };

  const handleToggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-[#160231] text-white py-4 flex items-center justify-between px-4 fixed top-0 left-0 right-0 shadow-md z-50">
        <div className="flex items-center">
          <button
            className="text-white focus:outline-none mr-4"
            onClick={handleToggleSidebar}
          >
            <Icon icon="mdi:menu" width="24" height="24" />
          </button>
          <h1 className="text-xl font-bold">Plan d'investissement</h1>
        </div>
        <Link
          to="/new-forecast"
          className="bg-[#9951F0] hover:bg-blue-600 text-white px-4 py-2 rounded flex items-center"
        >
          <Icon icon="mdi:plus" width="20" height="20" className="mr-2" />
          Nouveau plan
        </Link>
      </header>
      <div className="flex flex-grow mt-20 h-[1vh]">
        <Sidebar isOpen={showSidebar} onClose={handleToggleSidebar} />
        <div className="flex-2">
          <InvestmentForm onSubmit={onSubmit} isLoading={isLoading} error={error} />
          {isLoading && <div className="mt-4">Chargement...</div>}
        </div>
        {!isLoading && appear && <div className="flex justify-center ">
          <img src={tableau_place} alt="" className='h-[80%] w-[auto] relative left-0 right-0'/>
          <div className='flex justify-center items-center'>
            <span className='text-xl font-bold animate-bounce'>
              Veuillez remplir les champs ci-contre pour générerr votre plan d'investissement
            </span>
            <div className='h-20 w-[10px] bg-[#9951F0] mx-4'></div>
          </div>
        </div>}
        
        <div className="flex m-[5px]">
           {success && <InvestmentTable data={investmentPlanData} />}
        </div>
      </div>
    </div>
  );
};

export default FinancialForecastPage;
