export function ListAgendamentos({ agendamentos = [], handleDelete, handleEdit }) {

    function formatDateTime(dateStr) {
        if (!dateStr) return "";
        const date = new Date(dateStr);
        const dia = String(date.getDate()).padStart(2, "0");
        const mes = String(date.getMonth() + 1).padStart(2, "0");
        const ano = date.getFullYear();
        const hora = String(date.getHours()).padStart(2, "0");
        const minuto = String(date.getMinutes()).padStart(2, "0");
        return `${dia}/${mes}/${ano} ${hora}:${minuto}`;
    }

    function Item({id, cliente, pet, funcionario, servico, dataHora, status, handleDelete, handleEdit }) {
        return (
            <tr>

                <td className="w-10">{id}</td>
                <td className="w-30">{cliente}</td>
                <th className="w-38">{pet}</th>
                <td className="w-30">{funcionario}</td>
                <td className="w-20">{servico}</td>
                <td className="w-32">{formatDateTime(dataHora)}</td>
                <td className="w-28">{status}</td>
                <td className="w-24">
                    <button className="btn btn-ghost btn-xs" onClick={() => handleDelete(id)}>Deletar</button>
                    <button className="btn btn-ghost btn-xs" onClick={() => handleEdit(id)}>Editar</button>
                </td>
            </tr>
        );
    }

    return (
        <div className="w-full">
            <div className="overflow-x-auto">
                <table className="table table-xs w-full">
                    <thead className="bg-base-200 sticky top-0 z-10">
                    <tr>
                        <th className="w-12"></th>
                        <th className="w-32">Cliente</th>
                        <th className="w-40">Pet</th>
                        <th className="w-32">Funcionário</th>
                        <th className="w-24">Serviço</th>
                        <th className="w-36">Data</th>
                        <th className="w-32">Status</th>
                        <th className="w-24"></th>
                    </tr>
                    </thead>
                </table>
            </div>

            <div className="overflow-y-auto max-h-80 overflow-x-auto">
                <table className="table table-xs w-full">
                    <tbody>
                    {agendamentos.map((agendamento) => (
                        <Item
                            key={agendamento.id}
                            {...agendamento}
                            handleDelete={handleDelete}
                            handleEdit={handleEdit}
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}