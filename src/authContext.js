import { createContext } from "react";

const authContext = createContext({
    authenticated: false, // to check if authenticated or not
    user: {}, // store all user details
    accessToken: "", // 
    initiateLogin: () => {}, // start login process
    handleAuthentication: () => {}, //handle Auth0 login process
    logout: () => {} // logout user
})

export const AuthProvider = authContext.Provider;
export const AuthConsumer = authContext.Consumer;