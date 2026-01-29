import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import {InputMask} from "@react-input/mask";

const CLEAN_STATE_AGENDAMENTO = {
    pet: "", cliente: "", servico: "", data: "", hora: "", funcionario: "",
};

export function AddFormAgendamento({ handleSave, agendamento }) {

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
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-8 gap-6">

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="pet">Nome do Pet</label>
                        <input
                            type="text"
                            id="pet"
                            name="pet"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="cliente">Nome do Tutor</label>
                        <input
                            type="text"
                            id="cliente"
                            name="cliente"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
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
                        >
                            <option value="">Selecione</option>
                            <option>Banho</option>
                            <option>Tosa</option>
                            <option>Banho & Tosa</option>
                            <option>Consulta Veterinária</option>
                        </select>
                    </div>

                    <div className="form-control">
                        <label className="label font-medium" htmlFor="data">Data</label>
                        <InputMask
                            mask="__/__/____"
                            replacement={{_: /\d/}}
                            value={formatDate(data.data)}
                            onChange={handleChange}
                            id="data"
                            name="data"
                            className="input input-bordered w-full"
                        />
                    </div>

                    <div className="form-control">
                        <label className="label font-medium" htmlFor="horario">Horário</label>
                        <input
                            type="time"
                            id="horario"
                            name="horario"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control lg:col-span-4">
                        <label className="label font-medium" htmlFor="funcionario">Funcionário</label>
                        <input
                            name="funcionario"
                            id="funcionario"
                            className="input input-bordered w-full"
                            required
                            onChange={handleChange}
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
