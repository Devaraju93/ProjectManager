/* eslint-disable @typescript-eslint/no-unused-vars */

"use client"

import { createContext, useContext, useState } from "react";

// setting the structure of the context
type AppType  = {
    openSideBarObject: {
        openSidebar: boolean,
        setOpenSidebar: React.Dispatch<React.SetStateAction<boolean>>   
    }
 
}

// setting the default State
const defaultState: AppType = {
    openSideBarObject: {openSidebar: false, setOpenSidebar: () => {}}
}

// creating the context
const ContextApp = createContext<AppType>(defaultState);

// creating the provider
export default function ContextAppProvider({children}: {children: React.ReactNode}) {
    const [openSidebar, setOpenSidebar] = useState(false);
    return (
        <ContextApp.Provider 
        value={{openSideBarObject: {openSidebar, setOpenSidebar}}}>
            {children}
        </ContextApp.Provider>
    )
    
}

export function useContextApp() {
    return useContext(ContextApp);
}