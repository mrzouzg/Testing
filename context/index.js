import { createContext, useEffect, useState, useContext } from "react";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {

    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isDropdownVisible1, setDropdownVisible1] = useState(false);
    const [isDropdownVisible2, setDropdownVisible2] = useState(false);
  
    const handleMouseEnter = () => {
      setDropdownVisible(true);
    };
  
    const handleMouseEnter1 = () => {
      setDropdownVisible1(true);
    };
  
    const handleMouseEnter2 = () => {
      setDropdownVisible2(true);
    };
  
    const handleMouseLeave = () => {
      setDropdownVisible(false);
    };
    const handleMouseLeave1 = () => {
      setDropdownVisible1(false);
    };
    const handleMouseLeave2 = () => {
      setDropdownVisible2(false);
    };


    return (
        <StateContext.Provider
          value={{
            handleMouseEnter,
            handleMouseEnter1,
            handleMouseEnter2,
            handleMouseLeave,
            handleMouseLeave1,
            handleMouseLeave2,
            isDropdownVisible,
            isDropdownVisible1,
            isDropdownVisible2

            }}
            >
                {children}
            </StateContext.Provider>
    );
        }

        export const useAuth=()=> {
            const context =useContext(StateContext);
            return context;
        };