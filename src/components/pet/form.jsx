import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const CLEAN_STATE = {
    id: "", nome: "", tipoEspecie: "", raca: "", idade: "", peso: "", tutor: ""
};

export function AddFormPet({ handleSave, pet }) {
    const [data, setData] = useState(CLEAN_STATE);

    function handleSubmit(event) {
        event.preventDefault();

        try {
            handleSave(data);
            setData(CLEAN_STATE);
        } catch (error) {
            console.log("Não foi possível salvar", error);
        }
    }

    function handleChange({ target }) {
        const { name, value } = target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    useEffect(() => {
        setData({
            ...CLEAN_STATE,
            ...pet,
            id: pet.id ?? ""
        });
    }, [pet]);

    return (
        <>
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-8 gap-6">
                    <input type="hidden" name="id" value={data.id}/>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="nome">Nome</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="nome"
                            name="nome"
                            value={data.nome}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="tipoEspecie">Tipo da Especie</label>
                        <select
                            className="select select-bordered w-full"
                            id="tipoEspecie"
                            name="tipoEspecie"
                            value={data.tipoEspecie}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecionar</option>
                            <option value="CACHORRO">Cachorro</option>
                            <option value="GATO">Gato</option>
                        </select>
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="raca">Raça</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="raca"
                            name="raca"
                            value={data.raca}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="idade">Idade</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="idade"
                            name="idade"
                            value={data.idade}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="peso">Peso</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="peso"
                            name="peso"
                            value={data.peso}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="tutor">ID do tutor</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="tutor"
                            name="tutor"
                            value={data.tutor.id}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="lg:col-span-4 flex justify-end gap-4 mt-4">
                        <Link to="/" className="btn btn-soft">Voltar para a página inicial</Link>
                        <button type="reset" className="btn btn-soft btn-secondary">Limpar</button>
                        <input className="btn btn-soft btn-primary" type="submit" value="Salvar pet"/>
                    </div>
                </form>
            </fieldset>
        </>
    )
}