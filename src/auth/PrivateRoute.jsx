import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./AuthContext";

export function PrivateRoute() {
    const { authenticated } = useAuth();

    if (!authenticated) {
        return (
            <div className="flex h-screen items-center justify-center bg-base-200">
                <div className="card w-80 bg-base-100 shadow-xl">
                    <div className="card-body items-center text-center gap-4">
                        <span className="loading loading-spinner loading-lg text-primary"></span>
                        <h2 className="card-title text-lg">
                            Carregando sistema
                        </h2>
                    </div>
                </div>
            </div>
        );
    }

    return authenticated ? <Outlet /> : <Navigate to="/login" />;
}