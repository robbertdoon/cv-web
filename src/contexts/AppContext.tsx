import { createContext } from "react";

export type AppContextType = {
  contentHeight: number;
  setContentHeight: React.Dispatch<React.SetStateAction<number>>;
  
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const AppContext = createContext<AppContextType | null>(null);
