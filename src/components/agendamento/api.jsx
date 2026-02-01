export default class ApiAgendamento {
    static base = "http://localhost:8081/api/agendamentos";

    static async CriarAgendamento({ cliente, pet, funcionario, servico, dataHora, token }) {

        const payload = {
            cliente: { id: Number(cliente) },
            pet: { id: Number(pet) },
            funcionario: { id: funcionario },
            servico: servico,
            dataHora: dataHora,
            status: "AGENDADO",
        };

        const response = await fetch(this.base, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }

    static async ListarAgendamentos(token) {
        const response = await fetch(this.base,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    }

    static async AtualizarAgendamento({ cliente, pet, funcionario, servico, dataHora, token }) {

        const payload = {
            cliente: { id: Number(cliente) },
            pet: { id: Number(pet) },
            funcionario: { id: funcionario },
            servico: servico,
            dataHora: dataHora,
        };

        const response = await fetch(`${this.base}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        return await response.json();
    }

    static async DeletarAgendamento(id, token) {
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