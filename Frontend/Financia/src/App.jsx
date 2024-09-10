import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import FinancialForecastPage from './pages/FinancialForecastPage';
import NewForecastPage from './pages/NewForecastPage';
import ForecastHistoryPage from './pages/ForecastHistoryPage';
import './App.css'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home/>} />
        <Route exact path="/" element={<FinancialForecastPage/>} />
        <Route path="/new-forecast" element={<NewForecastPage/>} />
        <Route path="/forecast-history" element={<ForecastHistoryPage/>} />
        {/* <Route path="/forecast/:id" component={ForecastDetailsPage} /> Ajoutez cette ligne */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;