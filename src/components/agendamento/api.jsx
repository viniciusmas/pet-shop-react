export default class ApiAgendamento {
    static base = "http://localhost:8081/api/agendamentos";
    static async Create({ cliente, pet, funcionario, servico, dataHora, token }) {
        const status = "AGENDADO";
        const response = await fetch(this.base, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ cliente, pet, funcionario, servico, dataHora, status })
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

    static async Update({ cliente, pet, funcionario, servico, dataHora, token }) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ cliente, pet, funcionario, servico, dataHora })
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
            throw new Error("Erro ao deletar agendamento.");
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