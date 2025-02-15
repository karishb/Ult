import React, { createContext, useState, useContext } from 'react';

const DashboardContext = createContext();

export const DashboardProvider = ({ children }) => {
  const [componentVisibility, setComponentVisibility] = useState({
    watchlist: true,
    totalPlants: true,
    circularProgress: true,
    calendar: true
  });

  return (
    <DashboardContext.Provider value={{ componentVisibility, setComponentVisibility }}>
      {children}
    </DashboardContext.Provider>
  );
};

export const useDashboard = () => useContext(DashboardContext); 