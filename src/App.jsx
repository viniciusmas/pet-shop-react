import {createBrowserRouter, RouterProvider, Outlet, Link} from "react-router-dom";
import {Funcionario} from "./components/funcionario/index.jsx";
import {Cliente} from "./components/cliente/index.jsx";
import {PrivateRoute} from "./auth/PrivateRoute.jsx";
import {Pet} from "./components/pet/index.jsx";
import Login from "./components/login.jsx";
import './App.css'
import Menu from "./components/menu.jsx";
import Erro404 from "./components/404.jsx";
import Index from "./components/index.jsx";
import Agendar from "./components/agendamento/agendar.jsx";

export const router = createBrowserRouter([
    {
        path: "/login",
        element: <PageLogin />,
    },
    {
        path: "/",
        element: <PrivateRoute />,
        errorElement: <Page404 />,
        children: [
            {
                element: <PageMenu />,
                children: [
                    { index: true, element: <PageIndex /> },
                    { path: "cliente", element: <PageCliente /> },
                    { path: "pet", element: <PagePet /> },
                    { path: "funcionario", element: <PageFuncionario /> },
                    { path: "agendar", element: <PageAgendar /> },
                ],
            },
        ],
    },
]);

function PageMenu() {
    return (
        <>
            <Menu />
        </>
    );
}

function PageLogin() {
    return (
        <>
            <Login />
        </>
    )
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
       <>
           <Erro404 />
       </>
    )
}

function PageIndex() {
    return (
        <>
            <Index />
        </>
    );
}

function PageAgendar() {
    return (
        <>
            <Agendar />
        </>
    )
}