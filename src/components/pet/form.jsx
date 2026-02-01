import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext.jsx";
import ApiCliente from "../cliente/api.jsx";

const CLEAN_STATE_PET = {
    id: "", nome: "", tipoEspecie: "", raca: "", idade: "", peso: "", tutor: ""
};

export function AddFormPet({ handleSave, pet }) {

    const [data, setData] = useState(CLEAN_STATE_PET);
    const [cliente, setCliente] = useState("");
    const [clientes, setClientes] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const {token} = useAuth();

    function handleSubmit(event) {
        event.preventDefault();
        setSuccess(false);
        setError(null);

        try {
            handleSave(data);
            setData(CLEAN_STATE_PET);
            setSuccess(true);
        } catch (error) {
            console.log("Erro ao salvar:", error);

            let mensagem = "Erro ao realizar o agendamento";

            if (error.message) {
                mensagem = err.message;
            }
            setError(mensagem);
        }
    }

    function limparForm() {
        setData((CLEAN_STATE_PET))
    }

    function handleChange({ target }) {
        const { name, value } = target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    async function getClientes() {
        const result = await ApiCliente.ListarClientes(token);
        setClientes(result);
    }

    useEffect(() => {
        setData({
            ...CLEAN_STATE_PET,
            ...pet,
            id: pet.id ?? ""
        });
    }, [pet]);

    useEffect(() => {
        getClientes();
    }, []);

    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setSuccess(false);
                setError(null);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [success, error]);

    return (
        <>
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                {success && (
                    <div className="alert alert-success mb-4">
                        <span>Pet salvo com sucesso</span>
                    </div>
                )}
                {error && (
                    <div className="alert alert-error mb-4">
                        <span>{error}</span>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-8 gap-6">
                    <input type="hidden" name="id" value={data.id}/>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="nome">Nome do Pet</label>
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
                        <label className="label font-medium" htmlFor="tutor">Cliente</label>
                        <select
                            id="tutor"
                            name="tutor"
                            className="select select-bordered w-full"
                            required
                            value={data.tutor.id}
                            onChange={handleChange}
                            onBlur={(e) => setCliente(e.target.value)}
                        >
                            <option value="">Selecione um cliente</option>
                            {clientes.map(cliente => (
                                <option key={cliente.id} value={cliente.id}>
                                    {cliente.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="lg:col-span-4 flex justify-end gap-4 mt-4">
                        <Link to="/" className="btn btn-soft">Voltar para a página inicial</Link>
                        <button type="button" className="btn btn-soft btn-secondary" onClick={limparForm}>Limpar</button>
                        <input className="btn btn-soft btn-primary" type="submit" value="Salvar pet"/>
                    </div>
                </form>
            </fieldset>
        </>
    )
}