import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {useAuth} from "../auth/AuthContext.jsx";

export default function Login() {
    const navigate = useNavigate();
    const { authenticated } = useAuth();

    useEffect(() => {
        if (authenticated) {
            navigate("/", { replace: true });
        }
    }, [authenticated]);

    return <div className="flex h-screen items-center justify-center bg-base-200">
        <div className="card w-80 bg-base-100 shadow-xl">
            <div className="card-body items-center text-center gap-4">
                <span className="loading loading-spinner loading-lg text-primary"></span>
                <h2 className="card-title text-lg">
                    Login...
                </h2>
            </div>
        </div>
    </div>;
}
