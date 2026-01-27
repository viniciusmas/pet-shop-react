import { Link } from "react-router-dom";
import {Users, PawPrint, Briefcase, CalendarClock} from "lucide-react";

export default function Index() {
    return (
        <div className="p-6 max-w-7xl mx-auto">

            <div className="mb-8">
                <h1 className="text-3xl font-bold">Dashboard</h1>
                <p className="text-base-content/70">
                    Bem-vindo ao sistema Pet Shop
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Link to="/cliente">
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer">
                        <div className="card-body items-center text-center">
                            <Users size={40} className="text-primary" />
                            <h2 className="card-title">Clientes</h2>
                            <p className="text-sm opacity-70">
                                Gerencie os clientes do sistema
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/pet">
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer">
                        <div className="card-body items-center text-center">
                            <PawPrint size={40} className="text-secondary" />
                            <h2 className="card-title">Pets</h2>
                            <p className="text-sm opacity-70">
                                Controle e cadastro de pets
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/funcionario">
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer">
                        <div className="card-body items-center text-center">
                            <Briefcase size={40} className="text-accent" />
                            <h2 className="card-title">Funcionários</h2>
                            <p className="text-sm opacity-70">
                                Gestão da equipe
                            </p>
                        </div>
                    </div>
                </Link>

                <Link to="/agendar">
                    <div className="card bg-base-100 shadow-md hover:shadow-xl transition cursor-pointer">
                        <div className="card-body items-center text-center">
                            <CalendarClock size={40} className="text-warning" />
                            <h2 className="card-title">Agendar</h2>
                            <p className="text-sm opacity-70">
                                Agendamento de serviços
                            </p>
                        </div>
                    </div>
                </Link>
            </div>

            <div className="mt-10 text-center text-sm opacity-60">
                © {new Date().getFullYear()} Pet Shop • Sistema de Gestão
            </div>
        </div>
    );
}