import ApiPet from "./api.jsx";
import { AddFormPet } from "./form.jsx";
import { ListPets } from "./list.jsx";
import { useEffect, useState } from "react";
import {useAuth} from "../../auth/AuthContext.jsx";

const CLEAN_STATE = {
    id: "", nome: "", tipoEspecie: "", raca: "", idade: "", peso: "", tutor: ""
};

export function Pet() {

    const {token} = useAuth();
    const [pets, setPets] = useState([]);
    const [pet, setPet] = useState(CLEAN_STATE);

    async function savePet({ id, ...data }) {
        if (id) {
            const result = await ApiPet.Update({ id, ...data, token });
            setPets((prev) => prev.map((p) => (p.id === result.id ? result : p))
            );
        } else {
            const result = await ApiPet.Create({ ...data, token });
            setPets((prev) => [...prev, result]);
        }
    }

    async function removePet(id) {
        await ApiPet.Delete(id, token);
        setPets((prev) => prev.filter((p) => p.id !== id));
    }

    async function GetListPet(){
        const result = await ApiPet.Read(token);
        setPets(result);
    }

    function editCallBack(id) {
        const petEdit = pets.find((pet) => pet.id === id);

        if (petEdit) {
            setPet(petEdit);
        } else {
            console.error("Pet não encontrado");
        }
    }

    useEffect(() => {
        GetListPet();
    }, []);

    return (
        <>
            <AddFormPet handleSave={savePet} pet={pet} />
            <ListPets pets={pets} handleDelete={removePet} handleEdit={editCallBack} />
        </>
    )
}