"use client";
import { createContext, useContext, useState } from "react";
import { date } from "yup";

const AppContext = createContext<any>(undefined);

export function AppWrapper({ children }: { children: React.ReactNode }) {
  let [teamName, setTeamName] = useState("");
  return (
    <AppContext.Provider
      value={{
        teamName,
        setTeamName,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
