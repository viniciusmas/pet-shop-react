import { useState } from "react";
import {Link} from "react-router-dom";

const CLEAN_STATE_AGENDAMENTO = {
    pet: "", cliente: "", servico: "", data: "", hora: "", funcionario: "",
};

export function AddFormCliente({ handleSave, agendamento }) {

    const [data, setData] = useState(CLEAN_STATE_AGENDAMENTO);

    function handleSubmit(event) {
        event.preventDefault();

        try {
            handleSave(data);
            setData(CLEAN_STATE_CLIENTE);
            alert("Agendamento realizado com sucesso 🐾");
        } catch (error) {
            console.log("Não foi possível salvar", error);
        }
    }

    function handleChange({ target }) {
        const { name, value } = target;
        setData((prev) => ({ ...prev, [name]: value }));
    }

    function formatDate(dateStr) {
        if (!dateStr) return "";
        return dateStr.split("T")[0];
    }

    useEffect(() => {
        setData({
            ...CLEAN_STATE_AGENDAMENTO,
            ...agendamento,
            id: agendamento.id ?? ""
        });
    }, [agendamento]);

    return (
        <>
            <div className="min-h-screen bg-base-200 p-8">
                <div className="bg-base-100 rounded-xl shadow-lg p-8">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-4 gap-6">

                        <div className="form-control lg:col-span-2">
                            <label className="label font-medium">Nome do Pet</label>
                            <input
                                type="text"
                                name="nomePet"
                                className="input input-bordered w-full"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control lg:col-span-2">
                            <label className="label font-medium">Nome do Tutor</label>
                            <input
                                type="text"
                                name="tutor"
                                className="input input-bordered w-full"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control lg:col-span-2">
                            <label className="label font-medium">Serviço</label>
                            <select
                                name="servico"
                                className="select select-bordered w-full"
                                required
                                onChange={handleChange}
                            >
                                <option value="">Selecione</option>
                                <option>Banho</option>
                                <option>Tosa</option>
                                <option>Banho & Tosa</option>
                                <option>Consulta Veterinária</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label font-medium">Data</label>
                            <input
                                type="date"
                                name="data"
                                className="input input-bordered w-full"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control">
                            <label className="label font-medium">Horário</label>
                            <input
                                type="time"
                                name="horario"
                                className="input input-bordered w-full"
                                required
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-control lg:col-span-4">
                            <label className="label font-medium">Observações</label>
                            <textarea
                                name="observacoes"
                                className="textarea textarea-bordered w-full min-h-[120px]"
                                placeholder="Ex: pet agitado, alergias, etc"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="lg:col-span-4 flex justify-end gap-4 mt-4">
                            <Link to="/" className="btn btn-soft">Voltar para a página inicial</Link>
                            <button type="reset" className="btn btn-soft btn-secondary">Limpar</button>
                            <button type="submit" className="btn btn-soft btn-primary">Agendar</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
