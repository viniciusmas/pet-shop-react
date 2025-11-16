import { useEffect, useState } from "react";

const CLEAN_STATE = {
    id: "", nome: "", cpf: "", rg: "", dataNascimento: "", sexo: "", estadoCivil: "", telefone: "", email: "", cepConsulta: "",
};

export function AddFormCliente({ handleSave, cliente }) {
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
            ...cliente,
            id: cliente.id ?? ""
        });
    }, [cliente]);

    return (
        <>
            <fieldset className="fieldset border-base-300 rounded-box w-full border p-4">
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                    <input type="hidden" name="id" value={data.id}/>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="nome">Nome</label>
                            <input className="input input-bordered w-full" type="text" id="nome" name="nome"
                                   value={data.nome} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="cpf">CPF</label>
                            <input className="input input-bordered w-full" type="text" id="cpf" name="cpf"
                                   value={data.cpf} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="rg">RG</label>
                            <input className="input input-bordered w-full" type="text" id="rg" name="rg" value={data.rg}
                                   onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="dataNascimento">Data de Nascimento</label>
                            <input className="input input-bordered w-full" type="text" id="dataNascimento"
                                   name="dataNascimento" value={data.dataNascimento} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="sexo">Sexo</label>
                            <input className="input input-bordered w-full" type="text" id="sexo" name="sexo"
                                   value={data.sexo} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="estadoCivil">Estado Civil</label>
                            <input className="input input-bordered w-full" type="text" id="estadoCivil"
                                   name="estadoCivil" value={data.estadoCivil} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex gap-4 w-full">
                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="telefone">Telefone</label>
                            <input className="input input-bordered w-full" type="text" id="telefone" name="telefone"
                                   value={data.telefone} onChange={handleChange}/>
                        </div>

                        <div className="flex flex-col w-full">
                            <label className="label" htmlFor="email">Email</label>
                            <input className="input input-bordered w-full" type="text" id="email" name="email"
                                   value={data.email} onChange={handleChange}/>
                        </div>
                    </div>

                    <div className="flex flex-col w-full">
                        <label className="label" htmlFor="cepConsulta">CEP</label>
                        <input className="input input-bordered w-full" type="text" id="cepConsulta" name="cepConsulta"
                               value={data.cepConsulta == null ? data.endereco.cep : data.cepConsulta}
                               onChange={handleChange}/>
                    </div>

                    <input className="btn btn-primary w-full" type="submit" value="Salvar cliente"/>
                </form>
            </fieldset>
        </>
    );
}