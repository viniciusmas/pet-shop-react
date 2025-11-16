export function ListFuncionarios({ funcionarios = [], handleDelete, handleEdit }) {

    function Item({ id, nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, endereco, cargo, salario, bonus, handleDelete, handleEdit }) {

        return (
            <tr>
                <th className="w-12">{id}</th>
                <td className="w-40">{nome}</td>
                <td className="w-32">{cpf}</td>
                <td className="w-24">{rg}</td>
                <td className="w-36">{dataNascimento}</td>
                <td className="w-20">{sexo}</td>
                <td className="w-32">{estadoCivil}</td>
                <td className="w-32">{telefone}</td>
                <td className="w-48">{email}</td>
                <td className="w-48">{endereco.cep}</td>
                <td className="w-48">{cargo}</td>
                <td className="w-48">{salario}</td>
                <td className="w-48">{bonus}</td>
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
                        <th className="w-40">Nome</th>
                        <th className="w-32">CPF</th>
                        <th className="w-24">RG</th>
                        <th className="w-36">Data de Nascimento</th>
                        <th className="w-20">Sexo</th>
                        <th className="w-32">Estado Civil</th>
                        <th className="w-32">Telefone</th>
                        <th className="w-48">Email</th>
                        <th className="w-48">CEP</th>
                        <th className="w-48">Cargo</th>
                        <th className="w-48">Salário</th>
                        <th className="w-48">Bônus</th>
                        <th className="w-24"></th>
                    </tr>
                    </thead>
                </table>
            </div>

            <div className="overflow-y-auto max-h-80 overflow-x-auto">
                <table className="table table-xs w-full">
                    <tbody>
                    {funcionarios.map((funcionario) => (
                        <Item
                            key={funcionario.id}
                            {...funcionario}
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