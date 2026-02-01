import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {useAuth} from "../../auth/AuthContext.jsx";
import ApiCliente from "../cliente/api.jsx";
import ApiPet from "../pet/api.jsx";
import ApiFuncionario from "../funcionario/api.jsx";

const CLEAN_STATE_AGENDAMENTO = {
    cliente: "", pet: "", funcionario: "", servico: "", dataHora: "",
};

export function AddFormAgendamento({ handleSave, agendamento }) {

    const [data, setData] = useState(CLEAN_STATE_AGENDAMENTO);
    const [funcionario, setFuncionario] = useState("");
    const [funcionarios, setFuncionarios] = useState([]);
    const [cliente, setCliente] = useState("");
    const [clientes, setClientes] = useState([]);
    const [pet, setPet] = useState("");
    const [pets, setPets] = useState([]);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(null);
    const {token} = useAuth();

    function formatDate(dateStr) {
        if (!dateStr) return "";
        return dateStr.split("T")[0];
    }

    function handleSubmit(event) {
        event.preventDefault();
        setSuccess(false);
        setError(null);

        try {
            handleSave(data);
            setData(CLEAN_STATE_AGENDAMENTO);
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

    function handleChange({ target }) {
        const { name, value } = target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    function limparForm() {
        setData((CLEAN_STATE_AGENDAMENTO))
    }

    async function getFuncionarios() {
        const result = await ApiFuncionario.ListarFuncionarios(token);
        setFuncionarios(result);
    }

    async function getClientes() {
        const result = await ApiCliente.ListarClientes(token);
        setClientes(result);
    }

    async function getPets(cliente) {
        if (!cliente) {
            setPets([]);
            setPet("");
            return;
        }
        const result = await ApiPet.GetPetByIdCliente(cliente, token);
        setPets(result);
        setPet("");
    }

    useEffect(() => {
        setData({
            ...CLEAN_STATE_AGENDAMENTO,
            ...agendamento,
            id: agendamento.id ?? ""
        });
    }, [agendamento]);

    useEffect(() => {
        if (success || error) {
            const timer = setTimeout(() => {
                setSuccess(false);
                setError(null);
            }, 4000);

            return () => clearTimeout(timer);
        }
    }, [success, error]);

    useEffect(() => {
        getFuncionarios();
    }, []);

    useEffect(() => {
        getClientes();
    }, []);

    useEffect(() => {
        getPets(cliente);
    }, [cliente]);

    return (
        <>
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                {success && (
                    <div className="alert alert-success mb-4">
                        <span>Agendamento realizado com sucesso</span>
                    </div>
                )}
                {error && (
                    <div className="alert alert-error mb-4">
                        <span>{error}</span>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                    <input type="hidden" name="id" value={data.id}/>

                    <div className="form-control lg:col-span-3">
                        <label className="label font-medium" htmlFor="cliente">Nome do Cliente</label>
                        <select
                            id="cliente"
                            name="cliente"
                            className="select select-bordered w-full"
                            required
                            value={data.cliente}
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

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="pet">Nome do Pet</label>
                        <select
                            id="pet"
                            name="pet"
                            className="select select-bordered w-full"
                            required
                            disabled={!pets.length}
                            value={data.pet}
                            onChange={handleChange}
                            onBlur={(e) => setPet(e.target.value)}
                        >
                            <option value="">Selecione um pet</option>
                            {pets.map(pet => (
                                <option key={pet.id} value={pet.id}>
                                    {pet.nome} ({pet.raca})
                                </option>
                            ))}
                        </select>

                    </div>

                    <div className="form-control lg:col-span-3">
                        <label className="label font-medium" htmlFor="funcionario">Funcionário</label>
                        <select
                            id="funcionario"
                            name="funcionario"
                            className="select select-bordered w-full"
                            required
                            value={data.funcionario}
                            onChange={handleChange}
                            onBlur={(e) => setFuncionario(e.target.value)}
                        >
                            <option value="">Selecione um funcionário</option>
                            {funcionarios.map(funcionario => (
                                <option key={funcionario.id} value={funcionario.id}>
                                    {funcionario.nome}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="servico">Serviço</label>
                        <select
                            id="servico"
                            name="servico"
                            className="select select-bordered w-full"
                            required
                            onChange={handleChange}
                            value={data.servico}
                        >
                            <option value="">Selecione</option>
                            <option value="BANHO">Banho</option>
                            <option value="TOSA">Tosa</option>
                            <option value="BANHO_TOSA">Banho & Tosa</option>
                        </select>
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="data">Data</label>
                        <input
                            id="dataHora"
                            name="dataHora"
                            type="datetime-local"
                            onChange={handleChange}
                            value={data.dataHora}
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="lg:col-span-12 flex justify-end gap-4 mt-4">
                        <Link to="/" className="btn btn-soft">Voltar para a página inicial</Link>
                        <button type="button" className="btn btn-soft btn-secondary" onClick={limparForm}>Limpar</button>
                        <button type="submit" className="btn btn-soft btn-primary">Agendar</button>
                    </div>
                </form>
            </fieldset>
        </>
    );
}
