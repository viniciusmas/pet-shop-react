import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export default function Erro404() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-base-200">
            <div className="card w-full max-w-md bg-base-100 shadow-xl">
                <div className="card-body text-center gap-4">
                    <AlertTriangle className="mx-auto h-16 w-16 text-warning"/>
                    <h1 className="text-7xl font-bold text-primary">404</h1>
                    <h2 className="text-2xl font-semibold">
                        Página não encontrada
                    </h2>
                    <p className="text-base-content/70">
                        A página que você tentou acessar não existe ou foi movida.
                    </p>
                    <div className="card-actions justify-center mt-4">
                        <Link to="/" className="btn btn-primary">
                            Voltar para a página inicial
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
