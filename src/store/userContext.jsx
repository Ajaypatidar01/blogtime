import { createContext, useState } from "react";

const UserContext = createContext();

function ContextProvider({children}) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const user = {
        isLoggedIn,
        setIsLoggedIn
    }
    return(
        <UserContext.Provider value={user}>
            {children}
        </UserContext.Provider>
    );
}

export default UserContext;
export {ContextProvider} ;