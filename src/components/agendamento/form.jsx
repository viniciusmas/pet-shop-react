import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const CLEAN_STATE_AGENDAMENTO = {
    cliente: "", pet: "", funcionario: "", servico: "", dataHora: "",
};

export function AddFormAgendamento({ handleSave, agendamento }) {

    const [data, setData] = useState(CLEAN_STATE_AGENDAMENTO);

    function handleSubmit(event) {
        event.preventDefault();

        try {
            handleSave(data);
            setData(CLEAN_STATE_AGENDAMENTO);
            //alert("Agendamento realizado com sucesso 🐾");
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
            cliente: agendamento.cliente ?? ""
        });
    }, [agendamento]);

    return (
        <>
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-16 gap-6">

                    <div className="form-control lg:col-span-3">
                        <label className="label font-medium" htmlFor="cliente">Nome do Tutor</label>
                        <input
                            type="text"
                            id="cliente"
                            name="cliente"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
                            value={data.cliente}
                        />
                    </div>

                    <div className="form-control lg:col-span-3">
                        <label className="label font-medium" htmlFor="pet">Nome do Pet</label>
                        <input
                            type="text"
                            id="pet"
                            name="pet"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
                            value={data.pet}
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="funcionario">Funcionário</label>
                        <input
                            id="funcionario"
                            name="funcionario"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
                            value={data.funcionario}
                        />
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

                    <div className="lg:col-span-4 flex justify-end gap-4 mt-4">
                        <Link to="/" className="btn btn-soft">Voltar para a página inicial</Link>
                        <button type="reset" className="btn btn-soft btn-secondary">Limpar</button>
                        <button type="submit" className="btn btn-soft btn-primary">Agendar</button>
                    </div>
                </form>
            </fieldset>
        </>
    );
}
