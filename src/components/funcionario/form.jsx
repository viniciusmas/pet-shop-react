import { InputMask } from "@react-input/mask";
import { useEffect, useState } from "react";
import {Link} from "react-router-dom";

const CLEAN_STATE_FUNCIONARIO = {
    id: "", nome: "", cpf: "", rg: "", dataNascimento: "", sexo: "", estadoCivil: "", telefone: "", email: "",
    cargo: "", salario: "", bonus: "", cepConsulta: ""
};

export function AddFormFuncionario({ handleSave, funcionario }) {

    const [data, setData] = useState(CLEAN_STATE_FUNCIONARIO);

    function handleSubmit(event) {
        event.preventDefault();

        try {
            handleSave(data);
            setData(CLEAN_STATE_FUNCIONARIO);
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
            ...CLEAN_STATE_FUNCIONARIO,
            ...funcionario,
            id: funcionario.id ?? ""
        });
    }, [funcionario]);

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
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="cpf">CPF</label>
                        <InputMask
                            mask="___.___.___-__"
                            replacement={{_: /\d/}}
                            value={data.cpf}
                            onChange={handleChange}
                            id="cpf"
                            name="cpf"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="rg">RG</label>
                        <InputMask
                            mask="___.___.___"
                            replacement={{_: /\d/}}
                            value={data.rg}
                            onChange={handleChange}
                            id="rg"
                            name="rg"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="dataNascimento">Data de Nascimento</label>
                        <InputMask
                            mask="__/__/____"
                            replacement={{_: /\d/}}
                            value={formatDate(data.dataNascimento)}
                            onChange={handleChange}
                            id="dataNascimento"
                            name="dataNascimento"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="sexo">Sexo</label>
                        <select
                            className="select select-bordered w-full"
                            id="sexo"
                            name="sexo"
                            value={data.sexo}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecionar</option>
                            <option value="Masculino">Masculino</option>
                            <option value="Feminino">Feminino</option>
                            <option value="Outro">Outro</option>
                        </select>
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="estadoCivil">Estado Civil</label>
                        <select
                            className="select select-bordered w-full"
                            id="estadoCivil"
                            name="estadoCivil"
                            value={data.estadoCivil}
                            onChange={handleChange}
                            required
                        >
                            <option value="">Selecionar</option>
                            <option value="Solteiro">Solteiro</option>
                            <option value="Solteira">Solteira</option>
                            <option value="Casado">Casado</option>
                            <option value="Casada">Casada</option>
                            <option value="Divorciado">Divorciado</option>
                            <option value="Divorciada">Divorciada</option>
                            <option value="Viuvo">Viúvo</option>
                            <option value="Viuva">Viúva</option>
                        </select>
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="telefone">Telefone</label>
                        <InputMask
                            mask="(__) _____-____"
                            replacement={{_: /\d/}}
                            value={data.telefone}
                            onChange={handleChange}
                            id="telefone"
                            name="telefone"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="email">Email</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="email"
                            name="email"
                            value={data.email}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="cepConsulta">CEP</label>
                        <InputMask
                            mask="_____-___"
                            replacement={{_: /\d/}}
                            value={data.cepConsulta == null ? data.endereco.cep : data.cepConsulta}
                            onChange={handleChange}
                            id="cepConsulta"
                            name="cepConsulta"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="cargo">Cargo</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="cargo"
                            name="cargo"
                            value={data.cargo}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="salario">Salario</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="salario"
                            name="salario"
                            value={data.salario}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form-control lg:col-span-2">
                        <label className="label font-medium" htmlFor="bonus">Bonus</label>
                        <input
                            className="input input-bordered w-full"
                            type="text"
                            id="bonus"
                            name="bonus"
                            value={data.bonus}
                            required
                            onChange={handleChange}
                        />
                    </div>

                    <div className="lg:col-span-8 flex justify-end gap-6 mt-4">
                        <Link to="/" className="btn btn-soft">Voltar para a página inicial</Link>
                        <button type="reset" className="btn btn-soft btn-secondary">Limpar</button>
                        <input className="btn btn-soft btn-primary" type="submit" value="Salvar funcionário"/>
                    </div>
                </form>
            </fieldset>
        </>
    );
}