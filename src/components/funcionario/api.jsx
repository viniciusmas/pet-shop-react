export default class ApiFuncionario {
    static base = "http://localhost:8081/api/funcionarios";
    static username = "admin";
    static password = "adminPass";
    static credentials = btoa(`${this.username}:${this.password}`);

    static async Create({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cargo, salario, bonus, cepConsulta }) {
        const response = await fetch(this.base, {
            method: "POST",
            headers: {
                "Authorization": `Basic ${this.credentials}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cargo, salario, bonus, cepConsulta })
        });
        return await response.json();
    }

    static async Read() {
        const response = await fetch(this.base,{
            method: "GET",
            headers: {
                "Authorization": `Basic ${this.credentials}`,
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }

    static async Update({ id, nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cargo, salario, bonus, cepConsulta }) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Basic ${this.credentials}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ nome, cpf, rg, dataNascimento, sexo, estadoCivil, telefone, email, cargo, salario, bonus, cepConsulta })
        });
        return await response.json();
    }

    static async Delete(id) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Basic ${this.credentials}`,
                "Content-Type": "application/json"
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
                "Authorization": `Basic ${this.credentials}`,
                "Content-Type": "application/json"
            }
        });
        return await response.json();
    }
}