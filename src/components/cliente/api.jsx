export default class ApiCliente {
    static base = "http://localhost:8081/api/clientes";
    static async Create({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cepConsulta, token }) {
        const response = await fetch(this.base, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cepConsulta })
        });
        return await response.json();
    }

    static async Read(token) {
        const response = await fetch(this.base,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    }

    static async Update({ id, nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cepConsulta, token }) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cepConsulta })
        });
        return await response.json();
    }

    static async Delete(id, token) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar cliente");
        }

        if (response.status === 204) {
            return true;
        }
    }

    static async Get(id) {
        const response = await fetch(`${this.base}/${id}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    }
}