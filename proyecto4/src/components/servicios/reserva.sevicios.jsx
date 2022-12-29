import {db} from '../servicios/firebase';


import {
    collection,
    getDocs,
    getDoc,
    addDoc,
    updateDoc,
    deleteDoc,
    doc
} from "firebase/firestore";

const reservaListaRef= collection (db,"reservas")

class ReservasServicios{

    addReserva = (newReserva) =>{
        return addDoc(reservaListaRef, newReserva)
    };

    updateReserva =(id, updateReserva) =>{
        const reservaDoc = doc(db,"reservas",id);
        return updateDoc (reservaDoc,updateReserva)
    };

    deleteReserva = (id) =>{
        const reservaDoc = doc(db,"reservas",id);
        return deleteDoc(reservaDoc);
    };

    getAllReservas = () =>{
        return getDocs(reservaListaRef);
    }
    
    getReserva = (id) =>{
        const reservaDoc = doc(db,"reservas",id);
        return getDoc(reservaDoc);
    }


}

export default new ReservasServicios();