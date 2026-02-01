export default class ApiPet {
    static base = "http://localhost:8081/api/pets";

    static async CriarPet({ nome, tipoEspecie, raca, idade, peso, tutor, token }) {

        const payload = {
            nome: nome,
            tipoEspecie: tipoEspecie,
            raca: raca,
            idade: Number(idade),
            peso: Number(peso),
            tutor: {id: Number(tutor)}
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

    static async ListarPets(token) {
        const response = await fetch(this.base,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    }

    static async AtualizarPet({ id,nome, tipoEspecie, raca, idade, peso, tutor, token }) {

        const payload = {
            nome: nome,
            tipoEspecie: tipoEspecie,
            raca: raca,
            idade: Number(idade),
            peso: Number(peso),
            tutor: {id: Number(tutor)}
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

    static async DeletarPet(id, token) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "DELETE",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Erro ao deletar pet");
        }

        if (response.status === 204) {
            return true;
        }
    }

    static async GetPetByIdCliente(idCliente, token) {
        const response = await fetch(`${this.base}/obterPorIdCliente/${idCliente}`,{
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return await response.json();
    }
}