import {Link, Outlet} from "react-router-dom";
import {useAuth} from "../auth/AuthContext";

export default function Menu() {
    const {user, logout} = useAuth();

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-4">
                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Cadastro</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <Link to="/cliente">Cliente</Link>
                        </li>
                        <li>
                            <Link to="/pet">Pet</Link>
                        </li>
                        <li>
                            <Link to="/funcionario">Funcionário</Link>
                        </li>
                    </ul>
                </div>

                <div className="dropdown dropdown-hover">
                    <div tabIndex={0} role="button" className="btn m-1">Agendamento</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li>
                            <Link to="/agendamento">Agendar Serviços</Link>
                        </li>
                    </ul>
                </div>


                <div className="navbar-end flex items-center gap-3 fixed top-4 right-4 z-50">
                    {user && (
                        <div className="text-right text-sm leading-tight">
                            <div className="font-semibold">
                                {user.name || user.username}
                            </div>
                            <div className="text-xs opacity-60">
                                {user.email}
                            </div>
                        </div>
                    )}
                    <button className="btn btn-outline btn-sm" onClick={logout}>Logout</button>
                </div>
            </div>

            <div className="p-4">
                <Outlet/>
            </div>
        </>
    );
}
