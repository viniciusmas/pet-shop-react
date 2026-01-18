import ApiFuncionario from "../funcionario/api.jsx";
import {AddFormFuncionario} from "./form.jsx";
import {ListFuncionarios} from "./list.jsx";
import {useEffect, useState} from "react";
import {useAuth} from "../../auth/AuthContext.jsx";

const CLEAN_STATE_FUNCIONARIO = {
    id: "", nome: "", cpf: "", rg: "", dataNascimento: "", sexo: "", estadoCivil: "", telefone: "", email: "",
    cargo: "", salario: "", bonus: "", cepConsulta: ""
};

export function Funcionario() {

    const {token} = useAuth();
    const [funcionarios, setFuncionarios] = useState([]);
    const [funcionario, setFuncionario] = useState(CLEAN_STATE_FUNCIONARIO);

    async function saveFuncionario({ id, ...data }) {
        if (id) {
            const result = await ApiFuncionario.Update({ id, ...data, token });
            setFuncionarios((prev) => prev.map((f) => (f.id === result.id ? result : f))
            );
        } else {
            const result = await ApiFuncionario.Create({ ...data, token });
            setFuncionarios((prev) => [...prev, result]);
        }
    }

    async function removeFuncionario(id) {
        await ApiFuncionario.Delete(id, token);
        setFuncionarios((prev) => prev.filter((f) => f.id !== id));
    }

    async function GetListFuncionario(){
        const result = await ApiFuncionario.Read(token);
        setFuncionarios(result);
    }

    function editCallBack(id) {
        const funcionarioEdit = funcionarios.find((funcionario) => funcionario.id === id);

        if (funcionarioEdit) {
            setFuncionario(funcionarioEdit);
        } else {
            console.error("Funcionario não encontrado");
        }
    }

    useEffect(() => {
        GetListFuncionario();
    }, []);

    return (
        <>
            <AddFormFuncionario handleSave={saveFuncionario} funcionario={funcionario} />
            <ListFuncionarios funcionarios={funcionarios} handleDelete={removeFuncionario} handleEdit={editCallBack} />
        </>
    )
}