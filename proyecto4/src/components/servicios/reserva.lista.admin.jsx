import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import ReservaSevicios from "./reserva.sevicios";
import Table from "react-bootstrap/Table"
import { useEffect } from "react";




const TablaReservas = () => {
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

            <Table striped bordered hover size="sm">
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

const ReservaLista = () => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [clave, setClave] = useState("");
    const verificarClave = (claveIngresada) => {
        if (claveIngresada === "123") {
            return true;
        } else {
            return false;
        }
    };


    return (
        <>
            <div style={{backgroundColor: "black"}}>
                <Button variant="warning" onClick={handleShow}>
                    Mostar Reservas
                </Button>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Ingrese la clave / la clave es 123 </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label htmlFor="clave">Clave:</label>
                        <input type="password" id="clave" onChange={(e) => setClave(e.target.value)} />
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Cancelar
                        </Button>
                        <Button variant="warning" onClick={() => {
                            if (verificarClave(clave)) {
                                handleClose();
                                alert("Mostrando tabla")
                                return <TablaReservas />
                                

                            } else {
                                alert("La clave es incorrecta");
                                setShow(false);
                                setTimeout(() => {
                                    setShow(true);
                                }, 100);
                            }
                        }} >
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        </>
    )
}




export default ReservaLista