import {useEffect, useState} from "react";

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
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                    <input type="hidden" name="id" value={data.id} />
                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="nome">Nome</label>
                            <input className="input input-bordered w-full" type="text" id="nome" name="nome" value={data.nome} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="tipoEspecie">Tipo da Especie</label>
                            <select className="select select-bordered w-full" id="tipoEspecie" name="tipoEspecie"
                                    value={data.tipoEspecie} onChange={handleChange}>
                                <option value="">Selecionar</option>
                                <option value="CACHORRO">Cachorro</option>
                                <option value="GATO">Gato</option>
                            </select>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="raca">Raça</label>
                            <input className="input input-bordered w-full" type="text" id="raca" name="raca"
                                   value={data.raca} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="idade">Idade</label>
                            <input className="input input-bordered w-full" type="text" id="idade" name="idade"
                                   value={data.idade} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="peso">Peso</label>
                            <input className="input input-bordered w-full" type="text" id="peso" name="peso" value={data.peso} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="tutor">ID do tutor</label>
                            <input className="input input-bordered w-full" type="text" id="tutor" name="tutor" value={data.tutor.id} onChange={handleChange}/>
                        </div>
                    </div>

                    <input className="btn btn-primary w-full" type="submit" value="Adicionar pet"/>
                </form>
            </fieldset>
        </>
    )
}