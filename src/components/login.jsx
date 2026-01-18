import { useAuth } from "../auth/AuthContext";

export default function Login() {
    const { login } = useAuth();

    return (
        <div className="flex h-screen items-center justify-center">
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="card-title justify-center">Login</h2>

                    <button className="btn btn-primary w-full" onClick={login}>
                        Entrar
                    </button>
                </div>
            </div>
        </div>
    );
}