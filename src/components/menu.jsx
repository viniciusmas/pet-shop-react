import {Link, Outlet} from "react-router-dom";
import {useAuth} from "../auth/AuthContext";

export default function Menu() {
    const {user, logout} = useAuth();

    return (
        <>
            <div className="navbar bg-base-100 shadow-sm px-4">
                <div className="navbar-start">
                    <span className="btn btn-ghost text-xl cursor-default">Cadastro</span>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-1">
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

                <div className="navbar-end flex items-center gap-3">
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
