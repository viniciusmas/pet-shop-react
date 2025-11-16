import {createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
import {Funcionario} from "./components/funcionario/index.jsx";
import {Cliente} from "./components/cliente/index.jsx";
import {Pet} from "./components/pet/index.jsx";
import './App.css'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Menu/>,
        errorElement: <Page404/>,
        children: [
            {index: true, element: <PageCliente />},
            {path: "pet", element: <PagePet />},
            {path: "funcionario", element: <PageFuncionario />}
        ],
    },
]);

export default function App() {

    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

function Menu() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <a className="btn btn-ghost text-xl">Cadastro</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Cliente</Link>
                        </li>
                        <li>
                            <Link to="/pet">Pet</Link>
                        </li>
                        <li>
                            <Link to="/funcionario">Funcionário</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Logout</a>
                </div>
            </div>
            <Outlet />
        </>
    );
}

function PageCliente() {
    return (
        <>
            <Cliente />
        </>
    )
}

function PagePet() {
    return (
        <>
            <Pet />
        </>
    )
}

function PageFuncionario() {
    return (
        <>
            <Funcionario />
        </>
    )
}

function Page404() {
    return (
        <div>
            <h1>Pagina não encontrada</h1>
            <div>
                <Link to="/">pagina</Link>
            </div>
        </div>
    );
}