export default class ApiPet {
    static base = "http://localhost:8081/api/pets";

    static async Create({ nome, tipoEspecie, raca, idade, peso, tutor, token }) {
        const response = await fetch(this.base, {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ nome, tipoEspecie, raca, idade, peso, tutor: {id: tutor} })
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

    static async Update({ id,nome, tipoEspecie, raca, idade, peso, tutor, token }) {
        const response = await fetch(`${this.base}/${id}`, {
            method: "PUT",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify({ nome, tipoEspecie, raca, idade, peso, tutor })
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
            throw new Error("Erro ao deletar pet");
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