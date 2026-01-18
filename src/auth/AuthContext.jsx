import { createContext, useContext, useEffect, useState } from "react";
import keycloak, { initKeycloak } from "./keycloak.jsx";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    const [authenticated, setAuthenticated] = useState(null);
    const [token, setToken] = useState(null);
    const [user, setUser] = useState(null);

    useEffect(() => {
        initKeycloak().then((auth) => {
            setAuthenticated(auth);
            setToken(keycloak.token);

            if (auth) {
                setUser({
                    username: keycloak.tokenParsed?.preferred_username,
                    name: keycloak.tokenParsed?.name,
                    email: keycloak.tokenParsed?.email,
                });
            }
        });
    }, []);

    function logout() {
        keycloak.logout({
            redirectUri: window.location.origin + "/login",
        });
    }

    if (authenticated === null) {
        return <div className="flex h-screen items-center justify-center bg-base-200">
            <div className="card w-80 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center gap-4">
                    <span className="loading loading-spinner loading-lg text-primary"></span>
                    <h2 className="card-title text-lg">
                        Carregando sistema
                    </h2>
                </div>
            </div>
        </div>;
    }

    return (
        <AuthContext.Provider
            value={{
                authenticated,
                token,
                user,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
