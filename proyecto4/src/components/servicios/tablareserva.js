import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import ReservaSevicios from "./reserva.sevicios";
import Table from "react-bootstrap/Table"
import { useEffect } from "react";




export const TablaReservas = () => {
    const [Reservas, setReserva] = useState([]);
    useEffect(() => {
        getReserva();
    }, []);

    const getReserva = async () => {
        const data = await ReservaSevicios.getAllReservas();
        setReserva(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await ReservaSevicios.deleteReserva(id);
        getReserva();
    };




    return (
        <> 
            
            <div className="mb-2">
                <Button variant="warning" onClick={getReserva}>
                    Actualizar
                </Button>
            </div>

            <Table  striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre</th>
                        <th>Fecha</th>
                        <th>N° de Personas</th>
                        <th>Teléfono</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {Reservas.map((doc, index) => {
                        return (
                            <tr key={doc.id}>
                                <td>{index + 1}</td>
                                <td>{doc.name}</td>
                                <td>{doc.date}</td>
                                <td>{doc.partySize}</td>
                                <td>{doc.phone}</td>
                                <td>{doc.time}</td>
                                <td>
                                    <Button
                                        variant="secondary"
                                        className="edit"
                                        onClick={(e) => getReserva(doc.id)}
                                    >
                                        Edit
                                    </Button>
                                    <Button
                                        variant="danger"
                                        className="delete"
                                        onClick={(e) => deleteHandler(doc.id)}
                                    >
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </Table>
        </>
    );
}