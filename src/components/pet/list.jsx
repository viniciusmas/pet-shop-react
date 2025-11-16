export function ListPets({ pets = [], handleDelete, handleEdit }) {

    function Item({ id, nome, tipoEspecie, raca, idade, peso, tutor, handleDelete, handleEdit }) {

        return (
            <tr>
                <th className="w-12">{id}</th>
                <td className="w-40">{nome}</td>
                <td className="w-32">{tipoEspecie}</td>
                <td className="w-24">{raca}</td>
                <td className="w-36">{idade}</td>
                <td className="w-20">{peso}</td>
                <td className="w-32">{tutor.nome}</td>
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
                        <th className="w-32">Tipo de Especie</th>
                        <th className="w-24">Raça</th>
                        <th className="w-36">Idade</th>
                        <th className="w-20">Peso</th>
                        <th className="w-32">Tutor</th>
                        <th className="w-24"></th>
                    </tr>
                    </thead>
                </table>
            </div>

            <div className="overflow-y-auto max-h-80 overflow-x-auto">
                <table className="table table-xs w-full">
                    <tbody>
                    {pets.map((pet) => (
                        <Item
                            key={pet.id}
                            {...pet}
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