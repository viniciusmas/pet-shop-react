import ApiAgendamento from "./api.jsx";
import { AddFormAgendamento } from "./form.jsx";
import { ListAgendamentos } from "./list.jsx";
import { useEffect, useState } from "react";
import {useAuth} from "../../auth/AuthContext.jsx";

const CLEAN_STATE_AGENDAMENTO = {
    cliente: "", pet: "", funcionario: "", servico: "", dataHora: "",
};

export function Agendamento() {
    const {token} = useAuth();
    const [agendamentos, setAgendamentos] = useState([]);
    const [agendamento, setAgendamento] = useState(CLEAN_STATE_AGENDAMENTO);

    async function saveAgendamento({ id, ...data }) {
        if (id) {
            const result = await ApiAgendamento.Update({ id, ...data, token });
            setAgendamentos((prev) => prev.map((c) => (c.id === result.id ? result : c))
            );
        } else {
            const result = await ApiAgendamento.Create({ ...data, token });
            setAgendamentos((prev) => [...prev, result]);
        }
    }

    async function removeAgendamento(id) {
        await ApiAgendamento.Delete(id, token);
        setAgendamentos((prev) => prev.filter((c) => c.id !== id));
    }

    async function GetListAgendamento(){
        const result = await ApiAgendamento.Read(token);
        setAgendamentos(result);
    }

    function editCallBack(id) {
        const agendamentoEdit = agendamentos.find((agendamento) => agendamento.id === id);

        if (agendamentoEdit) {
            setAgendamento(agendamentoEdit);
        } else {
            console.error("Agendamento não encontrado");
        }
    }

/*    useEffect(() => {
        GetListAgendamento();
    }, []);*/

    return (
        <>
            <AddFormAgendamento handleSave={saveAgendamento} agendamento={agendamento} />
            {/*<ListAgendamentos agendamentos={agendamentos} handleDelete={removeAgendamento} handleEdit={editCallBack} />*/}
        </>
    )
}