import axiosInstance from "./axiosInstance";

export const makeInvestmentRequest = async (data) =>{
    try {
        const response = await axiosInstance.post('/request/investment-plans',data)
        console.log(response.data);
        return response.data
      }  catch (error) {
        console.error('Error making request:', error);
        if (error.response.status == 403 || error.response.status == 401) {
          console.log("expiré")
          window.location.href = '/connexion';
        }
        console.error('Error making request:', error);
        throw error;
      }
} 