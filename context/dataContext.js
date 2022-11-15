import { createContext, useContext, useMemo, useState } from "react";

export const AppContext = createContext();

export function AppWrapper ({children}){
    const [dataState, setDataState] = useState(null);

    const valueProvider = useMemo(() =>{
        return {dataState, setDataState};
    },[dataState, setDataState]);

    return(
        <AppContext.Provider value={valueProvider}>
            {children}
        </AppContext.Provider>
    )
}

export function useAppContext() {
    return useContext(AppContext)
}

