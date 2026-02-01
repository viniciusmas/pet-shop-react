export default class ApiFuncionario {
    static base = "http://localhost:8081/api/funcionarios";

    static async CriarFuncionario({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cargo, salario, bonus, cepConsulta, token }) {

        const payload = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: formatDate(dataNascimento),
            sexo: sexo,
            estadoCivil: estadoCivil,
            telefone: telefone,
            email: email,
            cargo: cargo,
            salario: salario,
            bonus: bonus,
            cepConsulta: cepConsulta,
        };

        const response = await fetch(this.base, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }

    static async ListarFuncionarios(token) {
        const response = await fetch(this.base,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    }

    static async AtualizarFuncionario({ id, nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cargo, salario, bonus, cepConsulta, token }) {

        const payload = {
            nome: nome,
            cpf: cpf,
            rg: rg,
            dataNascimento: formatDate(dataNascimento),
            sexo: sexo,
            estadoCivil: estadoCivil,
            telefone: telefone,
            email: email,
            cargo: cargo,
            salario: salario,
            bonus: bonus,
            cepConsulta: cepConsulta,
        };

        const response = await fetch(`${this.base}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }

    static async DeletarFuncionario(id, token) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar funcionario");
        }

        if (response.status === 204) {
            return true;
        }
    }

    static async Get(id) {
        const response = await fetch(`${this.base}/${id}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${this.token}`
            }
        });
        return await response.json();
    }
}

function formatDate(dateStr) {
    if (!dateStr) return "";
    const date = new Date(dateStr);
    const dia = String(date.getDate()).padStart(2, "0");
    const mes = String(date.getMonth() + 1).padStart(2, "0");
    const ano = date.getFullYear();
    return `${ano}-${mes}-${dia}`;
}