import { createContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider=({children})=>{
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userRole, setUserRole] = useState("job_seeker");

    return(
        <AuthContext.Provider value={{isLoggedIn , setIsLoggedIn, userRole, setUserRole}}>
            {children}
        </AuthContext.Provider>
    )
}