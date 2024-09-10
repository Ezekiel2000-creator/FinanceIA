import React from 'react';

const InvestmentTable = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div className="overflow-x-auto mt-4">
      <h1> Plan d'investissement généré </h1>
      <hr></hr>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="py-2 px-4 bg-gray-200 text-left border">
                {key}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {Object.values(item).map((value, idx) => (
                <td key={idx} className="py-2 px-4 border"> 
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default InvestmentTable;
