import ApiCliente from "./api.jsx";
import { AddFormCliente } from "./form.jsx";
import { ListClientes } from "./list.jsx";
import { useEffect, useState } from "react";

const CLEAN_STATE = {
    id: "", nome: "", cpf: "", rg: "", dataNascimento: "", sexo: "", estadoCivil: "", telefone: "", email: "", cepConsulta: "",
};

export function Cliente() {

    const [clientes, setClientes] = useState([]);
    const [cliente, setCliente] = useState(CLEAN_STATE);

    async function saveCliente({ id, ...data }) {
        if (id) {
            const result = await ApiCliente.Update({ id, ...data });
            setClientes((prev) => prev.map((c) => (c.id === result.id ? result : c))
            );
        } else {
            const result = await ApiCliente.Create({ ...data });
            setClientes((prev) => [...prev, result]);
        }
    }

    async function removeCliente(id) {
        await ApiCliente.Delete(id);
        setClientes((prev) => prev.filter((c) => c.id !== id));
    }

    async function GetListCliente(){
        const result = await ApiCliente.Read();
        setClientes(result);
    }

    function editCallBack(id) {
        const clienteEdit = clientes.find((cliente) => cliente.id === id);

        if (clienteEdit) {
            setCliente(clienteEdit);
        } else {
            console.error("Cliente não encontrado");
        }
    }

    useEffect(() => {
        GetListCliente();
    }, []);

    return (
        <>
            <AddFormCliente handleSave={saveCliente} cliente={cliente} />
            <ListClientes clientes={clientes} handleDelete={removeCliente} handleEdit={editCallBack} />
        </>
    )
}